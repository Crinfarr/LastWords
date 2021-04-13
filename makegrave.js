const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

function makegrave(username, quote) {
    return new Promise((res, rej) => {
        const canvas = createCanvas(600, 600);
        const ctx = canvas.getContext('2d');
        loadImage('./grave.jpg').then(img => {
            ctx.drawImage(img, 0, 0, 600, 600);
            ctx.font = "normal normal bold 30px serif";
            ctx.textAlign = 'center';
            ctx.fillText("Here Lies\n" + username, 270, 120);
            ctx.font = 'normal normal normal 20px serif';
            ctx.fillText('\"' + quote + '\"', 270, 240);
            res(canvas.toBuffer());
        })
    })
}
module.exports = makegrave

makegrave('crinfarr', 'what')