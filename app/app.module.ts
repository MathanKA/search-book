import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { GithubComponent } from './components/github.component';
import {GithubService} from './services/github.service';
import {HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, GithubComponent ],
  providers: [GithubService],
  bootstrap:    [ AppComponent, GithubComponent ]
})
export class AppModule { }
