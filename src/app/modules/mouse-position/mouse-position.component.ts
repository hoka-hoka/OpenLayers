import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Map } from 'ol';
import MousePosition from 'ol/control/MousePosition';
import { CoordinateFormatterService } from 'src/app/services/coordinate-formatter/coordinate-formatter.service';

@Component({
  selector: 'app-mouse-position',
  templateUrl: './mouse-position.component.html',
  styleUrls: ['./mouse-position.component.scss'],
})
export class MousePositionComponent implements OnInit {
  /**
   * Карта
   */
  @Input() map!: Map;

  /** */
  @Input() positionTemplate!: string;

  /**
   *
   */
  public control!: MousePosition;

  constructor(
    private element: ElementRef,
    private coordinateFormatter: CoordinateFormatterService
  ) {}

  ngOnInit(): void {
    this.control = new MousePosition({
      className: 'mouse-position',
      coordinateFormat: (coordinates: number[] | undefined) =>
        this.coordinateFormatter.numberCoordinates(
          coordinates,
          4,
          this.positionTemplate
        ),
      target: this.element.nativeElement,
      placeholder: '',
    });
    this.map.addControl(this.control);
  }
}
