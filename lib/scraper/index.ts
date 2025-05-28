import axios from "axios";
import * as cheerio from "cheerio";
import { extractCurrency, extractDescription, extractPrice } from "../utils";

export async function scrapeAmazonProduct(url: string) {
    if (!url) {
        return;
    }


    // brightdata proxy configurations
    const username = String(process.env.BRIGHT_DATA_USERNAME)
    const password = String(process.env.BRIGHT_DATA_PASSWORD)
    const port = 33335;
    const session_id = (1000000 * Math.random()) | 0;

    const options = {
        auth: {
            username: `${username}-session-${session_id}`,
            password
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false,
    }

    try {
        // fetch the product page
        const response = await axios.get(url, options)
        const $ = cheerio.load(response.data);
        // extract product details

        const title = $('#productTitle').text().trim();
        const currentprice = extractPrice(
            $('.priceToPay span.a-price-whole'),
            $('a.size.base.a-color-price'),
            $('.a-button-selected .a-color-base')
        )

        const originalPrice = extractPrice(
            $('#priceblock_ourprice'),
            $('.a-price.a-text-price span.a-offscreen'),
            $('#listPrice'),
            $('#priceblock_dealprice'),
            $('.a-size-base.a-color-price'),
        )

        const outOfStock = $('#availability span').text().trim().toLowerCase() === 'currently unavailable';

        const images = $('#imgBlkFront').attr('data-a-dynamic-image') ||
            $('#landingImage').attr('data-a-dynamic-image') || '{}';

        const imageUrls = Object.keys(JSON.parse(images))
        const currency = extractCurrency($('.a-price-symbol'))
        const discountRate = $('.savingsPercentage').text().replace(/[-%]/g, "");

        const description = extractDescription($)

        // console.log(title, currentprice, originalPrice, 
        //     outOfStock, imageUrls, currency,discountRate);

        const data = {
            url,
            currency: currency || '$',
            image: imageUrls[0],
            title,
            currentprice: Number(currentprice) || Number(originalPrice),
            originalPrice: Number(originalPrice) || Number(currentprice),
            priceHistory: [],
            discountRate: Number(discountRate),
            category: 'category',
            reviewsCount: 0,
            stars: 0,
            outOfStock,
            description,
            lowestPrice: Number(currentprice) || Number(originalPrice),
            highestPrice: Number(originalPrice) || Number(currentprice),
            averagePrice: Number(currentprice) || Number(originalPrice)
        }

        // console.log('====================================');
        // console.log(data);
        // console.log('====================================');

        return data;

    } catch (error: any) {
        throw new Error(`Failed to scrape product: ${error.message}`);
    }


}