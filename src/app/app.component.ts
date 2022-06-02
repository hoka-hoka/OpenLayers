import { Component } from '@angular/core';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {
  FullScreen,
  defaults as defaultControls,
  ScaleLine,
  Control,
  Zoom,
} from 'ol/control';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /**
   * Карта
   */
  public map!: Map;

  constructor() {}

  public ngOnInit(): void {
    const map = new Map({
      controls: [
        new FullScreen({ tipLabel: 'test' }),
        new Zoom({ zoomInTipLabel: '1', zoomOutTipLabel: '2' }),
      ],
      target: 'map',
    });
    const view = new View({
      center: [0, 0],
      zoom: 2,
      maxZoom: 12,
      constrainOnlyCenter: true,
    });
    const layer = new TileLayer({
      source: new OSM(),
      minZoom: 1,
    });
    map.addLayer(layer);
    map.setView(view);
  }
}

// class RotateNorthControl extends Control {
//   /**
//    * @param {Object} [opt_options] Control options.
//    */
//   constructor(opt_options?: any) {
//     const options = opt_options || {};

//     const button = document.createElement('button');
//     button.innerHTML = "<i class='fa fa-crosshairs'/>";
//     button.title = 'Перейти к актуальной';

//     const element = document.createElement('div');
//     element.className = 'zoom-to-feature ol-unselectable ol-control';
//     element.appendChild(button);

//     super({
//       element: element,
//       target: options.target,
//     });

//     button.addEventListener('click', this.handleRotateNorth.bind(this), false);
//   }

//   handleRotateNorth() {}
// }
