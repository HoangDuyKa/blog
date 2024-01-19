const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    //[GET] /news
    index(req, res, next) {
        // try {
        //     const courses = await Course.find();
        //     res.json(courses);
        // } catch (error) {
        //     res.status(400).json({ error: "Error!" });
        // }

        Course.find({})
            .then((courses) =>
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
    //[GET] /news/search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
