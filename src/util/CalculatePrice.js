export const CalculatePrice = (priceRange, price) => {
    switch(priceRange) {
        case "All":
            return Number(price) > 0;
        case "Low":
            return Number(price) < 200;
        case "Medium":
            return (Number(price) > 200 && Number(price) < 550);
        case "Expensive":
            return Number(price) > 550;
    }
}