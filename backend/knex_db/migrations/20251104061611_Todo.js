exports.up = function (knex) {
  return knex.schema.createTable("Todo", function (table) {
    table.increments("id").primary(); // auto-increment ID
    table.string("title").notNullable(); // task title
    table.text("description"); // task details
    table.boolean("Isdeleted").defaultTo(false); // mark done or not
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Todo");
};
