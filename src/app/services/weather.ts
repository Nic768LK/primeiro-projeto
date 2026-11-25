import { HttpClient } from '@angular/common/http';
import { Service } from '@angular/core';
import { Injectable, inject } from '@angular/core';

@Service()
export class WeatherService {

    private httpClient = inject(HttpClient);

    private api_key = '227b6c6db09cc03b5faf0d976c1edd9c';

    private api_url = 'https://api.openweathermap.org';

    getLatLon(city: string) {
        let url = `${this.api_url}/geo/1.0/direct?q=${city},BRL&limit=5&appid=${this.api_key}`;

        return this.httpClient.get(url);
    }

    getWeather(lat: number, lon: number) {
        let url = `${this.api_url}/data/2.5/weather?lat=${lat}&lon=${lon}&exclude=hourly&units=metrical&lang=pt&appid=${this.api_key}`;

        return this.httpClient.get(url);
    }
}
