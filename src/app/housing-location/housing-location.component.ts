import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HousingLocation} from '../housing-location';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img [src]="housingLocation.photo" alt="Exterior photo {{housingLocation.name}}" class="listing-photo">
      <h2 class="listing-heading">
        <p class="listing-location"></p>
      </h2>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;

}
