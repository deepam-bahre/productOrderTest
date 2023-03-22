const express = require("express");
const router = express();
const Product = require("../model/Product");

router.get("/", (req, res)=>{
    Product.find({})
    .then(result=>{
        res.status(200).json({"result": result});
    })
    .catch(err=>{
        res.status(400).json({"error": err});
    })
});

router.post("/", (req, res)=>{
    const product = new Product({
        "productName": req.body.productName,
        "description": req.body.description,
        "price": req.body.price,
        "quantity": req.body.quantity,
        "category": req.body.category,
        "Discount": req.body.Discount +"%",
    })
   product.save()
    .then(result=>{
        res.status(200).json({"result": result});
    })
    .catch(err=>{
        res.status(400).json(err);  
    })

});

router.get("/:id", (req, res)=>{
    Product.findById(req.params.id)
    .then(result=>{
        res.status(200).json({"result": result});
    })
    .catch(err=>{
        res.status(400).json({"error": err});
    })
});

router.patch("/:id", async (req, res)=>{
   const updateProduct= await Product.findOneAndUpdate(req.params._id, req.body, {new:true});
   if(updateProduct){
    res.status(200).json({"result": updateProduct});
}
else{
    res.status(400).json({"message": "Product is not updated"});  
}
});
router.delete("/:id", (req, res)=>{
    const deleteProduct=  Product.findOneAndDelete(req.params.id);
    if(deleteProduct){
     res.status(200).json({"result": deleteProduct});
 }
 else{
     res.status(400).json({"message": "Product is not deleted"});  
 }
 });


module.exports = router;