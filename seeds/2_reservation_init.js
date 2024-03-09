export function seed(knex) {
  return knex('reservation').del()
    .then(() => knex('reservation').insert([
      {
        number_of_guests: 2,
        created_date: '2024-03-09 21:25:30',
        contact_phonenumber: '+336 12 83 81 45',
        contact_name: 'Milton',
        contact_email: 'milton.hultgren@elastic.co',
        meal_id: 1,
      },
      {
        number_of_guests: 2,
        created_date: '2024-03-09 21:25:30',
        contact_phonenumber: '+336 12 83 81 45',
        contact_name: 'Milton',
        contact_email: 'milton.hultgren@elastic.co',
        meal_id: 2,
      }, {
        number_of_guests: 2,
        created_date: '2024-03-09 21:25:30',
        contact_phonenumber: '+336 12 83 81 45',
        contact_name: 'Milton',
        contact_email: 'milton.hultgren@elastic.co',
        meal_id: 3,
      },
    ]));
}
