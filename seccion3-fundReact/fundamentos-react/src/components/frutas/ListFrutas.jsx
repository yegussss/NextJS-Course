import ItemFruta from "./ItemFrutas";

const ListFrutas = ({frutas}) => {
    //const frutas = ['🍎', '🍌', '🍐', '🍑']
    return (
          <ul>
              {frutas.map((fruta, index)=>(<ItemFruta key={index} fruta ={fruta} text={index}/>))}
          </ul>
    )
}

export default ListFrutas;