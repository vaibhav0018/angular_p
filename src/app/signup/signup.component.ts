import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatOption } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { CongratsDialogComponent } from '../congrats-dialog/congrats-dialog.component';
import { MatDialog } from '@angular/material/dialog'; // Import MatDialog (service)
import { MatDialogModule } from '@angular/material/dialog'; // Import MatDialogModule

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatOption,
    MatSelectModule,
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  gender: string = '';
  hidePassword = true;
  hideConfirmPassword = true;

  constructor(private dialog: MatDialog) {} // Inject MatDialog service here

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  toggleConfirmPasswordVisibility(): void {
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }

  onSignUpClick(): void {
    if (!this.dialog) {
      console.error('MatDialog service is not available.');
      return;
    }

    // Validate all fields
    if (!this.fullName.trim() || !this.email.trim() || !this.password.trim() || !this.confirmPassword.trim() || !this.gender.trim()) {
      alert('Please fill out all fields!');
      return;
    }

    // Validate password match
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // All validations passed - Show Congratulations Dialog
    this.dialog.open(CongratsDialogComponent, {
      width: '400px',
      data: { username: this.fullName }, // Pass the username to the dialog
    });
  }
}
