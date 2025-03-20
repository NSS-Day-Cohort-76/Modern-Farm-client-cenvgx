console.log("Welcome to the main module")
//import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
// Invoke the createPlan function and store the return value in yearlyPlan
// const yearlyPlan = createPlan();

// console.log(yearlyPlan);

const asparagusSeed = createAsparagus()
const potatoSeed = createPotato()
const soybeanSeed = createSoybean()
const sunflowerSeed = createSunflower()
const wheatSeed = createWheat()
const cornSeed = createCorn()


console.log(asparagusSeed);
console.log(potatoSeed);
console.log(soybeanSeed);
console.log(sunflowerSeed);
console.log(wheatSeed);
console.log(cornSeed);