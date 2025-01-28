const express = require('express');
const { resolve } = require('path');

const app = express();
let cors = require('cors');
app.use(cors());
const port = 3000;
app.use(express.static('static'));

let products = [
  {
    id: 1,
    name: "Xiaomi iPhone 12",
    brand: "Xiaomi",
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: "Android",
    camera: 108,
  },
  {
    id: 2,
    name: "Oppo Mi 10",
    brand: "Xiaomi",
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: "iOS",
    camera: 64,
  },
  {
    id: 3,
    name: "Samsung Mi 10",
    brand: "Oppo",
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 4,
    name: "Apple Find X2",
    brand: "Samsung",
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 48,
  },
  {
    id: 5,
    name: "Oppo Mi 11",
    brand: "Xiaomi",
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: "iOS",
    camera: 24,
  },
  {
    id: 6,
    name: "OnePlus Find X3",
    brand: "Apple",
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 7,
    name: "Apple Pixel 5",
    brand: "Apple",
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 24,
  },
  {
    id: 8,
    name: "Google Mi 10",
    brand: "Oppo",
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: "iOS",
    camera: 108,
  },
  {
    id: 9,
    name: "Oppo Mi 11",
    brand: "Samsung",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 10,
    name: "Xiaomi Mi 10",
    brand: "Oppo",
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: "Android",
    camera: 12,
  },
  {
    id: 11,
    name: "OnePlus Pixel 5",
    brand: "Apple",
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 12,
  },
  {
    id: 12,
    name: "Xiaomi OnePlus 8",
    brand: "Xiaomi",
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: "Android",
    camera: 48,
  },
  {
    id: 13,
    name: "Xiaomi Pixel 6",
    brand: "Oppo",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 108,
  },
  {
    id: 14,
    name: "Samsung Find X2",
    brand: "Oppo",
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: "Android",
    camera: 48,
  },
  {
    id: 15,
    name: "Google OnePlus 8",
    brand: "Apple",
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: "iOS",
    camera: 24,
  },
  {
    id: 16,
    name: "OnePlus iPhone 12",
    brand: "OnePlus",
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: "iOS",
    camera: 64,
  },
  {
    id: 17,
    name: "Google Mi 11",
    brand: "Oppo",
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 18,
    name: "Google OnePlus 9",
    brand: "Apple",
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 64,
  },
  {
    id: 19,
    name: "Oppo Galaxy S22",
    brand: "Samsung",
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: "Android",
    camera: 12,
  },
  {
    id: 20,
    name: "Apple Pixel 5",
    brand: "Oppo",
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: "Android",
    camera: 108,
  },
];
function sortedProductsBasedOnRating(product1,product2)
{
  return product2.rating-product1.rating;
}
app.get('/products/sort/popularity', (req, res) => {
  let sortedProducts=products.slice();
  sortedProducts.sort(sortedProductsBasedOnRating);
  res.json({products:sortedProducts});
  
});
function sortingProductsOnPriceHighToLow(product1,product2)
{
  return product2.price-product1.price;
}
app.get('/products/sort/price-high-to-low',(req,res)=>{
  let sortedProducts=products.slice();
  sortedProducts.sort(sortingProductsOnPriceHighToLow);
  res.json({products:sortedProducts});
});

function sortingProductsOnPriceLowToToHigh(product1,product2)
{
  return product1.price-product2.price;
}
app.get('/products/sort/price-low-to-high',(req,res)=>{
  let sortedProducts=products.slice();
  sortedProducts.sort(sortingProductsOnPriceLowToToHigh);
  res.json({products:sortedProducts});
});

function sortingProductsOnRam(ramObj,ram)
{
  return ramObj.ram===ram;
}
app.get('/products/filter/ram',(req,res)=>{
  let ram=parseInt(req.query.ram);
  let sortedProducts = products.filter(ramObj => sortingProductsOnRam(ramObj, ram));
  res.json({ products: sortedProducts });
});


function sortingProductsOnRom(romObj,rom)
{
  return romObj.rom===rom;
}
app.get('/products/filter/rom',(req,res)=>{
  let rom=parseInt(req.query.rom);
  let sortedProducts = products.filter(romObj => sortingProductsOnRom(romObj, rom));
  res.json({ products: sortedProducts });
});

function filterOnBrand(brandObj,brand)
{
  return brandObj.brand.toLowerCase()===brand.toLowerCase();
}
app.get('/products/filter/brand',(req,res)=>{
  let brand=req.query.brand;
  let sortedProducts=products.filter(productObj=>filterOnBrand(productObj,brand));
  res.json({products:sortedProducts});

});
function sortingOnOs(osObj,os)
{
  return osObj.os.toLowerCase() === os.toLowerCase();
}
app.get('/products/filter/os',(req,res)=>{
  let os=req.query.os;
  let sortedProducts=products.filter(osObj=>sortingOnOs(osObj,os));
  res.json({products:sortedProducts})
});
function filteringOnPrice(priceObj,price)
{
return priceObj.price<=price;
}
app.get('/products/filter/price',(req,res)=>{
  let price=parseInt(req.query.price);
  let sortedProducts=products.filter(priceObj=>filteringOnPrice(priceObj,price));
  res.json({products:sortedProducts});

});
app.get('/products',(req,res)=>{
  res.json({products:products});
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
