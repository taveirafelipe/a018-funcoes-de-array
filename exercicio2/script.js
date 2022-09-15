const arrayNum = [1, 2, 4, 5, 7, 8, 10, 11]

//A primeira deve retornar um novo array contendo os números múltiplicados por 3, Crie uma const triplos, e guarde o valor do array nesta const;
const multPorTres = arrayNum.map((num)=>{
    const triplos = num*3
    return triplos
})

//A segunda deve retornar um novo array contendo os números divididos por 2. Crie uma const metades, e guarde o valor do array nesta const;
const divididosPorDois = arrayNum.map((num)=>{
    const metades = num / 2
    return metades
})

console.log(`Array original: ${arrayNum}`)
console.log(`Multiplicado por 3: ${multPorTres}`)
console.log(`Dividido por 2: ${divididosPorDois}`)