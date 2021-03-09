/* Rocketseat: LaunchBase Bootcamp
   Foodfy Data Persistence */

const db = require("../../config/db");
const { date } = require("../../lib/utils");

module.exports = {
    all(callback) {
        const query = `
            SELECT recipes.*, chefs.name AS author
            FROM recipes
            LEFT JOIN chefs ON (chefs.id = recipes.chef_id)
            ORDER BY recipes.id ASC
        `;

        db.query(query, function(error, results) {
            if (error) {
                throw `Error while writing the file: ${error}`;
            }

            return callback(results.rows);
        });
    },
    create(data, callback) {
        const query = `
            INSERT INTO recipes (
                chef_id,
                image,
                title,
                ingredients,
                preparation,
                information,
                created_at
            )
            VALUES (
                $1,
                $2,
                $3,
                $4,
                $5,
                $6,
                $7
            )
            RETURNING id
        `;

        const values = [
            data.chef_id,
            data.image,
            data.title,
            data.ingredients,
            data.preparation,
            data.information,
            date(Date.now()).ISO
        ];

        db.query(query, values, function(error, results) {
            if (error) {
                throw `Error while writing the file: ${error}`;
            }
            
            return callback(results.rows[0]);
        });
    },
    find(id, callback) {
        const query = `
            SELECT recipes.*, chefs.id AS chef_id, chefs.name AS author
            FROM recipes
            LEFT JOIN chefs ON (chefs.id = recipes.chef_id)
            WHERE recipes.id = $1
        `;

        const value = [id];

        db.query(query, value, function(error, results) {
            if (error) {
                throw `Error while writing the file: ${error}`;
            }

            return callback(results.rows[0]);
        });
    },
    findBy(filter, callback) { // TODO
        const query = `
            SELECT recipes.*, chefs.name AS author
            FROM recipes
            LEFT JOIN chefs ON (chefs.id = recipes.chef_id)
            WHERE recipes.title ILIKE '%${filter}%'
            ORDER BY recipes.id ASC
        `;

        db.query(query, function(error, results) {
            if (error) {
                throw `Error while writing the file: ${error}`;
            }

            return callback(results.rows);
        });
    },
    update(data, callback) {
        const query = `
            UPDATE recipes SET
                chef_id=($1),
                image=($2),
                title=($3),
                ingredients=($4),
                preparation=($5),
                information=($6)
            WHERE id = $7
        `;

        const values = [
            data.chef_id,
            data.image,
            data.title,
            data.ingredients,
            data.preparation,
            data.information,
            data.id
        ];

        db.query(query, values, function(error, results) {
            if (error) {
                throw `Error while writing the file: ${error}`;
            }

            return callback();
        });
    },
    delete(id, callback) {
        const query = `
            DELETE FROM recipes
            WHERE id = $1
        `;

        const value = [id];

        db.query(query, value, function(error, results) {
            if (error) {
                throw `Error while writing the file: ${error}`;
            }

            return callback();
        });
    },
    chefOptions(callback) {
        const query = `
            SELECT *
            FROM chefs
            ORDER BY name ASC
        `;

        db.query(query, function(error, results) {
            if (error) {
                throw `Error while writing the file: ${error}`;
            }

            return callback(results.rows);
        });
    }
};
