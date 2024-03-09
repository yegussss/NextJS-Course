const WelcomeText = ({user}) => {
    return user ? <h3>Bienvenido, usuario en línea.</h3> : <h3>Usuario desconectado.</h3>;
}

export default WelcomeText;