import { createCanvas, registerFont } from 'canvas';
import { Parameters } from './interfaces/parameters';
import path = require('path');
const fontPath = path.join(__dirname, 'assets/fonts/HomemadeApple-Regular.ttf');

registerFont(fontPath, { family: 'Homemade Apple' });

export function generateBase64(p: Parameters): string {
  const sizeMultiplier = p.sizeMultiplier || 1;
  const width = 400 * sizeMultiplier;
  const height = 80 * sizeMultiplier;
  const fontSize = 2 * sizeMultiplier;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.moveTo(0, 0);

  ctx.fillStyle = 'black';
  ctx.font = `${fontSize}em "Homemade Apple"`;
  ctx.fillText(p.text, canvas.width * 0.025, canvas.height * 0.57);

  return canvas.toDataURL();
}
