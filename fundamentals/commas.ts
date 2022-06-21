function commas(num: number) {
  return parseFloat(num.toFixed(3))
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function commasMonstro(num: number) {
  const amount = num.toString().split(".")
  const val = amount[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  return val + (amount[1] ? "." + amount[1] : "")
}

console.log(commas(1))
console.log(commas(123))
console.log(commas(1234))
console.log(commas(1000))
console.log(commas(100.2346))
console.log(commas(1000000000.23))
console.log(commas(-1000000.123))

function commasKata(num: number) {
  return (+num.toFixed(3)).toString().replace(/\B(?=(\d{3})+(\.|$))/g, ",")
}
/* console.log(commasKata(1))
console.log(commasKata(123))
console.log(commasKata(1234))
console.log(commasKata(1000))
console.log(commasKata(100.2344))
console.log(commasKata(1000000000.23001))
console.log(commasKata(-1000000.123)) */
