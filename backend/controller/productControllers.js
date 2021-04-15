const Product=require("../models/product");

const getAllProducts= async(req,res)=>{
    try{
        const products=await Product.find({})
        res.json(products)
    }catch(error)
    {
        console.error(error);
        res.status(500).json({message:"Server Error"});
    }
}


const getProductById= async(req,res)=>{
    try{
        const products=await Product.findById(req.params.id)
        res.json(products)
    }catch(error)
    {
        console.error(error);
        res.status(500).json({message:"Server Error"});
    }
}

const addItem = (req,res)=>{
    const name=res.body.name;
    const desc=res.body.desc;
    const price=res.body.cost;
    const quantity=res.body.quant;
    const newProduct=new Product({
        name,desc,price,quantity
    })
    newProduct.save();
}

module.exports=
{
    getAllProducts,getProductById,addItem
}