import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { WeatherService } from "../../services/weather.service";
import { Weather } from "../../../model/weather";
import { LoadCityWeather, LoadCityWeatherError, LoadCityWeatherSuccess, WeatherActionTypes } from "../actions/weather.actions";

@Injectable()
export class WeatherEffects {
  loadCityWeather$ = createEffect(() => this.actions$
    .pipe(
      ofType<LoadCityWeather>(WeatherActionTypes.LoadCityWeather),
      mergeMap((action: LoadCityWeather) => this.weatherService.searchWeatherForCity(action.payload)
        .pipe(
          map((weather: Weather) => {
            return (new LoadCityWeatherSuccess(weather));
          }),
          catchError((error: Error) => of(new LoadCityWeatherError(error)))
        ))
    ));

  constructor(private actions$: Actions, private weatherService: WeatherService) { }
}