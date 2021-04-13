const fs = require("fs")

var log = JSON.parse(fs.readFileSync('./log.json'))

Object.entries(obj).forEach(([key, value]) => {
    if (value[1] + 604800000 <= new Date().getTime()) {
        delete log[key]
    }
}).finally(() => {
    fs.writeFileSync('./log.json', JSON.stringify(log))
})