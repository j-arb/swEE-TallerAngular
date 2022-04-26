import { Component, OnInit } from '@angular/core';
import { Serie } from "./serie";
import { SerieService } from "./serie.service";

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];
  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    });
  }

  calcularPromedioTemporadas(series: Serie[]) : number {
      let suma: number = 0;
      series.forEach((serie) => {
          suma += serie.seasons;
      });
      let promedio : number = suma / (series.length);
      return promedio;
  }

  constructor(private serieService: SerieService) { }

  ngOnInit() {
    this.getSeries();
  }

}
