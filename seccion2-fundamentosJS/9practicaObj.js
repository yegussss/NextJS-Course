const cuentaLol = {
  nombre: "yegussss",
  vinculaciones: {
    twitch: {
      nombre: "iYegus",
      link: "www.twtich.tv/iYegus",
    },
    amazon: {
      nombre: "Yegus",
      link: "www.amazon.mx/account/Yegus",
    },
    xbox: {
      nombre: "Yegus16",
      link: "www.account.xbox.com/es-MX/Profile/Yegus16",
    },
  },
  rank: "Esmeralda 3",
};

//console.log(cuentaLol);
const cuentaTTV = cuentaLol.vinculaciones.twitch.nombre;
console.log(
  `La cuenta vinculada con el usuario ${cuentaLol.nombre} es: ${cuentaTTV}`
);

//Deconstructuring objects
const { nombre, link } = cuentaLol.vinculaciones.amazon;

console.log(
  `La cuenta de Amazon vinculada con el usuario ${cuentaLol.nombre} es: ${nombre}`
);
console.log(`El link es: ${link}`);
