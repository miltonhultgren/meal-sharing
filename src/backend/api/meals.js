import express from "express";
const router = express.Router();
import knex from "../database.js";

router.get("/", async (request, response) => {
  try {
    const titles = await knex("meal").select("title");
    response.json(titles);
  } catch (error) {
    console.error(error);
    response.status(500).send('HTTP 500: Internal server error');
  }
});

export default router;
