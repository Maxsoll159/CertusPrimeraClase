/*function Principal(){
    return(
        <h1>Mi primer componente en react</h1>
    )
}

export default Principal*/


import { SegundoComponente } from './SegundoComponents'


export const Principal = () => {

    const nombre = "Martin"
    const edad = 23
    const carro = false

    const platosFavoritos = {
        primerPlato: "Ceviche",
        segundoPlato: "Pollito a la brasa",
        tercerPlato: "Lomo Saltado"
    }

    const personajesForitos = [{
        id: 1,
        nombre: "Goku",
        tecnica: "Kamehamehaaaaa"
    }, {
        id: 2,
        nombre: "Vegeta",
        tecnica: "Big bang"
    }, {
        id: 3,
        nombre: "Gohan",
        tecnica: "Ninja Saiyan"
    }]

    return (
        <>
            <h1>Soy el primer componente</h1>
            <p>Mi nombre es {nombre} y mi edad es: {edad}</p>
            <p>y yo {carro === true ? "Tengo carro" : "No tengo carro"}</p>
            <p>Mi primer plato favorito es: {platosFavoritos.primerPlato}</p>
            <p>Mi segundo plato favorito es: {platosFavoritos.segundoPlato}</p>
            <p>Mi tercer plato favorito es: {platosFavoritos.tercerPlato}</p>
            <p>Mi primer personaje es {personajesForitos[0].nombre}</p>
            <p>Mi primer personaje es {personajesForitos[1].nombre}</p>
            <p>Mi primer personaje es {personajesForitos[2].nombre}</p>
            {
                personajesForitos.map((personaje) => (
                    <p key={personaje.id}>Mis personajes son {personaje.nombre} su tecnica es {personaje.tecnica}</p>
                ))
            }
            <SegundoComponente
                nombreProps={nombre}
                edadProps={edad}
                favoritosProps={platosFavoritos}
            />

        </>
    )
}

//export default PrincipalFecha
