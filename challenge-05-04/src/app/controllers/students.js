/* Rocketseat: LaunchBase Bootcamp
   Challenge 05-04: Database Results Pagination */

const Student = require("../models/Student");
const { age, date } = require("../../lib/utils");

module.exports = {
    index(req, res) {
        let { filter, page, limit } = req.query;

        page = page || 1;
        limit = limit || 1;

        let offset = limit * (page - 1);

        const parameters = {
            filter,
            page,
            limit,
            offset,
            callback(students) {
                const pagination = {
                    page,
                    total: Math.ceil(students[0].total / limit)
                };

                return res.render("students/index", { students, filter, pagination });
            }
        };

        Student.paginate(parameters);
    },
    create(req, res) {
        Student.selectTeacher(function(teacherOptions) {
            return res.render("students/create", { teacherOptions });
        });
    },
    post(req, res) {
        const keys = Object.keys(req.body);

        for(let key of keys) {
            if (req.body[key] == "") {
                return res.send("Please fill in all the required fields");
            }
        }

        Student.create(req.body, function(student) {
            return res.redirect(`/students/${student.id}`);
        });
    },
    show(req, res) {
        Student.find(req.params.id, function(student) {
            if (!student) {
                return res.send("Student not found");
            }

            student.birth_date = date(student.birth_date).birthday;

            return res.render("students/show", { student });
        });
    },
    edit(req, res) {
        Student.find(req.params.id, function(student) {
            if (!student) {
                return res.send("Student not found");
            }

            student.birth_date = date(student.birth_date).iso;

            Student.selectTeacher(function(teacherOptions) {
                return res.render("students/edit", { student, teacherOptions });
            });
        });
    },
    put(req, res) {
        const keys = Object.keys(req.body);

        for(let key of keys) {
            if (req.body[key] == "") {
                return res.send("Please fill in all the required fields");
            }
        }

        Student.update(req.body, function() {
            return res.redirect(`/students/${req.body.id}`);
        });
    },
    delete(req, res) {
        Student.delete(req.body.id, function() {
            return res.redirect("/students");
        });
    }
};
