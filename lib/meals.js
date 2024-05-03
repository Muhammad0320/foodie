import sql from "better-sqlite3";

const db = sql("meals.db");

export const getMeals = async function () {
  return db.prepare("SELECT * FROM meals").all();
};
