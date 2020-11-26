/* Rocketseat: LaunchBase Bootcamp
   Challenge 04-07: Structuring Students */

const fs = require("fs");
const data = require("../data.json");
const { date } = require("../utils");

// List
exports.list = function(req, res) {
    return res.render("students/index", { students: data.students });
}

// Registration
exports.registration = function(req, res) {
    return res.render("students/registration");
}

// Post
exports.post = function(req, res) {
    const keys = Object.keys(req.body);

    for (let key of keys) {
        if (req.body[key] == "") {
            return res.send("Please fill in all the required fields");
        }
    }

        birthday = Date.parse(req.body.birthday);

    let id = 1;
    const lastStudent = data.students[data.students.lenght - 1];

    if (lastStudent) {
            id = lastStudent.id + 1;
    }

    data.students.push({
        id,
        ...req.body,
        birthday,
    });

    fs.writeFile("data.json", JSON.stringify(data, null, 2).concat("\n"), function(error) {
        if (error) {
            return res.send("Error while writing the file");
        }

        return res.redirect("/students");
    });
}

// Show
exports.show = function(req, res) {
    const { id } = req.params;

    const foundStudent = data.students.find(function(student) {
        return student.id == id;
    });

    if (!foundStudent) {
        return res.send("Student not found");
    }

    const student = {
        ...foundStudent,
        birthday: date(foundStudent.birthday).birthday
    };

    return res.render("students/show", { student });
}

// Edit
exports.edit =  function(req, res) {
    const { id } = req.params;

    const foundStudent = data.students.find(function(student) {
        return student.id == id;
    });

    if (!foundStudent) {
        return res.send("Student not found");
    }

    const student = {
        ...foundStudent,
        birthday: date(foundStudent.birthday).iso
    };

    return res.render("students/edit", { student });
}

// Put
exports.put = function(req, res) {
    const { id, birthday } = req.body;

    let index = 0;

    const foundStudent = data.students.find(function(student, foundIndex) {
        if (student.id == id) {
            index = foundIndex;

            return true;
        }
    });

    if (!foundStudent) {
        return res.send("Student not found");
    }

    const student = {
        ...foundStudent,
        ...req.body,
        id: Number(id),
        birthday: Date.parse(birthday)
    };

    data.students[index] = student;

    fs.writeFile("data.json", JSON.stringify(data, null, 2).concat("\n"), function(error) {
        if (error) {
            return res.send("Error while writing the file");
        }

        return res.redirect(`students/${id}`);
    });
}

// Delete
exports.delete = function(req, res) {
    const { id } = req.body;

    const filteredStudents = data.students.filter(function(student) {
        return student.id != id;
    });

    data.students = filteredStudents;

    fs.writeFile("data.json", JSON.stringify(data, null, 2).concat("\n"), function(error) {
        if (error) {
            return res.send("Error while writing the file");
        }

        return res.redirect("/students");
    });
}
