/* Rocketseat: LaunchBase Bootcamp
   Foodfy Data Persistence */

module.exports = {
    date(timestamp) {
        const date = new Date(timestamp);

        const year = date.getFullYear();
        const month = `0${date.getMonth() + 1}`.slice(-2);
        const day = `0${date.getDate()}`.slice(-2);

        return {
            year,
            month,
            day,
            ISO: `${year}-${month}-${day}`
        };
    }
};
