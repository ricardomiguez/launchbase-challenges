/* Rocketseat: LaunchBase Bootcamp
   Challenge 05-04: Database Results Pagination */

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
                created_at,
                teacher_id
            )
            VALUES (
                $1,
                $2,
                $3,
                $4,
                $5,
                $6,
                $7,
                $8
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
            date(Date.now()).iso,
            data.teacher
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
            SELECT students.*, teachers.name AS teacher_name
            FROM students
            LEFT JOIN teachers ON (students.teacher_id = teachers.id)
            WHERE students.id = $1
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
                weekly_workload=($6),
                teacher_id=($7)
            WHERE id = $8
        `;

        const values = [
            data.avatar_url,
            data.name,
            date(data.birth_date).iso,
            data.email,
            data.school_level,
            data.weekly_workload,
            data.teacher,
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
    },
    selectTeacher(callback) {
        const query = `
            SELECT name, id
            FROM teachers
        `;

        db.query(query, function(error, results) {
            if (error) {
                throw `Error while writing the file: ${error}`;
            }

            return callback(results.rows);
        });
    },
    paginate(parameters) {
        const { filter, limit, offset, callback } = parameters;

        let query = "",
            filterQuery = "",
            totalQuery = `
            (
                SELECT count(*)
                FROM students
            ) AS total
            `;

        if (filter) {
            filterQuery = `
                WHERE students.name ILIKE '%${filter}%'
                OR students.email ILIKE '%${filter}%'
            `;

            totalQuery = `
            (
                SELECT count(*)
                FROM students
                ${filterQuery}
            ) AS total
            `;
        }

        query = `
            SELECT students.*, ${totalQuery}
            FROM students
            ${filterQuery}
            ORDER BY name ASC
            LIMIT $1 OFFSET $2
        `;

        db.query(query, [limit, offset], function(error, results) {
            if (error) {
                throw `Error while writing the file: ${error}`;
            }

            return callback(results.rows);
        });
    }
};
