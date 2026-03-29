import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { JobsComponent } from './jobs.component';

const routes: Routes = [{ path: '', component: JobsComponent }];

@NgModule({
  declarations: [JobsComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class JobsModule {}
