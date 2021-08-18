import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {LayoutModule} from '@angular/cdk/layout';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatToolbarModule,
    LayoutModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatDividerModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatToolbarModule,
    LayoutModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    NgbModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatDividerModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }
