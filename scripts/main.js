//Booleanos
let booleano1 = true;
let booleano2 = false;
let booleanoAnd = booleano1 && booleano2;
console.log(booleanoAnd);
let booleanoOr = booleano1 || booleano2;
console.log(booleanoOr);
let booleanoNot = !booleano1;
console.log(booleanoNot);
let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 || !booleano2));
console.log(booleanoMix0);

//Operadores
let valorDivision = 17 / 3;
console.log("division",valorDivision.toFixed(2));
let ValorResto = 17 % 7;
console.log("sobrante",ValorResto);

//lógica de programación
let a = 9;
let b = "9";
if (a == b) console.log("Son iguales");
if (a === b) console.log("Son iguales");
//No se muestra por que uno es number y el otro string
let mochila = ["portatil","libreta","boligrafo"];
if (mochila.length > 10) {
    console.log("No puedo cargar con tantas cosas");
} else if (mochila >= 2 <=10) {
    console.log("qué bien voy con mi mochila");
} else {
    console.log("Creo que no necesito una mochila");
};
for (let contarHasta10 = 0; contarHasta10 < 10; contarHasta10++) {
    console.log(contarHasta10);
};

let diaFestivo = true;
if (diaFestivo) {
    console.log("hoy no trabajo");
} else {
    console.log("hoy trabajo");
};
let arrayBucle = [];
for (let i=4; arrayBucle.length < 15; i++) {
    arrayBucle.push(i)
};
console.log(arrayBucle);
let resultado=0;
for (let x=0; x < arrayBucle.length; x++) {
    resultado+=arrayBucle[x];
};
console.log(resultado);
let arraySofia = ["con","sofia","aprendiendo","bucles"];
for (const Sofia of arraySofia) {
    console.log(Sofia);
};
for (const sofia2 in arraySofia) {
    if (Object.hasOwnProperty.call(arraySofia, sofia2)) {
        const element = arraySofia[sofia2];
        console.log(sofia2);
    }
};
let i= 0
while (i<20) {
    if(i % 3 === 0){
        console.log("patata");
    } else {
        console.log(i);
    }
    i++
};

//Extras
let gente = [
    {
       nombre: "Jamiro",
       edad: 45,
    },
    {
        nombre: "Juan",
        edad: 35,
    },
    {
        nombre: "Paco",
        edad: 34,
    },
    {
        nombre: "Pepe",
        edad: 14,
    },
    {
        nombre: "Pilar",
        edad: 24,
    },
    {
        nombre: "Laura",
        edad: 24,
    },
    {
        nombre: "Jenny",
        edad: 10,
    },
]

let nombreCuatroLetras = []
for (const person of gente) {
    if (person.nombre.length >= 4) {
      nombreCuatroLetras.push(person)
    }
  }
  console.log(nombreCuatroLetras)

let mayorYJ = []
for (const persona of gente) {
    if (persona.edad < 40 && persona.nombre[0]== "J") {
        mayorYJ.push(persona)
    }
}
    console.log(mayorYJ)

let ordenador = {
    marca: "La pava",
    tipo: "portátil",
    perifericos: ["funda","touchPad"],
    almacenamiento: {
    discos: ["SSD","HDD"],
    maestro: 0,
    },
}
// TEST 1
if (typeof ordenador === "object") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 2
if (ordenador.marca === "La pava") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 3
if (ordenador.tipo === "portátil") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 4
if (ordenador.perifericos[1] === "touchPad") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 5
if (ordenador["almacenamiento"]["discos"][1] === "HDD") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 6
if (ordenador.almacenamiento.maestro === 0) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

let arr = [
    {
        name: "pepito",
        age: 25,
    },
    {
        name: "pepito",
        age: 25,
    },
    {
        name: "Juanjo",
        age: 20,
    },
]

// TEST 1
if (typeof arr === "object" && arr.length >= 0) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 2
if (typeof arr[0] === "object") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 3
if (typeof arr[1] === "object") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 4
if (typeof arr[2] === "object") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 5
if (arr.length === 3) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 6
if (arr[0].name === arr[1].name) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 6
if (arr[1].name === "pepito") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 7
if (arr[1].age > arr[2].age) {
    console.log("apruebas");
} else {
    console.log("suspendes");
} 

// TEST 8
if (arr[0].age === 25) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 9
if (typeof arr[2].name === "string") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 10
if (arr[2].name[0] === "J") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}


