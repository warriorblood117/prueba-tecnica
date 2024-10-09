import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CharacterSearchComponent } from './components/character-search/character-search.component';
import { CharacterCreateComponent } from './components/character-create/character-create.component';

const routes: Routes = [
  { path: '', component: CharacterListComponent },
  { path: 'search', component: CharacterSearchComponent },
  { path: 'character/:id', component: CharacterDetailComponent },
  { path: 'character-create', component: CharacterCreateComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
