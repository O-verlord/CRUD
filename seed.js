//this is the seed data i used to populate the database 

const mongoose = require('mongoose');

const Product = require('./models/products')
async function main() {
    await mongoose.connect('mongodb://localhost:27017/webdev');
    console.log('done');
  }
  
  main().catch(err => console.log(err));

  const seedproducts = [
    {
    name: 'Mango',
    price: 1,
    category: 'fruits',
    unique: true
    
    },
    {
      name: 'Bell Pepper',
      price: 1.1,
      category: 'vegetable',
      unique: true
      
    },
    {
      name: 'Cottage Cheese',
      price: 2.3,
      category: 'dairy',
      unique: true
    },
    {
      name:'Skimmed Milk',
      price: 1.2,
      category: 'dairy',
      unique: true

    },
    {
      name: 'Banana',
      price: 1,
      category: 'fruits',
      unique: true
    }

]

/*Product.insertMany(seedproducts).then(r=>{
  console.log(r)
}).catch(e=>{
  console.log(e)
});*/