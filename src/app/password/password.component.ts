import { Component } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {
  password: string = '';
  
  calculatePasswordStrength(): number {
    let strength = 0;
    if(this.password.length < 8) strength = 3;
    if (this.password.length >= 8 && (/^(?=.*[a-zA-Z])/.test(this.password) || /^(?=.*[^\w\s])/.test(this.password) || /^(?=.*[0-9])/.test(this.password) )) strength = 1;
    if (/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}/.test(this.password)) strength = 2;
    if (/^(?=.*[0-9])(?=.*[^\w\s]).{8,}/.test(this.password)) strength = 2;
    if (/^(?=.*[a-zA-Z])(?=.*[^\w\s]).{8,}/.test(this.password)) strength = 2;
    if (/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^\w\s]).{8,}/.test(this.password)) strength = 3;
    return strength * 33.3;
  }

  passwordStrengthColor(): string {
    if (this.password.length === 0) {
      return 'primary';
    } else if (this.password.length < 8 || this.calculatePasswordStrength() === 33.3) {
      return 'warn';
    } else if (this.calculatePasswordStrength() === 66.6) {
      return 'accent';
    } else {
      return 'success';
    }
  }

  passwordStrengthLabel(): string {
    if (this.password.length === 0) {
      return 'Enter your password';
    } else if (this.password.length < 8) {
      return 'Easy';
    } else if (this.calculatePasswordStrength() === 33.3) {
      return 'Easy';
    } else if (this.calculatePasswordStrength() === 66.6) {
      return 'Medium';
    } else {
      return 'Strong';
    }
  }

  onInputChange(): void {
    console.log(this.calculatePasswordStrength());
    console.log(this.passwordStrengthColor());
    console.log(this.passwordStrengthLabel());
  }
}
