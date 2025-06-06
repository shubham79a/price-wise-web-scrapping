export function extractPrice(...elements: any) {
    for (const element of elements) {
        const priceText = element.text().trim();
        if (priceText) {
            return priceText.replace(/[^\d.]/g, '');
        }
    }
    return "";

}

export function extractCurrency(element: any) {
    const currencyText = element.text().trim().slice(0, 1);
    return currencyText || '';
}


export function extractDescription($: any) {

    const selectors = [
        ".a-unordered-list .a-list-item",
        ".a-expander-content p",

    ];

    for (const selector of selectors) {
        const elements = $(selector);
        if (elements.length > 0) {
            const textContent = elements
                .map((_: any, element: any) => $(element).text().trim())
                .get()
                .join("\n");
            return textContent;
        }
    }


    return "";
}