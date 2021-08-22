import { TestBed } from "@angular/core/testing";
import { cold, hot } from "jasmine-marbles";
import { Observable } from "rxjs";
import { provideMockActions } from '@ngrx/effects/testing';

import { WeatherEffects } from "./weather.effects";
import { Weather } from "../../../model/weather";
import { WeatherService } from "../../services/weather.service";
import { LoadCityWeather, LoadCityWeatherError, LoadCityWeatherSuccess } from "../actions/weather.actions";

describe('ForecastEffects', () => {
    let actions: Observable<any>;

    let effects: WeatherEffects;
    let weatherService: jasmine.SpyObj<WeatherService>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                WeatherEffects,
                provideMockActions(() => actions),
                {
                    provide: WeatherService,
                    useValue: {
                        searchWeatherForCity: jasmine.createSpy()
                    }
                }
            ]
        });


        effects = TestBed.get(WeatherEffects);
        weatherService = TestBed.get(WeatherService);
    });

    describe('loadCityWeather', () => {
        it('should return a weather response load action', () => {
            const weather: Weather = {
                city: { id: 2344, name: "London" },
                list: [],
            }
            const action = new LoadCityWeather("London");
            const outcome = new LoadCityWeatherSuccess(weather);

            actions = hot('-a', { a: action });
            const response = cold('-a|', { a: weather });
            weatherService.searchWeatherForCity.and.returnValue(response);

            const expected = cold('--b', { b: outcome });
            expect(effects.loadCityWeather$).toBeObservable(expected);
        });

        it('should fail and return an action with the error', () => {
            const action = new LoadCityWeather("London");
            const error = new Error('forecast error') as any;
            const outcome = new LoadCityWeatherError(error);

            actions = hot('-a', { a: action });
            const response = cold('-#|', {}, error);
            weatherService.searchWeatherForCity.and.returnValue(response);

            const expected = cold('--b', { b: outcome });
            expect(effects.loadCityWeather$).toBeObservable(expected);
        });
    });
});
