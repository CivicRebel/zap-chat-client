import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  constructor(private database: DatabaseService) {
  }

  async ngOnInit() {
    await this.initApp();
  }

  async initApp(){
    await this.database.initializePlugin();
  }
}
