"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

const isInvalidText = (text) => {
  return !text || !text.trim();
};

export const shareMeal = async (prevState, data) => {
  const meal = {
    creator: data.get("name"),
    creator_email: data.get("email"),
    image: data.get("image"),

    title: data.get("title"),
    instructions: data.get("instructions"),
    summary: data.get("summary"),
  };

  if (
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    isInvalidText(meal.title) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.summary) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    !meal.image.size
  ) {
    throw new Error("Invalid input");
  }

  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
};
