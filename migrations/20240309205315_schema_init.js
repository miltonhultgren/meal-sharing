export function up(knex) {
    return knex.schema
        .createTable('meal', (table) => {
            table.increments('id').notNullable();
            table.string('title', 80).notNullable();
            table.string('description').defaultTo('');
            table.string('location').notNullable();
            table.datetime('meal_date').notNullable();
            table.integer('max_reservations').defaultTo(2);
            table.decimal('price').defaultTo(1);
            table.date('created_date').notNullable();
        })
        .createTable('reservation', (table) => {
            table.increments('id').notNullable();
            table.integer('number_of_guests').defaultTo(1);
            table.date('created_date').notNullable();
            table.string('contact_phonenumber', 20).notNullable();
            table.string('contact_name').notNullable();
            table.string('contact_email').notNullable();
            table.integer('meal_id').unsigned().notNullable();
            table.foreign('meal_id', 'fk_reservation_to_meal').references('meal.id');
        })
        .createTable('review', (table) => {
            table.increments('id').notNullable();
            table.string('title', 80).notNullable();
            table.text('description').notNullable()
            table.integer('stars').defaultTo(1);
            table.date('created_date').notNullable();
            table.integer('meal_id').unsigned().notNullable();
            table.foreign('meal_id', 'fk_review_to_meal').references('meal.id');
        });
}

export function down(knex) {
    return knex.schema
        .dropTable('review')
        .dropTable('reservation')
        .dropTable('meal');
}
