import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { EventManagerComponent } from './workspace/event-manager/event-manager.component';
import { UserAccessGuardService } from './user-access/guard/user-access-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'workspace', pathMatch: 'full' },
  {
    component: LayoutComponent,
    path: 'workspace',
    children: [
      {
        canActivate: [UserAccessGuardService],
        path: '',
        loadChildren: () => import('../app/workspace/workspace.module').then(mod => mod.WorkspaceModule)
      }
    ]
  },
  {
    path: 'access',
    loadChildren: () => import('../app/user-access/user-access.module').then(mod => mod.UserAccessModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
