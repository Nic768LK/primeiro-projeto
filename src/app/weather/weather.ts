import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { inject } from '@angular/core';
import { WeatherService } from '../services/weather';
import { CommonModule } from '@angular/common';

@Component({
  imports: [ReactiveFormsModule, CommonModule],
  selector: 'app-weather',
  styleUrl: './weather.css',
  templateUrl: './weather.html',
})
export class Weather {
  constructor( private weatherService: WeatherService){  }

  private builder = inject(FormBuilder);

  locationsForm = this.builder.group({
    city: ['', Validators.required]
  });
  
  weatherData: any;
  locations: any;
  selectedLocation: any;

  obterRegioes() {

    let city = String(this.locationsForm.get('city')?.value);

    this.weatherService.getLatLon(city).subscribe(data => {

      this.locations = data;

      console.log(data);
    })

  }

  obterClima(location: any) {
    this.selectedLocation = location;

    this.weatherService.getWeather(location.lat, location.lon).subscribe(data => {
      this.weatherData = data;

      console.log(data);
    })

}}
