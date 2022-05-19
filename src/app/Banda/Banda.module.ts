import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandaListComponent } from './Banda-list/Banda-list.component';
import { BandaDetailComponent } from './Banda-detail/Banda-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BandaListComponent, BandaDetailComponent],
  exports: [BandaListComponent]
})
export class BandaModule { }
