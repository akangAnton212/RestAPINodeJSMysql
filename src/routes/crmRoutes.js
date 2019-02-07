const routes = (app) => {

    var todoList = require('../controller/crmController');

    app.route('/')
        .get(todoList.index);

    app.route('/users')
        .get(todoList.users);
    
    app.route('/users/:id')
        .get(todoList.getUsers);

    app.route('/postUser')
        .post(todoList.postUser);
    
    app.route('/updateUser')
        .post(todoList.updateUser);
}

module.exports = routes