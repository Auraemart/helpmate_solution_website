import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ServicesPageComponent } from './services-page.component';

const routes: Routes = [{ path: '', component: ServicesPageComponent }];

@NgModule({
  declarations: [ServicesPageComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class ServicesPageModule {}
