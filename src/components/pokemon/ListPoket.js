import { CardPoket } from "./CardPoket"

export const ListPoket = ({data}) => {
  return (
    <div className="container mt-5 mb-5">
       <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 row-cols-sm-2 ">
       {
           data ? 
           data.map(pk=>{
            return <CardPoket {...pk} key={pk.id}/>
           }   
           )
           :<p>Cargando...</p>
       }
       </div>
    </div>
  )
}
