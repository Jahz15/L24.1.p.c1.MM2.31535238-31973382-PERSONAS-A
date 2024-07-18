export default class Cl_procesar {
    constructor() {
        this.contMujeres = 0;
        this.contHombres = 0;
        this.contTotal = 0;
    }

    procesarPersonas(p){
        if (p.sexo == "F") {
            this.contMujeres++;
        } else if (p.sexo == "M") {
            this.contHombres++;
        }
        this.contTotal++;
    }

    porcentajeMujeres(){
        return ((this.contMujeres / this.contTotal) * 100).toFixed(2);
    }
    mayorMujeres(){
        if (this.contMujeres > this.contHombres) {
            return "Mujeres";}
    }
}