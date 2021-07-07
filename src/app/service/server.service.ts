import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private apiurl: string;
  host: any;
  log: any;
  constructor(private http: HttpClient) {
    this.host = window.location.host;
    if ((this.host.toString().indexOf("localhost") + 1) && this.host.toString().indexOf(":")) {
      this.apiurl = "https://openebs.ci/api";
    } else if (this.host == "openebs.ci" || this.host == "wwww.openebs.ci") {
      this.apiurl = "https://openebs.ci/api";
    } else {
      this.apiurl = "https://openebs.ci/api";
    }
  }

  getAPIData(platform: string, branch: string) {
    var data = this.http.get<any[]>(this.apiurl + `/${platform}/${branch}`);
    return data;
  }
  gitLabStatus() {
    let data = this.http.get<any[]>(this.apiurl + `/status`);
    return data
  }
  getPipelineData(platform: string, branch: string, id: string) {
    let data = this.http.get<any[]>(this.apiurl + `/${platform}/${branch}/pipeline/${id}`);
    return data
  }

  getAnyEndpointData(endpoint: string) {
    var data = this.http.get<any[]>(this.apiurl + `${endpoint}`);
    return data;
  }
}