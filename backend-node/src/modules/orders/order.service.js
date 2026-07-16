import Cart from "../cart/cart.model.js"
import Order from "./order.model.js";


export const placeOrder=async(userId)=>{
    const cart=await Cart.findOne({
        user:userId
    }).populate("items.product");

    if(!cart || cart.items.length===0)
    {
        throw new Error('Cart is empty');
    }

    const orderItems=[];
    let totalAmount=0;

    for(const item of cart.items)
    {
        const product=item.product;
        if(product.stock<item.quantity)
        {
            throw new Error (`${product.name} is out of stock`);
        }
    

    orderItems.push({
        product: product._id,
        name: product.name,
        price: product.price,
        quantity: item.quantity
    })

    totalAmount+=product.price*item.quantity;
    product.stock-=item.quantity;
    await product.save();
}

const order=await Order.create({
    user:userId,
    items: orderItems,
    totalAmount
});

cart.items=[];
await cart.save();
return order;
}