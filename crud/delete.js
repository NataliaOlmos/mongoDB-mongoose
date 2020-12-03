require('../connection')

const { deleteOne } = require('../models/Product')
const Product = require('../models/Product')

const dltFunction = async () => {
    const result = await Product.deleteMany({name:'keyboard'})
    console.log(result)
} 

const dltAlternative = async () => {
    const result = await Product.deleteOne({name:'laptop hp'})
    console.log(result)
} 

const deleteProducts = async () => {
    const result = await Product.findOneAndDelete({name:'laptop'})
    console.log(result)
} 

const deleteProductsById = async () => {
    const result = await Product.findByIdAndDelete('5fc86fa46d50cd4969860bd8')
    console.log(result)
} 

deleteProductsById();