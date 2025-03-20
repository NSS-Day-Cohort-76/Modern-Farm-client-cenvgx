


export const Catalog = (harvestFoodArray) => {
    
    const mainContainer = document.querySelector(".container")
    let foodHTML = ""

    for (const food of harvestFoodArray) {
        foodHTML += `<section class="plant">"${food.type}"</section>
        `
    }
    return mainContainer.innerHTML = foodHTML
}