import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { VehicleInsurancePageComponent } from './vehicle-insurance-page.component';

const routes: Routes = [{ path: '', component: VehicleInsurancePageComponent }];

@NgModule({
  declarations: [VehicleInsurancePageComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class VehicleInsurancePageModule {}
