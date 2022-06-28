class Car {
    constructor (id, carModel, dayprice){
        this.id = parseInt(id);
        this.name = carModel;
        this.dayprice = parseInt(dayprice);
    }
}

const arrayCars = [];
arrayCars.push(new Car (nextIndexOf(arrayCars),"Etios", 2000));
arrayCars.push(new Car (nextIndexOf(arrayCars),"Corolla", 3000));
arrayCars.push(new Car (nextIndexOf(arrayCars),"Hilux", 4000)); 

console.log(arrayCars);

class Reservation {
    constructor (id, carname, quantity, rentedDays, dayPrice, total){
        this.id = parseInt(id);
        this.carname = carname;
        this.quantity = parseInt(quantity);
        this.renteddays = parseInt(rentedDays);
        this.dayprice = Number(dayPrice);
        this.total = Number(total); 
    }
}

const arrayReservations = [];
let keepBuying; 

do {
    let reserveThis;
    let modelInput = prompt("Que modelo desea reservar? Podemos ofrecerle los siguientes:\n" + availableCars());

    if (modelInput && isNaN(modelInput)){
        modelInput = modelInput.toLowerCase();
        reserveThis = arrayCars.find(model => model.name.toLowerCase() === modelInput);
        while(!reserveThis && keepBuying) {
            keepBuying = confirm('No encontramos el modelo solicitado. Desea seguir comprando?')
            if(keepBuying){
                modelInput = prompt("Que modelo desea reservar?");
                modelInput = modelInput.toLowerCase();
                reserveThis = arrayCars.find(model => model.name.toLowerCase() === modelInput);
            } else {
                break;
            }
        }
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
    } else {
        break;
    }

    if(reserveThis && quantityInput && daysInput) {
        
        let name = reserveThis.name;
        let dayprice = reserveThis.dayprice;
        let total = Number(reserveThis.dayprice) * daysInput * quantityInput;
        saveThis(name, quantityInput, daysInput, dayprice, total);   

    } else {
        alert('Algo salio mal');
    }

    keepBuying = confirm('Quiere seguir comprando?')
} while(keepBuying);

function nextIndexOf(array) {
    return array.length +1;
};

function availableCars() {
    return arrayCars.map(u => u.name).join(`\n`);
}

function saveThis(name, quantityInput, daysInput, dayprice, total){
    let id = nextIndexOf(arrayReservations);
    arrayReservations.push(new Reservation (id, name, quantityInput, daysInput, dayprice, total));
    console.log('Se agregó a tu carrito '+ quantityInput +' '+ name +' por '+ daysInput +' días. Total parcial: $'+ total);
}

if (arrayReservations.length > 1){
    let finalqty = arrayReservations.reduce((a, b) => a + b['quantity'], 0);
    let finaltotal = arrayReservations.reduce((a, b) => a + b['total'], 0);
    console.log('Reservó correctamente '+finalqty+' vehiculos por un total final de $'+finaltotal);
} else {
    console.log('No realizó ninguna reserva.')
}


console.log(arrayReservations);

