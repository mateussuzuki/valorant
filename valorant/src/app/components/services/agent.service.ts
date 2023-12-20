import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AgentService {
  private apiUrlAgents = environment.apiUrlAgents;
  private apiUrlMaps = environment.apiUrlMaps;
  constructor(private http: HttpClient) { }

  getAgents() {
    return this.http.get(this.apiUrlAgents);
  }
  getMaps() {
    return this.http.get(this.apiUrlMaps)
  }

  
}