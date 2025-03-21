
import { addPlant } from "./fields.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createPotato } from "./seeds/potato.js";
import { createCorn } from "./seeds/corn.js";
import { createWheat } from "./seeds/wheat.js";
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"

export const plantSeeds = (plan) => {
    for (const row of plan) {
        for (const plant of row) {
            let seed;

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
            if (seed)
                addPlant(seed);
            }
        }
    }
