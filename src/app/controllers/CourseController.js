const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
// const slug = require('slug')

class SiteController {
    //[GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .exec()
            .then((course) =>
                res.render('courses/show', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }
    //[GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }
    //[POST] /courses/store
    store(req, res, next) {
        // console.log(req.body);
        // // Respond with the JSON data
        // res.json(req.body);
        req.body.image = `https://files.fullstack.edu.vn/f8-prod/courses/6.png`;
        // formData.slug = slug(formData.name)

        // const course = new Course(req.body);
        // course.save()
        //     .then(() => res.redirect('/me/stored/courses'))
        //     .catch((error) => {});
        res.json(req.body);
    }

    //[GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id).then((courses) =>
            res.render('courses/edit', {
                courses: mongooseToObject(courses),
            }),
        );
    }
    //[PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    //[DELETE] /courses/:id
    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //[DELETE] /courses/:id/force
    destroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //[PATCH] /courses/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //[PATCH] /courses/handle-form-actions
    handleFormActions(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Course.delete({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ message: 'action is invalid' });
        }
    }
}

module.exports = new SiteController();
