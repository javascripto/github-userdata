import { NgModule } from '@angular/core';

import {
  MatIconModule,
  MatTabsModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatChipsModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatGridListModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
} from '@angular/material';

@NgModule({
  exports: [
    MatIconModule,
    MatTabsModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatChipsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
  ]
})
export class MaterialModule { }
