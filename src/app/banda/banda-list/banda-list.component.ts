import { Component, OnInit } from '@angular/core';
import { BandaService } from '../banda.service';
import { Banda } from '../banda';

@Component({
  selector: 'app-banda-list',
  templateUrl: './banda-list.component.html',
  styleUrls: ['./banda-list.component.css']
})
export class BandaListComponent implements OnInit {

  constructor(private bandaService: BandaService) { }

  bandas: Array<Banda> = [];

  getBandas(): void {
    this.bandaService.getBandas().subscribe((bandas) => {
      this.bandas = bandas;
    });
  }

  getOldestBand(): string {
    let oldest = 9999
    let nombre = "";
    for (let banda of this.bandas) {
      if (banda.foundation_year < oldest) {
        oldest = banda.foundation_year;
        nombre = banda.name;
      }
    }
    return "La banda más antigua es " + nombre + " y fue fundada hace " + (2023-oldest) + " años.";
  }

  ngOnInit() {
    this.getBandas();

  }
  selectedBanda: any = null;

  selectBanda(banda: any) {
    this.selectedBanda = banda;
  }
}
