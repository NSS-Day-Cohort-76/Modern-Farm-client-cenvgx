console.log("Welcome to the main module")
import { addPlant, usePlants } from "./fields.js";
import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
//Invoke the createPlan function and store the return value in yearlyPlan
const yearlyPlan = createPlan();

console.log(yearlyPlan);

const asparagusSeed = createAsparagus(); //creates an asparagus seed object
const potatoSeed = createPotato();
const soybeanSeed = createSoybean();
const sunflowerSeed = createSunflower();
const wheatSeed = createWheat();
const cornSeeds = createCorn(); // creates corn seeds (array)


console.log(asparagusSeed);
console.log(potatoSeed);
console.log(soybeanSeed);
console.log(sunflowerSeed);
console.log(wheatSeed);
console.log(cornSeeds);


addPlant(asparagusSeed); //Adds the asparagus seed to the field
const plantsInField = usePlants(); //Gets the current state of the plants in the field.
console.log(plantsInField); // Logs the array of plants in the field to check if asparagus was added
addPlant(cornSeeds); //Adds the corn seeds to the field
console.log(usePlants()); //Logs the updated plants in the field
