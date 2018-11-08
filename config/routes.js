const productRouter = require('../product/productRouter')

module.exports = server => {
    server.use('/api/products', productRouter);
}