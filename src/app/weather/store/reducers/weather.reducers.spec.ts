import * as fromReducer from './weather.reducers';
import * as fromActions from '../actions/weather.actions';

describe('ForecastReducer', () => {
    describe('unknown action', () => {
        it('should return the default state', () => {
            const initialState = fromReducer.intitalState;
            const action = { type: 'hola' } as any;;

            const state = fromReducer.reducer(initialState, action);

            expect(state).toBe(initialState);
        });
    });

    describe('LoadCityWeather action', () => {
        it('should retrieve city weather forecast and update the state', () => {
            const initialState = fromReducer.intitalState;

            const action = new fromActions.LoadCityWeather("Bristol");
            const state = fromReducer.reducer(initialState, action);

            expect(state.loading).toEqual(true);
            expect(state.weathers).toEqual([]);
        });
    });
});