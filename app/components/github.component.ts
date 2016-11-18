import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
    moduleId: module.id,
    selector: 'git-hub',
    templateUrl: `github.component.html`
})
export class GithubComponent {
    user: any;
    respos: any;
    username: any;

    constructor (private _githubService:GithubService) {

    }
    search(){
        this._githubService.updateUsername(this.username);

        this._githubService.getUser().subscribe(user => {
            this.user = user;
        });

        this._githubService.getRepos().subscribe(repos => {
            this.repos = repos;
        });
    }
 }
