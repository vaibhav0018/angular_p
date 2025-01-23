import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-congrats-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './congrats-dialog.component.html',
  styleUrl: './congrats-dialog.component.css'
})
export class CongratsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { username: string }) {}
}
