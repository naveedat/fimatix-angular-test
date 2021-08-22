import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { LoadCityWeather } from '../actions/weather.actions';
import { WeatherState } from '../reducers/weather.reducers';
import { getWeathers } from '../selectors/weather.selectors';

@Injectable()
export class WeatherFacade {
    weathers$ = this.store.pipe(select(getWeathers));

    constructor(private store: Store<WeatherState>) { }

    searchWeatherForCity(city: string) {
        this.store.dispatch(new LoadCityWeather(city));
    }
}