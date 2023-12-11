import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AgentService {
  private apiUrl = 'https://valorant-api.com/v1/agents';

  constructor(private http: HttpClient) { }

  getAgents() {
    return this.http.get(this.apiUrl);
  }
}