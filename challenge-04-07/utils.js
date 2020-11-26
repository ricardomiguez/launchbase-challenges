/* Rocketseat: LaunchBase Bootcamp
   Challenge 04-07: Structuring Students */

module.exports = {
    age: function(timestamp) {
        const today = new Date();
        const birthday = new Date(timestamp);

        let age = today.getFullYear() - birthday.getFullYear();

        const month = today.getMonth() - birthday.getMonth();

        if (month < 0 || month == 0 && today.getDate() <= birthday.getDate()) {
            age--;
        }

        return age;
    },
    date: function(timestamp) {
        const date = new Date(timestamp);

        const year = date.getFullYear();
        const month = `0${date.getMonth() + 1}`.slice(-2);
        const day = `0${date.getDate()}`.slice(-2);

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthday: `${day}/${month}/${year}`
        }
    }
}
