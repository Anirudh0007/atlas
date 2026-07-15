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

export const updateProduct=async(id, productData)=>{

    const product=await Product.findByIdAndUpdate(
        id,productData,
        {
            new:true,
            runValidators:true
        }
    )
    if(!product)
    {
        throw new Error("Product not found");
    }
    return product;
}

export const deleteProduct=async(id)=>{
    const product=await Product.findByIdAndDelete(id);

    if(!product)
    {
        throw new Error("Product not found");
    }
    return product;
}