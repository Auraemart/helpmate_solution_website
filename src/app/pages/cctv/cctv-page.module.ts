import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CctvPageComponent } from './cctv-page.component';

const routes: Routes = [{ path: '', component: CctvPageComponent }];

@NgModule({
  declarations: [CctvPageComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class CctvPageModule {}
