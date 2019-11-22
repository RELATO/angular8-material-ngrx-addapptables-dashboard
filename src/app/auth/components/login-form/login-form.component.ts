import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {

  // reactive form
  form: FormGroup;

  /**
  * Constructor
  */
  constructor(_fb: FormBuilder, private readonly _router: Router) {
    // build reactive forms
    this.form = _fb.group({
      email: ['dev@addapptables.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required]],
      remember: [null]
    });
  }

  /**
  * login
  */
  login() {
    // redirect to dashboard
    this._router.navigate(['/admin/dashboard']);
  }
}
