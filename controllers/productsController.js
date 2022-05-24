const productsController = {};

productsController.index = (request, response) => {//es una funcion de flecha

    response.render('products/index'); //200 que esta bien  //500 error de la base de datos*/
}

module.exports = productsController; 