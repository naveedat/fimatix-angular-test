
import { WeatherActions, WeatherActionTypes } from '../actions/weather.actions';

import { Weather } from '../../../model/weather';

export interface WeatherState {
    weathers: Weather[];
    loading: boolean;
    error: any;
}

export const intitalState: WeatherState = {
    weathers: [],
    loading: false,
    error: null
};

export function reducer(state = intitalState, action: WeatherActions): WeatherState {
    switch (action.type) {
        case WeatherActionTypes.LoadCityWeather: {
            return {
                ...state,
                loading: true,
                error: null
            };
        }

        case WeatherActionTypes.LoadCityWeatherSuccess: {
            const weathersState = { ...state };
            const weathers = Object.assign([], weathersState.weathers);
            weathers.push(action.payload);

            return {
                ...state,
                loading: false,
                weathers: weathers,
                error: null
            };
        }

        case WeatherActionTypes.LoadCityWeatherError: {
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        }

        default: {
            return state;
        }
    }
}
