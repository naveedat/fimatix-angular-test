import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ForecastState } from '..';

import { WeatherVM } from '../../../view-model/weather.vm';

export const getForecastState = createFeatureSelector<ForecastState>('forecast');

export const getWeathersState = createSelector(
    getForecastState,
    state => state.weathers
);

export const getWeathers = createSelector(
    getWeathersState,
    state => state.weathers ? WeatherVM.parseAll(state.weathers) : undefined
);
