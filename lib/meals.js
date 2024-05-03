import sql from "better-sqlite3";
import { resolve } from "styled-jsx/css";

const db = sql("meals.db");

export const getMeals = async function () {
  new Promise((resolve) => setTimeout(resolve(), 2000));
  return db.prepare("SELECT * FROM meals").all();
};

export const getMeal = (slug) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
};