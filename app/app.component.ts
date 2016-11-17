import { Component } from '@angular/core';
// import { GithubComponent } from './components/github.component';
// import {GithubService} from './services/github.service';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
    selector: 'my-app',
    template: `<git-hub></git-hub>`,
    // providers: [GithubService]
    providers: [HTTP_PROVIDERS]
})
export class AppComponent { }
