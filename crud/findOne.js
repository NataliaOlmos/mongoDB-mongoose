require('../connection')

const { get } = require('mongoose');
const Product = require('../models/Product');
const User = require('../models/User')

async function getUser(){
    const products = await Product.findOne({name:'keyboard'});
    console.log(products)
}

getUser();