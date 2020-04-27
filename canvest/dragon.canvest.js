import * as PIXI from 'pixi.js';
import { snapshot, equal } from '../src/snapshot';

describe('Background color', () => {

	let app = null;

	before(()=>{
		app = new PIXI.Application({
			width: 50, height: 50, backgroundColor: 0x1099bb,
			preserveDrawingBuffer: true
		});
	});


	it('should render the same', () => {

		const tempcanvas = document.createElement('canvas');
		tempcanvas.width = app.view.width;
		tempcanvas.height = app.view.height;
		let renderNo1 = null,
			renderNo2 = null;

		setTimeout(()=>{
			requestAnimationFrame(() => {
				renderNo1 = snapshot(app.view, tempcanvas);

				requestAnimationFrame(() => {
					renderNo2 = snapshot(app.view, tempcanvas);

					expect(equal(renderNo1,renderNo2)).to.equal(true);
					document.body.appendChild(tempcanvas);
				});
			});
		},1000);

	});

	it('should not render the same', () => {

		const tempcanvas = document.createElement('canvas');
		tempcanvas.width = app.view.width;
		tempcanvas.height = app.view.height;
		let renderNo1 = null,
			renderNo2 = null;

		setTimeout(()=>{
			requestAnimationFrame(() => {
				app.renderer.backgroundColor = 0xFF00FF;
				renderNo1 = snapshot(app.view, tempcanvas);

				requestAnimationFrame(() => {
					renderNo2 = snapshot(app.view, tempcanvas);

					document.body.appendChild(tempcanvas);
					expect(equal(renderNo1,renderNo2)).to.equal(false);
				});
			});
		},2000);
	});
});