import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterSearchComponent } from './components/character-search/character-search.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CharacterCreateComponent } from './components/character-create/character-create.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterSearchComponent,
    CharacterDetailComponent,
    CharacterCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
