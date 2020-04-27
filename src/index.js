import * as PIXI from 'pixi.js';

const app = new PIXI.Application({
	width: 50, height: 50, backgroundColor: 0x1099bb,
});

document.body.appendChild(app.view);

requestAnimationFrame(()=>{
	console.log('render')
});