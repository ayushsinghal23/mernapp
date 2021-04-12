require("dotenv").config();

const productsData=require("./data/products");
const connectDB=require("./config/db")
const Product=require("./models/product");
console.log("seeder.js");
connectDB();

const importData = async()=>{
    try{
        await Product.deleteMany({});

        await Product.insertMany(productsData);

        console.log("Data Import Success");

        process.exit(1);
    }catch(error)
    {
        console.log(error);
       console.error("Error with data import");
       process.exit(1);
    }
}

importData();

