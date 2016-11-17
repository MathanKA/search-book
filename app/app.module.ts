import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { GithubComponent } from './components/github.component';
import {GithubService} from './services/github.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, GithubComponent ],
  providers: [GithubService],
  bootstrap:    [ AppComponent, GithubComponent ]
})
export class AppModule { }
