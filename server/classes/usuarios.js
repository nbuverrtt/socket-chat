//clase encargada de todos los usuarios conectados
class Usuarios {

    constructor() {
        this.personas = []; //arreglo que se encarga de inicializar las personas que estarán conectadas al chat
    }

    agregarPersona(id, nombre, sala) {
        let persona = { id, nombre, sala };
        this.personas.push(persona); //agregar las personas al arreglo

        return this.personas; //regresa todas las personas que están en el chat
    }


    //devuelve una persona del arreglo por su id
    getPersona(id) {
        //filter devuelve otro arreglo de personas por lo que se debe inicializar en [0]

        let persona = this.personas.filter(persona => persona.id === id)[0];

        return persona; //si lo encuentra, devuelve el objeto persona, sino devuelve undefined
    }

    //devuelve a todas las personas del arreglo
    getPersonas() {

        return this.personas;
    }

    //devuelve a las personas por sala de chat
    getPersonasPorSala(sala) {

        let personasEnSala = this.personas.filter(persona => persona.sala === sala);
        return personasEnSala;
    }

    borrarPersona(id) {

        let personaBorrada = this.getPersona(id);
        this.personas = this.personas.filter(persona => persona.id != id);

        return personaBorrada;
    }

}

module.exports = {
    Usuarios
}