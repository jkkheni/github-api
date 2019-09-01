import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ApiService} from './services/api.service';
import {RepoService} from './services/repo.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'ngx-moment';
import { DetailComponent } from './detail/detail.component';
import { RepoComponent } from './repo/repo.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
   declarations: [
      AppComponent,
      DetailComponent,
      RepoComponent,
      EditComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      // tslint:disable-next-line: deprecation
      HttpModule,
      MomentModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [
      ApiService,
      RepoService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
