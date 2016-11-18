import {Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable ()


export class GithubService {
     private username: any ;
     private client_id = 'b1688667cc4749de83f8';
     private client_secret = 'bc64b1eb7b57f70ffbd8e8133f78e37486f52b83';
     
    constructor(private _http: Http) {
    }

    getUser() {
        return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    getRepos() {
        return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json());
    }

    updateUsername(username: any){
        this.username = username;

    }
}