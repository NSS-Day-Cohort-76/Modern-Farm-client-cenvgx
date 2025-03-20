

export const harvestPlants = (plantArray) => {
    const harvestedPlants = [] 
 
        for (const plant of plantArray) {
            let plantOutput = plant.output
  
        if (plant.type === "Corn") {
            plantOutput = Math.floor(plantOutput / 2)
        }

        for (let i = 0; i < plantOutput; i++) {
            harvestedPlants.push({...plant})
        }
    }    
    return harvestedPlants    
}        
