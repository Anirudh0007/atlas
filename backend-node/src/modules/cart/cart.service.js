import Product from "../products/product.model.js"
import Cart from "./cart.model.js";


export const addToCart=async(userId,{productId,quantity})=>{
    const product=await Product.findById(productId);
    if(!product)
    {
        throw new Error('Product not found');
    }

    let cart=await Cart.findOne({user:userId});

    if(!cart)
    {
        cart=await Cart.create({
            user:userId,
            items:[]
        })
    }

    const existingItem= cart.items.find(
        item=>item.product.toString()===productId
    );

    if(existingItem)
    {
        existingItem.quantity+=quantity;
    }
    else
    {
            cart.items.push({
                product:productId,
                quantity
            })
    }
    await cart.save();
    return cart;
}