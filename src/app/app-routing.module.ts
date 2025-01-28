import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { DemoDbComponentComponent } from './demo-db-component/demo-db-component.component';

const routes: Routes = [
  {
    path: '',
    component: DemoDbComponentComponent,
  },
  {
    path: 'chat',
    component: ChatComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
