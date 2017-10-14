import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
/*template: `
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div><label>name: </label>{{hero.name}}</div>
  <div><label>role: </label>{{userobj.role}}</div>
  <div><label>empname: </label>{{userobj.empname}}</div>`*/

})
export class AppComponent {
  title = 'Tour of Hero';
  name = 'windstrom';	
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  
  userobj: User = {
	role: 'E2681',
	empname: 'Mohitverma'	
  };
  
}
export class Hero {
  id: number;
  name: string; 
}

export class User {
	role: string;
	empname: string;
}
  