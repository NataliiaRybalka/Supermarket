const { ProductModel} = require('../database');

module.exports = {
    getAllProducts: async (req, res) => {
        const products = await ProductModel.find();
        res.json(products);

    }
};