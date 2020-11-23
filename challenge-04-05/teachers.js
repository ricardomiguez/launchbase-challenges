/* Rocketseat: LaunchBase Bootcamp
   Challenge 04-05: Put and Delete */

const fs = require("fs");
const data = require("./data.json");
const { age, date } = require("./utils");

// Registration
exports.post = function(req, res) {
    const keys = Object.keys(req.body);

    for (let key of keys) {
        if (req.body[key] == "") {
            return res.send("Please fill in all the required fields");
        }
    }

    let { profilePicture, name, birthday, academicDegree, teachingMethod, subjects } = req.body;

        birthday = Date.parse(birthday);

    const registrationDate = Date.now();
    const id = Number(data.teachers.length + 1);

    data.teachers.push({
        id,
        registrationDate,
        profilePicture,
        name,
        birthday,
        academicDegree,
        teachingMethod,
        subjects
    });

    fs.writeFile("data.json", JSON.stringify(data, null, 2).concat("\n"), function(error) {
        if (error) {
            return res.send("Error while writing the file");
        }

        return res.redirect("/teachers");
    });
}

// Show
exports.show = function(req, res) {
    const { id } = req.params;

    const foundTeacher = data.teachers.find(function(teacher) {
        return teacher.id == id;
    });

    if (!foundTeacher) {
        return res.send("Teacher not found");
    }

    const teacher = {
        ...foundTeacher,
        age: age(foundTeacher.birthday),
        subjects: foundTeacher.subjects.split(","),
        registrationDate: new Intl.DateTimeFormat("en-GB").format(foundTeacher.registrationDate)
    };

    return res.render("teachers/show", { teacher });
}

// Edit
exports.edit =  function(req, res) {
    const { id } = req.params;

    const foundTeacher = data.teachers.find(function(teacher) {
        return teacher.id == id;
    });

    if (!foundTeacher) {
        return res.send("Teacher not found");
    }

    const teacher = {
        ...foundTeacher,
        birthday: date(foundTeacher.birthday)
    };

    return res.render("teachers/edit", { teacher });
}

// Update
exports.update = function(req, res) {
    const { id, birthday } = req.body;

    let index = 0;

    const foundTeacher = data.teachers.find(function(teacher, foundIndex) {
        if (teacher.id == id) {
            index = foundIndex;

            return true;
        }
    });

    if (!foundTeacher) {
        return res.send("Teacher not found");
    }

    const teacher = {
        ...foundTeacher,
        ...req.body,
        birthday: Date.parse(birthday)
    };

    data.teachers[index] = teacher;

    fs.writeFile("data.json", JSON.stringify(data, null, 2).concat("\n"), function(error) {
        if (error) {
            return res.send("Error while writing the file");
        }

        return res.redirect(`teachers/${id}`);
    });
}

// Delete
exports.delete = function(req, res) {
    const { id } = req.body;

    const filteredTeachers = data.teachers.filter(function(teacher) {
        return teacher.id != id;
    });

    data.teachers = filteredTeachers;

    fs.writeFile("data.json", JSON.stringify(data, null, 2).concat("\n"), function(error) {
        if (error) {
            return res.send("Error while writing the file");
        }

        return res.redirect("/teachers");
    });
}
