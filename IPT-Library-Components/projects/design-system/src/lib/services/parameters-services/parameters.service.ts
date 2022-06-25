import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ParametersService {

  httpOptions: any;

  // private SERVICE_URL= 'https://iptdev.com.co/lab/parameters/api/';

  private SERVICE_URL = 'https://iptdev.com.co/lab/parameters/api/';

  constructor(private http: HttpClient) {}

  getIndicatives(): Observable<any> {
    let serviceUrl = this.SERVICE_URL + 'get/indicatives';
    return this.http.get(serviceUrl);
  }

  getCardTypes(country: string): Observable<any> {
    let serviceUrl = this.SERVICE_URL + 'get/id/card/type/country/' + country;
    return this.http.get(serviceUrl);
  }

  getStatesByCountry(country: string): Observable<any> {
    let serviceUrl = this.SERVICE_URL + 'get/state/country/iso/' + country;
    return this.http.get(serviceUrl);
  }

  getCitiesByState(state: number): Observable<any> {
    let serviceUrl = this.SERVICE_URL + 'get/cities/state/' + state;
    return this.http.get(serviceUrl);
  }

  // Endpoints de creación de cursos

  getAllPlans(): Observable<any> {
    let serviceUrl = this.SERVICE_URL + 'get/all/plans';
    return this.http.get(serviceUrl);
  }

  getLevels(): Observable<any> {
    let serviceUrl = this.SERVICE_URL + 'get/english/levels';
    return this.http.get(serviceUrl);
  }

  getAgreements(): Observable<any> {
    let serviceUrl = this.SERVICE_URL + 'get/all/agreement';
    return this.http.get(serviceUrl);
  }

  getAgreementByCategory( typeCategory:any): Observable<any> {
    let serviceUrl = this.SERVICE_URL + 'get/agreement/by/category/' + typeCategory;
    return this.http.get(serviceUrl);
}

  getAllClassrooms(): Observable<any> {
    let serviceUrl = this.SERVICE_URL + 'get/all/classroom';
    return this.http.get(serviceUrl);
  }

  getCoursesTypes(): Observable<any> {
    let serviceUrl = this.SERVICE_URL + 'get/all/course/type';
    return this.http.get(serviceUrl);
  }

  getCoursesTypesByPlan(typePlan: any): Observable<any> {
    let serviceUrl = this.SERVICE_URL + 'get/course/by/plan/' + typePlan;
    return this.http.get(serviceUrl);
  }

}
