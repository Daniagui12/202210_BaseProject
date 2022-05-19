import { Component, OnInit } from '@angular/core';
import { Banda } from '../Banda';
import { BandaService } from '../Banda.service';

@Component({
  selector: 'app-Banda-list',
  templateUrl: './Banda-list.component.html',
  styleUrls: ['./Banda-list.component.css']
})
export class BandaListComponent implements OnInit {
  bandas: Array<Banda> = [];
  selectedBanda!: Banda;
  average: number = 0;
  selected = false;
  constructor(private bandaService: BandaService) { }

  getbandas(): void {
    this.bandaService.getBandas().subscribe((bandas) => {
      this.bandas = bandas;
      this.membersAverage();
    });
  }

  onSelected(banda: Banda): void {
    this.selected = true;
    this.selectedBanda = banda;
  }

  membersAverage() {
    let sum = 0;
    if (this.bandas.length > 0) {
      for (let serie of this.bandas) {
        sum += serie.numberOfMembers;
      }
      this.average = Math.round(sum/this.bandas.length);
    }
  }

  ngOnInit() {
    this.getbandas();
  }

}
