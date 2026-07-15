import {z} from 'zod';

export const createProductSchema=z.object({
    name: z.string().min(2),
    brand: z.string().min(2),
    description: z.string().min(10),
    category: z.string().min(2),
    price: z.number().nonnegative(),
    stock: z.number().int().nonnegative(),
    images: z.array(z.string()).optional()
})