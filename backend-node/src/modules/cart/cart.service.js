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

export const getCart=async(userId)=>{
    const cart= await Cart.findOne({
        user:userId
    }).populate("items.product");
    if(!cart)
    {
        return {
            items:[],
            subtotal:0
        }
    }
    const subtotal=cart.items.reduce((total,item)=>{
        return total+(item.product.price*item.quantity);
    },0)
    return {...cart.toObject(),subtotal};
}

export const updateCartItem=async(userId,productId, quantity)=>{
    const cart=await Cart.findOne({
        user:userId
    })
    if(!cart)
    {
        throw new Error('Cart not found')
    }

    const item=cart.items.find(
        item=>item.product.toString()===productId
    )

    if(!item)
    {
        throw new Error('Product not found in cart')
    }
    item.quantity=quantity;
    await cart.save();
    return cart;
}

export const removeCartItem=async(userId, product)=>{
    const cart=await Cart.findOne({
        user:userId
    })
    if(!cart)
    {
        throw new Error('Cart not found');
    }
    cart.items=cart.item.filter(
    item=> item.product.toString() !== productId    
    );

    await cart.save();
    return cart;

}

