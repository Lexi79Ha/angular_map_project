import { Component } from '@angular/core';
import { WorldapiService } from '../worldapi.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-worldmap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './worldmap.component.html',
  styleUrl: './worldmap.component.css'
})
export class WorldmapComponent {

  info: any = {};

  constructor (private worldapiService: WorldapiService) {}

  setCountryData(event: any) {
    this.worldapiService.setCountryData(event.target.id).subscribe((data: any) => {
      this.info = {
        ...data,
        country: event.target.getAttribute('name')
      }
    })
   
    }

}
