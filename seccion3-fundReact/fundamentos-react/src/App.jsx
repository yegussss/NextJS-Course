//Exportación nombrada.
import imgUno from './assets/images/img1.jpg'
import MyButton from './components/MyButton'
import WelcomeText from './components/WelcomeText';
import ListFrutas from './components/frutas/ListFrutas'
import ButtonState from './components/ButtonState';

//Los componentes en React, siempre deben comenzar con mayuscula.
//Se pone asi para no confundirlo con una etiqueta.
const App = () => {
    const title = "Hola Mundo desde una constante";
    const classTitle = "text-center";
    const altImg = 'Imagen sacada de internet';
    const frutas = ['🍎', '🍌', '🍐', '🍑']
    var user = false;

    return (
        <>
            <ButtonState/>
            <h1 className={classTitle}>{title.toUpperCase()}</h1>
            <img src= {imgUno} alt={altImg}/>
            <WelcomeText user = {user}/>
            <ListFrutas frutas={frutas}/>
            <MyButton text='Botón 1'/>
            <MyButton text='Botón 2'/>
            <MyButton text='Botón 3'/>
        </>
    );
};

//Exportación por defecto
export default App;