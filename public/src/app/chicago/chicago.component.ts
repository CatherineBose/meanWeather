import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';


interface Main {
  humidity: number,
  temp: number,
  temp_min: number,
  temp_max: number

}
interface Sky {
  main: string,
  description: string
}
interface WeatherData {
  main: Main,
  weather: [Sky]
}
interface LocalWeather {
  humidity: number,
  tempAvg: number,
  tempMin: number,
  tempMax: number,
  status: string
}

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  weather: LocalWeather = null

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather();
  }
  getWeather(){
    this._weatherService.getWeather('60610').subscribe(
      (data: WeatherData) => {
        console.log("chicago", data)
        this.weather = {
          humidity: data.main.humidity,
          tempAvg: data.main.temp,
          tempMin: data.main.temp_min,
          tempMax: data.main.temp_max,
          status: data.weather[0].description
        }

      })
  }

}
