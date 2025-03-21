
let growingPlants = [];


export const addPlant = (seed) => { 
    if (Array.isArray(seed)) {
    
        seed.forEach(plant => {
            growingPlants.push(plant);
        });
    } else {
        
        growingPlants.push(seed);
    }
};


export const usePlants = () => {
    return [...growingPlants]; 
};