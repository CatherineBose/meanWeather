import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {

  constructor(private _http: HttpClient) { }

  getWeather(zip){
     
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?zip='+zip+',us&units=imperial&appid=5a153b04e7a5e65a0baf429af7d5c0cb');
  }

}
