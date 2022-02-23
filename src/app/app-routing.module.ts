import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LdapAddComponent } from './ldap-management/ldap-add/ldap-add.component';
// import { LdapDetailComponent } from './ldap-detail/ldap-detail.component';
// import { LdapEditComponent } from './ldap-management/ldap-edit/ldap-edit.component';
// import { LdapListComponent } from './ldap-management/ldap-list/ldap-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // { path: 'users/list', component: LdapListComponent },
  // { path: 'users/add', component: LdapAddComponent },
  // { path: 'user/:id', component: LdapEditComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
