const jsdom = require('jsdom')
const { registerFont, createCanvas } = require('canvas')
registerFont('./assets/fonts/HomemadeApple-Regular.ttf', { family: 'Homemade Apple' })

const { JSDOM } = jsdom
const { document } = (new JSDOM(``)).window

class TypeSignature {
  constructor(text = 'Alex Partitsky') {
    this.height = 80
    this.width = 400
    this.font = '2em "Homemade Apple"'
    this.text = text
  }

  generateBase64() {
    const canvas = createCanvas(this.width, this.height)
    const ctx = canvas.getContext('2d')
    ctx.font = this.font
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.moveTo(0, 0)
    ctx.fillStyle = 'black'
    ctx.fillText(this.text, 10, canvas.height - 25)

    return canvas.toDataURL()
  }
}

module.exports = TypeSignature
