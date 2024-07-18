/**Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos 
datos y reporte al final: el porcentaje de mujeres procesadas y si hay más hombres, más 
mujeres o ambos por igual. 
Se tienen las siguientes personas: Luisa, Ana, José, Carmen, Rosa, José, María, Luz, Rafael, 
Liz, Marcos y Leo */
import Cl_personas from "./Cl_personas.js";
import Cl_procesar from "./Cl_procesar.js";

let pr = new Cl_procesar();

let p1 = new Cl_personas("Luisa", "F");
let p2 = new Cl_personas("Ana", "F");
let p3 = new Cl_personas("Jose", "M");
let p4 = new Cl_personas("Carmen", "F");
let p5 = new Cl_personas("Rosa", "F");
let p6 = new Cl_personas("Jose", "M");
let p7 = new Cl_personas("Maria", "F");
let p8 = new Cl_personas("Luz", "F");
let p9 = new Cl_personas("Rafael", "M");
let p10 = new Cl_personas("Liz", "F");
let p11 = new Cl_personas("Marcos", "M");
let p12 = new Cl_personas("Leo", "M");

pr.procesarPersonas(p1);
pr.procesarPersonas(p2);
pr.procesarPersonas(p3);
pr.procesarPersonas(p4);
pr.procesarPersonas(p5);
pr.procesarPersonas(p6);
pr.procesarPersonas(p7);
pr.procesarPersonas(p8);
pr.procesarPersonas(p9);
pr.procesarPersonas(p10);
pr.procesarPersonas(p11);
pr.procesarPersonas(p12);

let salida = document.getElementById("salida");
salida.innerHTML =`
Porcentaje de mujeres procesadas: ${pr.porcentajeMujeres()}% <br>
Hay mas ${pr.mayorMujeres()}`
