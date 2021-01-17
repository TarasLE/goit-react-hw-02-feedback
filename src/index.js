import { object } from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.querySelector('#root'))

const statsDATA = []
const testObj = { good: 0, neutral: 0, bad: 0 }
// console.log(testObj)
// Object.keys(testObj).forEach((element) => {
//     console.log(element)
//     console.log(element.value)
// })
// testObj.map((item) => console.log(item))
// Object.entries(testObj).forEach(([key, value]) =>
//     console.log(`${key}  ${value}`)
// )
// Object.entries(testObj).forEach(([key, value]) => {
// const obj = { [key]: value }
// console.log(obj)
//     statsDATA.push({ [key]: value })
// })
// console.log(statsDATA)
// console.log(Math.sum(1, 2, 3))
// const sum = [...Object.keys(testObj)]
// const reducer = (accumulator, currentValue) => accumulator + currentValue
// console.log(sum.reduce(reducer))
// console.log(sum)
// sum.map((item) => console.log(item))

// const keys = Object.values(testObj)
// const testarr = [2, 6, 5]
// testarr.map((item) => console.log(item))
