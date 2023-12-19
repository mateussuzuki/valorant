import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AgentService {
  private apiUrlAgents = 'https://valorant-api.com/v1/agents';
  private apiUrlMaps = 'https://valorant-api.com/v1/maps'
  constructor(private http: HttpClient) { }

  getAgents() {

    return this.http.get(this.apiUrlAgents);
  }
  getMaps() {
    return this.http.get(this.apiUrlMaps)
  }

  
}