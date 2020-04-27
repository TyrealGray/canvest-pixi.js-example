import * as PIXI from 'pixi.js';
import { Dragon } from './dragon';

const app = new PIXI.Application({
	width: 800, height: 600, backgroundColor: 0x1099bb,
});

document.body.appendChild(app.view);
const container = new PIXI.Container();
container.width = 800;
container.height = 600;
const dragon = new Dragon(container);
app.stage.addChild(container);
dragon.update(1.5);