"use server"

import { connectDB } from "../mongoose";
import { scrapeAmazonProduct } from "../scraper";

export async function scrapAndStoreProduct(productUrl: string) {
    if (!productUrl) {
        return;
    }
    try {
        connectDB();
        const scrapedProduct = await scrapeAmazonProduct(productUrl);
        if (!scrapedProduct) {
            return;
        }

        let product = scrapedProduct
        // const existingProduct= await product.find


    } catch (error: any) {
        throw new Error(`Failed to create/update product: + ${error.message}`);
    }
}


