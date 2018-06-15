import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent  implements OnInit {
  title = 'Health Care Management'; 

  ngOnInit() {
    localStorage.setItem('logginHappened', 'false')
  }
}
