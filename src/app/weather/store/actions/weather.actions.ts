import { Action } from "@ngrx/store";

import { Weather } from "../../../model/weather";

export enum WeatherActionTypes {
    LoadCityWeather = '[Weather] Get City Weather',
    LoadCityWeatherSuccess = '[Weather] Get City Weather Success',
    LoadCityWeatherError = '[Weather] Get City Weather Error',
}

export class LoadCityWeather implements Action {
    readonly type = WeatherActionTypes.LoadCityWeather;
    constructor(public payload: string) { }
}

export class LoadCityWeatherSuccess implements Action {
    readonly type = WeatherActionTypes.LoadCityWeatherSuccess;
    constructor(public payload: Weather) { }
}

export class LoadCityWeatherError implements Action {
    readonly type = WeatherActionTypes.LoadCityWeatherError;
    constructor(public payload: Error) { }
}

export type WeatherActions =
    LoadCityWeather |
    LoadCityWeatherSuccess |
    LoadCityWeatherError;