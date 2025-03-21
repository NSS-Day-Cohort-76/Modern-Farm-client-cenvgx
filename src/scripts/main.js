console.log("Welcome to the main module")
import { createPlan } from "./plan.js"
import { addPlant, usePlants } from "./fields.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";
import { Catalog } from "./catalog.js"

const yearlyPlan = createPlan();

const asparagusSeed = createAsparagus(); //creates an asparagus seed object
const potatoSeed = createPotato();
const soybeanSeed = createSoybean();
const sunflowerSeed = createSunflower();
const wheatSeed = createWheat();
const cornSeeds = createCorn(); // creates corn seeds (array)

addPlant(asparagusSeed);
addPlant(potatoSeed);
addPlant(soybeanSeed);
addPlant(sunflowerSeed);
addPlant(wheatSeed);
addPlant(cornSeeds);

const plantSeed = plantSeeds(yearlyPlan)

const usePlant = usePlants()

const harvPlants = harvestPlants(usePlant)

const plantHTML = Catalog(harvPlants)

