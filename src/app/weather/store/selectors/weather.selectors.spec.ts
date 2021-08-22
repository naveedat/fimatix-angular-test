import { ForecastState } from "..";
import { WeatherState } from "../reducers/weather.reducers";
import { getWeathers, getWeathersState } from "./weather.selectors";

describe("ForecastSelectors", () => {
    const weatherState: WeatherState = {
        weathers: [
            {
                city: { id: 2344, name: "London" },
                list: [],
            },
            {
                city: { id: 2345, name: "Bristol" },
                list: [],
            },
        ],
        loading: true,
        error: null
    };

    const initialState: ForecastState = {
        weathers: weatherState
    }

    it("should select the weather list", () => {
        const result = getWeathers.projector(initialState.weathers);
        expect(result.length).toEqual(2);
        expect(result[1].city).toEqual("Bristol");
    });

    it("should select the weather collection", () => {
        const result = getWeathersState.projector(initialState.weathers);
        expect(result[0].city.name).toEqual("London");
    });
});