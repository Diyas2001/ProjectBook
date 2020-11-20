import {RouterModule, Routes} from '@angular/router';
import {GroupComponent} from './group/group.component';
import {UserComponent} from './user/user.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NgModule} from '@angular/core';


const adminRoutes: Routes = [
  {path: '', component: UserComponent},
  {path: 'user', component: UserComponent},
  {path: 'group', component: GroupComponent},
  {path: 'dashboard', component: DashboardComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
