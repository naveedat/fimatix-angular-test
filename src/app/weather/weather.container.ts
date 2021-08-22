import { Component } from '@angular/core';
import { WeatherFacade } from './store/facade/weather.facade';

@Component({
  selector: 'app-weather',
  template: `
    <app-search (citySearch)="citySearch($event)"></app-search>
    <app-results [weathers]="weathers$ | async"></app-results>
  `
})
export class WeatherContainer {

  weathers$ = this.weatherFacade.weathers$;

  constructor(public weatherFacade: WeatherFacade) {
  }

  citySearch(city: string) {
    this.weatherFacade.searchWeatherForCity(city);
  }
}
