import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Map } from 'ol';
import ScaleLine from 'ol/control/ScaleLine';

@Component({
  selector: 'app-scale-line',
  template: '',
  styleUrls: [],
})
export class ScaleLineComponent implements OnInit {
  /**
   * Карта
   */
  @Input() map!: Map;

  /**
   * Элемент масштабирования
   */
  public control!: ScaleLine;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.control = new ScaleLine({
      className: 'scale-line',
      target: this.elementRef.nativeElement,
    });
    this.map.addControl(this.control);
  }
}
