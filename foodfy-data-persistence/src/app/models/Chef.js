/* Rocketseat: LaunchBase Bootcamp
   Foodfy Data Persistence */

const db = require("../../config/db");
const { date } = require("../../lib/utils");

module.exports = {
    all(callback) {
        const query = `
            SELECT chefs.*, count(recipes) AS total_recipes
            FROM chefs
            LEFT JOIN recipes ON (chefs.id = recipes.chef_id)
            GROUP BY chefs.id
            ORDER BY chefs.id ASC
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
            INSERT INTO chefs (
                name,
                avatar_url,
                created_at
            )
            VALUES (
                $1,
                $2,
                $3
            )
            RETURNING id
        `;
            
        const values = [
            data.name,
            data.avatar_url,
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
            SELECT *
            FROM chefs
            WHERE id = $1
        `;

        const value = [id];

        db.query(query, value, function(error, results) {
            if (error) {
                throw `Error while writing the file: ${error}`;
            }

            return callback(results.rows[0]);
        });
    },
    update(data, callback) {
        const query = `
            UPDATE chefs SET
                name=($1),
                avatar_url=($2)
            WHERE id = $3
        `;

        const values = [
            data.name,
            data.avatar_url,
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
            DELETE FROM chefs
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
    chefRecipes(id, callback) {
        const query = `
            SELECT recipes.*, chefs.name AS author
            FROM recipes
            LEFT JOIN chefs ON (chefs.id = recipes.chef_id)
            WHERE chefs.id = $1
        `;

        const value = [id];

        db.query(query, value, function(error, results) {
            if (error) {
                throw `Error while writing the file: ${error}`;
            }

            return callback(results.rows);
        });
    }
};
