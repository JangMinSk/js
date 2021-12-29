const animals = ['lion', 'tiger', 'cat', 'dof','pig','duck','cat','cat']
const animalToSearch='cat'
const searchedIndexes=[]

let foundIndex = animals.indexOf(animalToSearch)

while(foundIndex !=-1){
    searchedIndexes.push(foundIndex)
    foundIndex = animals.indexOf(animalToSearch)
}