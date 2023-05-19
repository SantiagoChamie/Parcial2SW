import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banda',
  templateUrl: './banda.component.html',
  styleUrls: ['./banda.component.css']
})
export class BandaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  selectedBanda: any = null; // Asegúrate de tener esta variable en tu componente

  selectBanda(banda: any) {
    this.selectedBanda = banda;
  }
}
