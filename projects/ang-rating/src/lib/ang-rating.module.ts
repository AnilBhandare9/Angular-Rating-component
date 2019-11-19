import { NgModule } from '@angular/core';
import { AngRatingComponent } from './ang-rating.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [AngRatingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule,
  ],
  exports: [AngRatingComponent]
})
export class AngRatingModule { }
