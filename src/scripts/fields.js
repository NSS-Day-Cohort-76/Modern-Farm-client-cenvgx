// array to store the growing plants
let growingPlants = [];

 // define and export the addPlant function
export const addPlant = (seed) => { // Takes seed as a parameter that the function addPlant takes as input.
    if (Array.isArray(seed)) {
        // If the seed is an array (for corn in this case), iterate over it and add each plant individually.
        seed.forEach(plant => {
            growingPlants.push(plant);
        });
    } else {
        // if it's a single plant, just adds it directly
        growingPlants.push(seed);
    }
};

// Define and export the usePlants function to get a copy of the growingPlants array
export const usePlants = () => {
    return [...growingPlants]; // returns a shallow copy of the growingPlants array using the spread operator ([...growingPlants]). This prevents direct modifications to the growingPlants array
};