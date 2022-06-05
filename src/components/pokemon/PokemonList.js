import { useContext } from "react"
import { DataContext } from "../../hooks/DataContext"
import { CardPoket } from "./CardPoket"

export const PokemonList = () => {
    const data = useContext(DataContext)
  return (
    <div className="container">
       {
           data ? 
           data.map(pk=>{
            return <CardPoket {...pk} key={pk.id}/>
           }   
           )
           :<p>Cargando...</p>
       }
    </div>
  )
}
