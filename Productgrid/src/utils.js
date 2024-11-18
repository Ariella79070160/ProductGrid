export const getUnavailableColors = (product) => {
    const colorsInStock = new Set()
    const allColors = new Set(product.colors)

    product.inventory.forEach((item) => {
        if(item.stock > 0){
            colorsInStock.add(item.color)
        }
    })

    const unavailableColors = [...allColors].filter(
        (color) => !colorsInStock.has(color)
    )

    return unavailableColors
}