import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorldapiService {

  constructor(private http: HttpClient) { }

  fetchCountryData(countryCode: string) {
    let api = `https://api.worldbank.org/v2/country/${countryCode}?format=json`;
    return this.http.get(api);
    
  }
  setCountryData(countryCode: string) {
    let subject = new Subject();
    
    this.fetchCountryData(countryCode).subscribe((data: any) => {
      let countryData = data[1][0];

      subject.next({
      name: countryData.name,
      capital: countryData.capitalCity,
      region: countryData.region.value,
      incomelevel: countryData.incomeLevel.value,
      longitude: countryData.longitude,
      latitude: countryData.latitude,
      })
    })
      return subject.asObservable();
  }
}
