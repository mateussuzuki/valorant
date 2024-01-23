import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrlAgents = environment.apiUrlAgents;
  private apiUrlMaps = environment.apiUrlMaps;
  private apiUrlGunsCollection = environment.apiUrlGunsCollection
  private apiUrlGuns = environment.apiUrlGuns

  constructor(private http: HttpClient) { }

  getAgents() {
    return this.http.get(this.apiUrlAgents);
  }

  getMaps() {
    return this.http.get(this.apiUrlMaps)
  } 

  getGuns() {
    return this.http.get(this.apiUrlGuns)
  }

  getGunsCollection() {
    return this.http.get(this.apiUrlGunsCollection)
  }

  
}