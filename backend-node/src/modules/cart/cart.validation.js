import {z} from 'zod';

export const addToCartSchema=z.object({
    productId:z.string(),
    quantity:z.number().int().positive().default(1)
})