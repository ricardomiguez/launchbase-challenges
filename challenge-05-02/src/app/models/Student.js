/* Rocketseat: LaunchBase Bootcamp
   Challenge 05-02: Interacting with the Database */

const db = require("../../config/db");
const { date } = require("../../lib/utils");

module.exports = {
    all(callback) {
        const query = `
            SELECT *
            FROM students
            ORDER BY name ASC
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
            INSERT INTO students (
                avatar_url,
                name,
                birth_date,
                email,
                school_level,
                weekly_workload,
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
            data.avatar_url,
            data.name,
            date(data.birth_date).iso,
            data.email,
            data.school_level,
            data.weekly_workload,
            date(Date.now()).iso
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
            FROM students
            WHERE id = $1
        `;

        const value = [ id ];

        db.query(query, value, function(error, results) {
            if (error) {
                throw `Error while writing the file: ${error}`;
            }

            return callback(results.rows[0]);
        });
    },
    update(data, callback) {
        const query = `
            UPDATE students SET
                avatar_url=($1),
                name=($2),
                birth_date=($3),
                email=($4),
                school_level=($5),
                weekly_workload=($6)
            WHERE id = $7
        `;

        const values = [
            data.avatar_url,
            data.name,
            date(data.birth_date).iso,
            data.email,
            data.school_level,
            data.weekly_workload,
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
            DELETE FROM students
            WHERE id = $1
        `;

        const value = [ id ];

        db.query(query, value, function(error, results) {
            if (error) {
                throw `Error while writing the file: ${error}`;
            }

            return callback();
        });
    }
};
