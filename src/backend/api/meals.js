import express from "express";
const router = express.Router();
import knex from "../database.js";

router.get("/", async (request, response) => {
  try {
    // const mealsAbovePrice = await knex('meal').where('price', '<', 90);

    // const mealsWildcardTitle = await knex('meal').where('title', 'like', '%asta');

    // const mealsCreatedInRange = await knex('meal').whereBetween('created_date', ['2024-03-08 21:25:30', '2024-03-10 21:25:30']);

    // const mealsLimited = await knex('meal').limit(2);

    // const reservationsForMealByDate = await knex('reservation').where('meal_id', '=', 1).orderBy('created_date', 'desc');

    // const mealsWithGoodReviews = await knex('meal').innerJoin('review', 'meal.id', 'review.meal_id').groupBy('meal.id')
    //   .select('meal.*').avg('review.stars as score').having('score', '>=', 5);

    // const mealsByScore = await knex('meal').innerJoin('review', 'meal.id', 'review.meal_id').groupBy('meal.id')
    //   .select('meal.*').avg('review.stars as score').orderBy('score', 'desc')
    
    // const mealsAvailable = await knex('meal').innerJoin('reservation', 'meal.id', 'reservation.meal_id').groupBy('meal.id')
    //   .select('meal.*').having('meal.max_reservations', '>', knex.sum('reservation.number_of_guests'));

    const titles = await knex("meal").select("title");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

export default router;
