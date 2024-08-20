import { log } from "console"

let x = 5 + 4
let y = 5 - 4
let z = 5 * 4
let a = 5 / 4
let b = 5 % 4


log(`plus: ${x}`)
log(`minus: ${y}`)
log(`multiple: ${z}`)
log(`divide: ${a}`)
log(`mod: ${b}`)

x++
log(`x++: ${x}`)

x--
log(`x--: ${x}`)

let data1 = 10
let data2 = 10
let data3 = "10"

log(`data1 == data2: ${data1==data2}`)
log(`data1 === data2: ${data1===data1}`) //Compare value and type

//log(`"10" == 10: ${"10"==10}`) //Error
