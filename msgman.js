const fs = require('fs')

var log = JSON.parse(fs.readFileSync('./log.json'))

async function main() {
    for (var [id, [message, time]] of Object.entries(log)) {
        if (time + 604800000 <= new Date().getTime()) {
            console.log(id + '\'s log is older than a week, deleting it.')
            delete log[id]
        }
    }
    fs.writeFileSync('./log.json', JSON.stringify(log))
}
module.exports = main;