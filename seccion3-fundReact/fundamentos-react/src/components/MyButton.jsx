//Los props traen propiedades de manera dinamica
const MyButton = ({text}) => {
    const manejoDeClick = (mensaje) => {
        console.log('Le acabas de dar click a '+ mensaje)
      }

    return (
        <button onClick={() => manejoDeClick(text)}>{text}</button>
    )
}
export default MyButton;
