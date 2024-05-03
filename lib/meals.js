import sql from "better-sqlite3";
import slugify from "slugify";

import xss from "xss";
import fs from "node:fs";
const db = sql("meals.db");

export const getMeals = async function () {
  new Promise((resolve) => setTimeout(resolve(), 2000));
  return db.prepare("SELECT * FROM meals").all();
};

export const getMeal = (slug) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
};

export const saveMeal = async (meal) => {
  meal.instructions = xss(meal.instructions);
  meal.slug = slugify(meal.title, { lower: true });

  const extension = meal.image.name.split(".").pop();

  const filename = `${meal.slug}-${Math.random()}.${extension}`;

  const stream = fs.createWriteStream(`/public/images/${filename}`);

  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (err) => {
    if (err) {
      throw new Error("Error saving image...");
    }
  });

  meal.image = `/images/${filename}`;

  db.prepare(
    `
  
    INSERT INTO meals
    (title, summary, instructions, creator, creator_email, image, slug)

    VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)

  
  `
  ).run(meal);
};
