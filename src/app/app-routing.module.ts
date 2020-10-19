import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcmeStoreComponent } from './acme-store/acme-store.component'
import { AcmeAboutComponent } from './acme-about/acme-about.component'

const routes: Routes = [
  { path: '', redirectTo: 'acmestore', pathMatch:'full' },
  { path: 'acmestore', component: AcmeStoreComponent },
  { path: 'acmeabout', component: AcmeAboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
