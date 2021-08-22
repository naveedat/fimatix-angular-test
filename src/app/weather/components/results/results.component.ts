import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { WeatherVM } from '../../../view-model/weather.vm';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnChanges {
  @Input() weathers: WeatherVM[];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    // Although a filter can be moved in ngrx etc but this could be a good place too.
    // REMOVE DUPLICATE CITY
    if (!changes.weathers.firstChange) {
      this.weathers = changes.weathers.currentValue.reduce((accumalator, current) => {
        if (!accumalator.some(item => item.city === current.city)) {
          accumalator.push(current);
        }
        return accumalator;
      }, []);
    }
  }
}


