import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { RecruitmentPageComponent } from './recruitment-page.component';

const routes: Routes = [{ path: '', component: RecruitmentPageComponent }];

@NgModule({
  declarations: [RecruitmentPageComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class RecruitmentPageModule {}
