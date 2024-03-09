const multiplicator = (a:number, b:number, texto:string) => {
    console.log(texto, a*b);
}


const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])

multiplicator(a, b, `Se ha multiplicado el número ${a} y ${b}, el resultado es: `)