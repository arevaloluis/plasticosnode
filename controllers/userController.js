const userController = {};

userController.index = (request, response) => {//es una funcion de flecha

    response.render('users/index'); //200 que esta bien  //500 error de la base de datos*/
}

module.exports = userController; 