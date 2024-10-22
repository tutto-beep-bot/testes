'use strict'
let resultDiv = document.getElementById('result')

const personas = [
    {
    nombre: "Juan",
    dni: "12345678",
    hobbies: ["leer", "bailar"]
    },
    {
    nombre: "María",
    dni: "87654321",
    hobbies: ["pintar", "correr"]
    },
    {
    nombre: "Pedro",
    dni: "98765432",
    hobbies: ["cocinar", "ver películas"]
    },
    {
    nombre: "Laura",
    dni: "54321678",
    hobbies: ["jugar a fútbol", "viajar"]
    },
    {
    nombre: "Carlos",
    dni: "87651234",
    hobbies: ["tocar la guitarra", "hacer ejercicio"]
    }
    ];


    function checkFind(){
        // 1 Find 
        let dniPersona = personas.find(persona => persona.dni == "54321678");
        (dniPersona === undefined) ? console.log('No dado de alta') : console.log('Si dado de alta') 

                                    //or

        // do - while
        // elementos = 3
        let j = 0
        do {
            let personaActual = personas[j]
            console.log(personaActual)
            // if()
            j++
        } while (j < personas.length)
    }

    //checkFind()

    function checkFindIndex(){
        //2 Find Index
        let dniBuscado = "87654321"
        let personaPosicion = personas.findIndex(persona => persona.dni == dniBuscado);
        if (personaPosicion != -1) console.log('El objeto esta en la posicion: ', personaPosicion)

                                    //or

        let i = 0
        let encontrado = false
        let posicio = -1
        do {
            let posicionPersona = i
            let personaActual = personas[posicionPersona]
            let dniActual = personaActual.dni

            if(dniActual == dniBuscado){
                encontrado == true
                posicio = posicionPersona
            }
            
            i++
        } while(i < personas.length && encontrado == false)

        console.log('La posicion es: ', posicio)
    }

    checkFindIndex()
    

    function CheckFilter(){

        let hobbyBuscado = 'viajar'
        const hobbyEncontrado = personas.filter(persona => persona.hobbies.includes(hobbyBuscado))
        console.log(hobbyEncontrado)
    
                    //OR

        let hobbieToFind = 'leer'
        const personasConHobbieToFind = []

        for(let i = 0; i < personas.length; i++){
            let personaActual = personas[i]
            let personaHobbies = personaActual.hobbies 

            for(let j = 0; j < personaHobbies.length; j++){
                let hobbieActual = personaHobbies[j]

                if(hobbieActual == hobbieToFind){
                    personasConHobbieToFind.push(personaActual)
                }

            }

        }

        console.log(personasConHobbieToFind)
    }
    
