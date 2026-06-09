import knex from "knex";
import knexConfig from "./knexfile.js";


const db = knex(knexConfig.development); // Use the appropriate environment

export default db;
