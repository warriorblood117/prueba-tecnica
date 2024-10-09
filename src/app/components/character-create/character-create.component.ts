import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-character-create',
  templateUrl: './character-create.component.html',
  styleUrls: ['./character-create.component.css']
})
export class CharacterCreateComponent {
  
  characterForm = this.fb.group({
    id: [0,Validators.required],
    name: ['',Validators.required],
    description: ['',Validators.required],
    thumbnail: ['',Validators.required],
    comics: this.fb.array([this.fb.control('',Validators.required)]),
    events: this.fb.array([this.fb.control('',Validators.required)])
  })



  constructor(private fb:FormBuilder){}
  
 
  get comics() {
    return this.characterForm.get('comics') as FormArray;
  }

  get events() {
    return this.characterForm.get('events') as FormArray;
  }

  addComic(){
    this.comics.push(this.fb.control('a'));
  }

  addEvents(){
    this.events.push(this.fb.control(''));
  }

  onSave(){
    if(this.characterForm.invalid) return console.log(this.characterForm.value);
  }

 
}
