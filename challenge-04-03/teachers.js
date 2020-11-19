/* Rocketseat: LaunchBase Bootcamp
   Challenge 04-03: Teacher Form and Registration Route */

const fs = require("fs");
const data = require("./data.json");

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
