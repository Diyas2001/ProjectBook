import {NgModule} from '@angular/core';
import {GroupComponent} from './group/group.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserComponent} from './user/user.component';
import {AdminRoutingModule} from './AdminRoute';

@NgModule({
  declarations: [
    GroupComponent,
    DashboardComponent,
    UserComponent
  ],
  imports: [AdminRoutingModule],
  providers: [],
  exports: [
    UserComponent, GroupComponent, DashboardComponent
  ],
  bootstrap: [UserComponent]
})
export class AdminModule {}
