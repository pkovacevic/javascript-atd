var path = require('path');

module.exports = {
    entry: {
        "index": "./Scripts/src/index.js",
        "about": "./Scripts/src/about.js",
        "contact": "./Scripts/src/contact.js",
        "admin/index": "./Scripts/src/admin/index.js",
        "admin/products/edit": "./Scripts/src/admin/products/edit.js"
    },
    output: {
        path: path.join(process.cwd(), 'Scripts/dist/'),
        filename: "[name].js"
    }
};