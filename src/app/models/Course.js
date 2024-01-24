const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        // name: { type: String, default: 'hahaha' },
        name: { type: String, maxLength: 255 },
        descriptions: { type: String, maxLength: 600 },
        image: { type: String, maxLength: 255 },
        videoId: { type: String, maxLength: 255 },
        level: { type: String, maxLength: 255 },
        slug: { type: String, slug: 'name', unique: true }, // why can not I use the propertier unique : true for slug
    },
    {
        timestamps: true,
    },
);
//plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true,
    deleted: true,
});

module.exports = mongoose.model('Course', Course);
