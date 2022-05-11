const warehouseController = {};

// vista principal de warehouse
warehouseController.index = (request, response) => {
    response.render('warehouse/index'); 
}

module.exports = warehouseController; 