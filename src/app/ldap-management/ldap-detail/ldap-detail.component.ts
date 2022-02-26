import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { UsersService } from '../../service/users.service';
import { UserLdap } from '../../model/user-ldap';
import { FormBuilder } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import {
  ConfirmValidParentMatcher,
  passwordValidator,
} from './passwords-validator.directive';

// @Component({
//   selector: 'app-ldap-detail',
//   templateUrl: './ldap-detail.component.html',
//   styleUrls: ['./ldap-detail.component.css'],
// })
export abstract class LdapDetailComponent {
  protected constructor(
    // private route: ActivatedRoute,
    // private usersService: UsersService,
    public addForm: boolean,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.passwordPlaceHolder =
      'Mot de passe' + (this.addForm ? '' : '(vide si inchange)');
  }

  abstract validateForm(): void;

  user: UserLdap;
  passwordPlaceHolder: string;
  processLoadRunning = false;
  processValidateRunning = false;
  errorMessage = '';

  confirmValidParentMatcher = new ConfirmValidParentMatcher();

  userForm = this.fb.group({
    login: [''],
    nom: [''],
    prenom: [''],
    passwordGroup: this.fb.group(
      {
        password: [''],
        confirmPassword: [''],
      }
      // { validators: passwordValidator }
    ),
    mail: { value: '', disabled: true },
  });

  protected onInit(): void {}

  // ngOnInit(): void {
  //   this.getUser();
  // }

  private formGetValue(name: string): any {
    return this.userForm.get(name).value;
  }

  goToLdap(): void {
    this.router.navigate(['/users/list']);
  }

  onSubmitForm(): void {
    this.validateForm();
  }

  updateLogin(): void {
    if (this.addForm) {
      this.userForm
        .get('login')
        .setValue(
          (
            this.formGetValue('prenom') +
            '.' +
            this.formGetValue('nom')
          ).toLowerCase()
        );
      this.updateMail();
    }
  }
  updateMail(): void {
    if (this.addForm) {
      this.userForm
        .get('mail')
        .setValue(this.formGetValue('login').toLowerCase() + '@domain.com');
    }
  }
  isFormValid(): boolean {
    return (
      this.userForm.valid &&
      (!this.addForm || this.formGetValue('passwordGroup.password') !== '')
    );
  }

  protected copyUserToFormControl(): void {
    this.userForm.get('login').setValue(this.user.login);
    this.userForm.get('nom').setValue(this.user.nom);
    this.userForm.get('prenom').setValue(this.user.prenom);
    this.userForm.get('mail').setValue(this.user.mail);
    //a rajouter
    //this.userForm.get('employeNumero').setValue(this.user.employeNumero);
    //this.userForm.get('employeNiveau').setValue(this.user.employeNiveau);
    //this.userForm.get('dateEmbauche').setValue(this.user.dateEmbauche);
    //this.userForm.get('publicherId').setValue(this.user.publicherId);
    //this.userForm.get('active').setValue(this.user.active);
  }
  protected getUserFromFormControl(): UserLdap {
    return {
      id: this.userForm.get('id').value,
      login: this.userForm.get('login').value,
      nom: this.userForm.get('nom').value,
      prenom: this.userForm.get('prenom').value,
      nomComplet:
        this.userForm.get('nom').value +
        ' ' +
        this.userForm.get('prenom').value,
      mail: this.userForm.get('mail').value,
      employeNumero: 1,
      employeNiveau: 1,
      dateEmbauche: '2020-04-24',
      publicherId: 1,
      active: true,
      motDePasse: '',
      role: 'ROLE_USER',
    };
  }

  // passwordGroup: this.fb.group({
  //   password: [''],
  //   confirmPassword: ['']

  // }, {validators: passwordValidator})
}
