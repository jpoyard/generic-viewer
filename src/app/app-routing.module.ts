import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CanActivateViaAuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule', canActivate: [CanActivateViaAuthGuard] },
  { path: '**', redirectTo: '' }
];

export const appRoutingProviders: any[] = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
