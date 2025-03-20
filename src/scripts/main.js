console.log("Welcome to the main module")
import { createPlan } from "./plan.js"

// Invoke the createPlan function and store the return value in yearlyPlan
const yearlyPlan = createPlan();

console.log(yearlyPlan);
