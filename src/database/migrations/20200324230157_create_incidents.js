
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

// caso de algum problema o que preciso fazer? deletar a tabela nesse caso
exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
