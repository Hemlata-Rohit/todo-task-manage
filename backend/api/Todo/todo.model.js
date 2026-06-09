import db from "../../knex_db/db.js";

const TodoTask = {
  getAll: () => db("Todo").select("*"),
  getById: (id) => db("Todo").where({ id }).first(),
  create: (data) => db("Todo").insert(data).returning("*"),
  update: (id, data) => db("Todo").where({ id }).update(data).returning("*"),
  remove: (id) => db("Todo").where({ id }).del(),
};

export default TodoTask;
