import Product from "./product.model.js";

export const createProduct=async(productData)=>{
    const product=await Product.create(productData);
    return product;
}

export const getAllProducts=async()=>{
    return await Product.find();
}

export const getProductById=async(id)=>{
    const product=await Product.findById(id);

    if(!product)
    {
        throw new Error('Product not found');
    }
    return product;
}