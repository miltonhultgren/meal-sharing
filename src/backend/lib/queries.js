// | Get meals that has a price smaller than a specific price fx 90                                                 |
// const mealsAbovePrice = await knex('meal').where('price', '<', 90);

// | Get meals that partially match a title. `Rød grød med` will match the meal with the title `Rød grød med fløde` |
// const mealsWildcardTitle = await knex('meal').where('title', 'like', '%asta');

// | Get meals that has been created between two dates                                                              |
// const mealsCreatedInRange = await knex('meal').whereBetween('created_date', ['2024-03-08 21:25:30', '2024-03-10 21:25:30']);

// | Get only specific number of meals fx return only 5 meals                                                       |
// const mealsLimited = await knex('meal').limit(2);

// | Get reservations for a specific meal sorted by created_date                                                    |
// const reservationsForMealByDate = await knex('reservation').where('meal_id', '=', 1).orderBy('created_date', 'desc');

// | Get the meals that have good reviews                                                                           |
// const mealsWithGoodReviews = await knex('meal').innerJoin('review', 'meal.id', 'review.meal_id').groupBy('meal.id')
//   .select('meal.*').avg('review.stars as score').having('score', '>=', 5);

// | Sort all meals by average number of stars in the reviews                                                       |
// const mealsByScore = await knex('meal').innerJoin('review', 'meal.id', 'review.meal_id').groupBy('meal.id')
//   .select('meal.*').avg('review.stars as score').orderBy('score', 'desc')

// | Get meals that still has available reservations                                                                |
// const mealsAvailable = await knex('meal').innerJoin('reservation', 'meal.id', 'reservation.meal_id').groupBy('meal.id')
//   .select('meal.*').having('meal.max_reservations', '>', knex.sum('reservation.number_of_guests'));
