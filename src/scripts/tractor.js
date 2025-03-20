// Do ALL of these need to be imported? Is there a consolidated function or variable??
// 

import { addPlant } from "./fields.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createPotato } from "./seeds/potato.js";
import { createCorn } from "./seeds/corn.js";
import { createWheat } from "./seeds/wheat.js";
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"

// `plan` is an array that contains 3 arrays
// each array represents ROWS in the field to be PLANTS
// 3x ROWS -> PLANTS
// iterate the parent and child arrays...
// parent = rows `row of plan` VS. // child = plants `plant of row`??
// hint hint...IF the food type aka. PLANT === 'Asparagus' -> invoke createAsparagus function to get asparagus seed
// if plant === asparagus -> invoke the `createAsparagus` function

export const plantSeeds = (plan) => {
    for (const row of plan) {
        for (const plant of row) {
            let seed = [];

            if (plant === "Asparagus") {
                seed = createAsparagus()
            } else if (plant === "Potato") {
                seed = createPotato()
            } else if (plant === "Corn") {
                seed = createCorn()  
            } else if (plant === "Wheat") {
                seed = createWheat()
            } else if (plant === "Soybean") {
                seed = createSoybean()   
            } else if (plant === "Sunflower") {
                seed = createSunflower()
            }
        }
    }

            addPlant(seed);

    }










//define and export 'plantSeeds function

// export const plantSeeds = (plan) => {
//     const plan = []