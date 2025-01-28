import { ChangeDetectionStrategy, Component, effect } from '@angular/core';
import { DatabaseService, User } from '../services/database.service';

@Component({
  selector: 'app-demo-db-component',
  templateUrl: './demo-db-component.component.html',
  styleUrl: './demo-db-component.component.css',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoDbComponentComponent { 
  users = this.database.getUsers();
  newUserName = '';

  constructor(private database: DatabaseService) {
    effect(() => {
      console.log('USERS CHANGED', this.users());
    });
  }

  async createUser(){
    await this.database.addUser(this.newUserName);
    this.newUserName = '';
  }
  
  updateUser(user: User){
    const active = user.active ? 1 : 0;
    this.database.updateUserById(user.id.toString(), active);
  }

  deleteUser(user: User){
    this.database.deleteUserById(user.id.toString());
  }
}
