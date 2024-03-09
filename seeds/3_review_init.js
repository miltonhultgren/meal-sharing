export function seed(knex) {
  return knex('review').del()
    .then(() => knex('review').insert([
      {
        title: 'I love this carbonara',
        description: 'If I was stuck on an island and could only choose one meal to eat until I die, I would pick this.',
        stars: 5,
        created_date: '2024-03-09 21:25:30',
        meal_id: 1,
      },
      {
        title: 'Feeling healthier already',
        description: 'The zucchini pieces were just the right size and crispy, the tomato sauce very sweet and you can sense the bacon flavor in the background.',
        stars: 4,
        created_date: '2024-03-09 21:25:30',
        meal_id: 2,
      },
      {
        title: 'My belly is exploding',
        description: 'I did not expect this when I heard Swedish tacos, it was messy but very tasty!',
        stars: 4,
        created_date: '2024-03-09 21:25:30',
        meal_id: 3,
      },
    ]));
}
