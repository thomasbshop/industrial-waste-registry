import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTableComponent } from './pages/data-table/data-table.component';
import { AuthGuard } from './auth/auth.guard';
import { CallbackComponent } from './pages/callback/callback.component';

const routes: Routes = [
  {
    path: 'list',
    component: DataTableComponent,
    // canActivate: [ AuthGuard ]
  },
  {
    path: 'callback', component: CallbackComponent
  },
  { path: '', pathMatch: 'full', redirectTo: '/list' },
  { path: '**', redirectTo: '/list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }