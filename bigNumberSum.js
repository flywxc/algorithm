let str1 = "11895235235235235343"
let str2 = "9433456734623456234"

const bigNumberSum = (num1, num2) => {
  let arr1 = num1.split('')
  let arr2 = num2.split('')
  let longest = Math.max(num1.length, num2.length)
  let _arr1 = [].concat(arr1), _arr2 = [].concat(arr2)
  for (let i = longest - 1; i >= 0; i--) {
    if (!arr1[i] === undefined) {
      _arr1.unshift(0)
    }
    if (arr2[i] === undefined) {
      _arr2.unshift(0)
    }
  }
  let _arr = []
  for (let i = longest - 1; i >= 0; i--) {
    let sum = Number(_arr[i] || 0) + Number(_arr1[i]) + Number(_arr2[i])
    if (sum >= 10) {
      _arr[i] = sum.toString().split('')[1]
      _arr[i - 1] = sum.toString().split('')[0]
    } else {
      _arr[i] = sum
    }
  }
  return _arr.join('')
}
console.log(bigNumberSum(str1, str2))
