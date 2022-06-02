import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Map } from 'ol';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  /**
   * Карта
   */
  @Input() public map!: Map;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit(): void {
    this.map.setTarget(this.elementRef.nativeElement);
  }
}
