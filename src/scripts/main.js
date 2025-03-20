console.log("Welcome to the main module")
import { createPlan } from './plan.js'
import { harvestPlants } from './harvester.js'
import { Catalog } from './catalog.js'



const yearlyPlan = createPlan()

const harvPlants = harvestPlants()

const createFoodHTML = Catalog()
