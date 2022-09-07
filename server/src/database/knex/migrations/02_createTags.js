exports.up = knex => knex.schema.createTable('tags', table => {
    table.increments('id')
    table.text('name').notNullable()

    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
    table.integer('note_id').references('id').inTable('notes').onDelete('CASCADE').onUpdate('CASCADE')
}) 

exports.down = knex => knex.schema.dropTable('tags')
