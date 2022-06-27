class carModel {
    constructor (id, carModel, dayprice){
        this.id = id;
        this.name = carModel;
        this.dayprice = parseInt(dayprice);
        this.quantity = 1;
        this.rentedDays = 1;
    }
}

const arrayCarModels = [];
arrayCarModels.push(new carModel (nextIndexOf(arrayCarModels),"etios", 2000, 1));
arrayCarModels.push(new carModel (nextIndexOf(arrayCarModels),"corolla", 3000, 1));
arrayCarModels.push(new carModel (nextIndexOf(arrayCarModels),"hilux", 4000, 1)); 

console.log(arrayCarModels);

let keepBuying; 
const cart = [];

do {
let reserveThis;
let modelInput = prompt("Que modelo desea reservar?");

if (modelInput && isNaN(modelInput)){
    modelInput = modelInput.toLowerCase();
    reserveThis = arrayCarModels.find(model => model.name === modelInput);
    
} else {
    alert('No encontramos el modelo solicitado');
}

let quantityInput;
if(reserveThis){
    quantityInput = prompt(`Cuantos ${modelInput} precisa reservar?`);
    while (!quantityInput || isNaN(quantityInput) || quantityInput < 1){
        quantityInput = prompt(`Ingrese un número válido. Cuantos ${modelInput} precisa reservar?`);
    } 
} else {
    break;
}

let daysInput;
if(quantityInput){
    daysInput = prompt(`Por cuantos días precisa los ${quantityInput} ${modelInput}?`);
    while (!daysInput || isNaN(daysInput) || daysInput < 1){
        daysInput = prompt(`Ingrese un número válido. Por cuantos días precisa los ${quantityInput} ${modelInput}?`);
        
    } 
    alert(daysInput);
} else {
    break;
}

if(reserveThis && quantityInput && daysInput) {

    saveThis(modelInput,quantityInput,daysInput);
} else {
    alert('Algo salio mal. Final step');
    console.log(reserveThis);
    console.log(quantityInput);
    console.log(daysInput);
}

keepBuying = confirm('Quiere seguir comprando?')

} while(keepBuying);

function saveThis (modInp,qty=1,days=1){
    let id = nextIndexOf(cart);
    
    let toSave = arrayCarModels.find(model => model.name === modInp);
    toSave.id = id;
    cart.push(toSave);

    let Saved = cart.find(model => model.id === id);
    
    Saved.rentedDays = parseInt(days);
    Saved.quantity = parseInt(qty);
    
}

function nextIndexOf(array) {
    return array.length +1;
};

console.log(cart);
