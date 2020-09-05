// import other routes
const userRoutes = require('./users');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('welcome to the user api');
    });

    // other routes
    userRoutes(app, fs);

};

module.exports = appRouter;