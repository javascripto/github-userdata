import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { GithubService } from './services/github.service';
import { MaterialModule } from './shared/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { UserContainerComponent } from './components/user-container/user-container.component';
import { FollowersComponent } from './components/user-container/followers/followers.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SearchFormComponent,
    UserContainerComponent,
    FollowersComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
