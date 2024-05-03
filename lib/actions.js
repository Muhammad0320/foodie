"use server";

export const shareMeal = async (data) => {
  const meal = {
    creator: data.get("name"),
    creator_email: data.get("email"),
    image: data.get("image"),

    title: data.get("title"),
    instructions: data.get("instructions"),
    summary: data.get("summary"),
  };

  console.log(meal);
};
