import * as PIXI from 'pixi.js';
import { Dragon } from '../src/dragon';

describe('Dragon class', () => {

	let rotate1dot5Snapshot = null;
	it('should render the same', async () => {

		const app = new PIXI.Application({
			width: 800, height: 600, backgroundColor: 0x1099bb,
			preserveDrawingBuffer: true
		});

		const container = new PIXI.Container();
		container.width = 800;
		container.height = 600;
		const dragon = new Dragon(container);
		app.stage.addChild(container);
		dragon.update(1.5);

		const renderNo1 = await snapshot(app.view);

		const renderNo2 = await snapshot(app.view);

		rotate1dot5Snapshot = renderNo2;

		expect(isPixelEqual(renderNo1, renderNo2)).to.equal(true);
	});

	it('should not render the same', async () => {

		const app = new PIXI.Application({
			width: 800, height: 600, backgroundColor: 0x1099bb,
			preserveDrawingBuffer: true
		});

		const container = new PIXI.Container();
		container.width = 800;
		container.height = 600;
		const dragon = new Dragon(container);
		app.stage.addChild(container);
		dragon.update(0.0);

		const renderNo1 = await snapshot(app.view);

		dragon.update(1.4);

		const renderNo2 = await snapshot(app.view);

		expect( isPixelEqual(renderNo1, renderNo2)).to.equal(false);

		dragon.update(1.5);

		const renderNo3 = await snapshot(app.view);

		expect( isPixelEqual(renderNo3, rotate1dot5Snapshot)).to.equal(true);

	});
});