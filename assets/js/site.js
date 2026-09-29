import fetchProduct from './mymodule.js' //imports default single id product
import { fetchProducts } from './mymodule.js' //imports  all products with limit
import { fetchCatagories } from './mymodule.js' //imports all catagories
import { fetchProductByCatagory } from './mymodule.js' //imports all products within a specific catagory
import { fetchSearchProduct } from './mymodule.js' //imports the search function

await fetchProducts(25) //limit amount
await fetchProduct(1) // product id
await fetchCatagories() //all catagories
await fetchProductByCatagory("beauty") //products by catagory
await fetchSearchProduct("cat") //search for products