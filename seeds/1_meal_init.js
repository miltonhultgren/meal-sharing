export function seed(knex) {
  return knex('meal').del()
    .then(() => knex('meal').insert([
      {
        title: 'Homemade carbonara',
        description: 'My wife makes the best carbonara, come try it!',
        location: 'My home',
        meal_date: '2024-03-16',
        max_reservations: 4,
        price: 0,
        created_date: '2024-03-09 21:25:30',
      },
      {
        title: 'Zucchini and bacon pasta',
        description: 'Great and simple comfort food to make you healthy',
        location: 'My home',
        meal_date: '2024-03-23',
        max_reservations: 6,
        price: 0,
        created_date: '2024-03-09 21:25:30',
      },
      {
        title: 'Swedish tacos',
        description: 'Nothing says Sweden like tacos, am I right?',
        location: 'My home',
        meal_date: '2024-03-30',
        max_reservations: 8,
        price: 0,
        created_date: '2024-03-09 21:25:30',
      },
    ]));
}
