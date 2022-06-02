import { Component, Input, OnInit } from '@angular/core';
import { Map } from 'ol';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  /**
   * Карта
   */
  @Input() public map!: Map;

  constructor() {}

  ngOnInit(): void {}
}
