import { Weather, WeatherList } from "../model/weather";

export class WeatherVM {
    city: string;
    sixAM: number;
    twelveAM: number;
    sixPM: number;
    twelvePM: number;

    static parseAll(model: Weather[]): WeatherVM[] {
        return model.map(weather => this.parse(weather));
    }

    static parse(model: Weather): WeatherVM {
        var vm = this.getTemperature(model.list);
        vm.city = model.city.name;

        return vm;
    }

    static getTemperature(weatherList: WeatherList[]): WeatherVM {
        var vm = new WeatherVM();
        for (let n = 0; n < weatherList.length; n++) {
            let hour = new Date(weatherList[n].dt * 1000).getUTCHours();
            switch (hour) {
                case 6:
                    vm.sixAM = weatherList[n].main.temp;
                    break;
                case 12:
                    vm.twelvePM = weatherList[n].main.temp;
                    break;
                case 18:
                    vm.sixPM = weatherList[n].main.temp;
                    break;
                case 0:
                    vm.twelveAM = weatherList[n].main.temp;
                    break;
            }
        }
        return vm;
    }
}