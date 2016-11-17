import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
    moduleId: module.id,
    selector: 'git-hub',
    templateUrl: `github.component.html`
})
export class GithubComponent {
    constructor (private _githubService:GithubService) {
    
    }
 }
