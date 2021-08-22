import { ActionReducerMap } from '@ngrx/store';
import * as forecast from './reducers/weather.reducers';
import { WeatherEffects } from './effects/weather.effects';

export interface ForecastState {
    weathers: forecast.WeatherState;
}

export const reducers: ActionReducerMap<ForecastState> = {
    weathers: forecast.reducer
};

export const effects: any[] = [WeatherEffects];
