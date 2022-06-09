let sum = 1
let second = 0
let total = 0

for (let i = 0; i < 15; i++) {
  total = second + sum
  sum = second
  second = total
}
console.log(total), "fibonacci"

function toCamelCase(str: string) {
  return str.replace(/[_-]\w/gi, (ch) => {
    return ch[1].toUpperCase()
  })
}

console.log(toCamelCase("A-b-c"), "toCamelCase")

function filter_list(l: any[]) {
  return l.filter((n) => n === +n)
}
console.log(filter_list([1, 2, "aasf", "1", "123", 123]), "filter_list")

function tribonacci(signature: any[], n: number) {
  if (n === 0) return []
  if (n < 4) return signature.slice(0, n)
  let a = signature.length
  while (a < n) {
    let indice = signature[a]
    signature.push(signature[a - 1] + signature[a - 2] + signature[a - 3])
    a++
  }
  return signature
}
console.log(tribonacci([1, 0, 1], 0), "tribonacci")

let tribonacciCodeWar = (s: number[], n: number): number[] =>
  s.length < n
    ? tribonacciCodeWar(
        [...s, s.slice(-3).reduce((a: any, b: any) => a + b)],
        n
      )
    : s.slice(0, n)
console.log(tribonacciCodeWar([1, 0, 1], 3), "tribonacciCodeWar")

function Xbonacci(signature: any[], n: number): number[] {
  let c = signature.length
  for (let i = 0; i < n; i++) {
    if (i < n)
      signature.push(signature.slice(-c).reduce((a: any, b: any) => a + b))
  }
  return signature.slice(0, n)
}
console.log(Xbonacci([0, 1], 10), "xbonacci")

const XbonacciCodeWars = (sig: any[], n: number) => {
  let len = sig.length
  for (let i = len; i < n; i++)
    sig[i] = sig.slice(i - len).reduce((a: any, b: any) => a + b)
  return sig.slice(0, n)
}
console.log(XbonacciCodeWars([0, 1], 6), "xbonacciCodeWars")

function findShort(s: string): number {
  return Math.min(...s.split(" ").map(({ length }) => length))
}
console.log(
  findShort("bitcoin take over the world maybe who knows perhaps"),
  "findShort"
)

function duplicateCount(text: string) {
  return Array(
    ...new Set(
      text
        .toLowerCase()
        .split("")
        .filter((x: any, index: number) => text.indexOf(x) !== index)
    )
  ).length
}

console.log(duplicateCount("abcd"), "duplicateCount")

function convertRgbToHexadecimal(red: any, green: any, blue: any) {
  return [red, green, blue]
    .map((x: any) => (x > 255 ? 255 : x < 0 ? 0 : Math.abs(x)))
    .map((x: any) => x.toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase()
}
console.log(convertRgbToHexadecimal(148, 0, -0), "convertRgbToHexadecimal")

function isValidIP(str: string) {
  return /^(?!\s)\b(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\b$/.test(
    str
  )
}
console.log(isValidIP("255.255.255.0"), "isValidIP")

function isValidIPRef(str: string) {
  return /^(?!\s)((25[0-5]|2[0-4]\d|1\d\d|\d\d|\d)\.){3}(25[0-5]|2[0-4]\d|1\d\d|\d\d|\d)$/.test(
    str
  )
}
console.log(isValidIPRef("256.255.255.0"), "isValidIPRef")
