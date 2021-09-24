const express = require('express');
const app = express();
const path = require('path');
const seed = require('./seed');
const methodOverride = require('method-override')


const Product = require('./models/products');



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true})) //url parsing using builtin middleware
app.use(methodOverride('_method'))     // overides default http request in a form

// main products page
app.get('/products', async (req, res)=>{
    const products = await Product.find({})
    res.render('index',{ products })
})

//renders add new product page
app.get('/products/new', (req, res) => {
    res.render('newprod')
   
})

//view a particular product
app.get('/products/:id', async (req, res)=>{
    const { id } = req.params;
    const products = await Product.findById(id)
    res.render('show', { products })
})


//add new product to database
app.post('/products', async (req, res)=>{
    const newproducts = new Product(req.body)
    await newproducts.save();
    res.redirect(`/products/${newproducts._id}`)
})

//renders edit product page
app.get('/products/:id/edit', async (req, res)=>{
    const {id}= req.params
    const product = await Product.findById(id)
    res.render('Edit', { product })
})

//update product after edit
app.post('/products/:id/edit/post', async (req, res)=>{
    const { id } = req.params
    const product = await Product.findByIdAndUpdate(id,req.body,{new:true, runValidators:true})
    res.redirect(`/products/${product._id}`)
    
})

//delete
app.delete('/products/:id/delete', async (req, res)=>{
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products')
})

app.listen(3000, ()=>{
    console.log('listening')
});