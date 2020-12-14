/* Rocketseat: LaunchBase Bootcamp
   Challenge 05-02: Interacting with the Database */

const db = require("../../config/db");
const { date } = require("../../lib/utils");

module.exports = {
    all(callback) {
        const query = `
            SELECT *
            FROM teachers
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
            INSERT INTO teachers (
                avatar_url,
                name,
                birth_date,
                education_level,
                class_type,
                subjects_taught,
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
            data.education_level,
            data.class_type,
            data.subjects_taught,
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
            FROM teachers
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
            UPDATE teachers SET
                avatar_url=($1),
                name=($2),
                birth_date=($3),
                education_level=($4),
                class_type=($5),
                subjects_taught=($6)
            WHERE id = $7
        `;

        const values = [
            data.avatar_url,
            data.name,
            date(data.birth_date).iso,
            data.education_level,
            data.class_type,
            data.subjects_taught,
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
            DELETE FROM teachers
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
