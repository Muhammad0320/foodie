import sql from "better-sqlite3";
import slugify from "slugify";

import xss from "xss";

const db = sql("meals.db");

export const getMeals = async function () {
  new Promise((resolve) => setTimeout(resolve(), 2000));
  return db.prepare("SELECT * FROM meals").all();
};

export const getMeal = (slug) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
};

export const shareMEal = (meal) => {
  (meal.instructions = xss(meal.instructions)),
    (meal.slug = slugify(meal.title, { lower: true }));
};
