const string = 'Lorem Ipsum is simply dummy text'

function inverterString(str) {
  let arrayStringRevertida = new Array()

  for (let index = str.length - 1; index >= 0; index--) {
    arrayStringRevertida.push(str[index])
  }

  const resultado = arrayStringRevertida.join('')
  return resultado
}

const stringRevertida = inverterString(string)

console.log(stringRevertida)
