import { TercerComponente } from "./TercerComponente"

export const SegundoComponente = (props) => {

    console.log("PORPS PADRE", props)


    return (
        <>
            <h1>VENDO DESDE PROPS {props.nombreProps}</h1>
            <h1>VENDO DESDE PROPS EDAD {props.edadProps}</h1>

            <h1>VENDO DESDE PROPS FAVORITOS {props.favoritosProps.primerPlato}</h1>

            
        </>
    )
}