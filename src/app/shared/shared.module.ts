import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';
import { PageBannerComponent } from './components/page-banner/page-banner.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    WhatsappButtonComponent,
    PageBannerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    WhatsappButtonComponent,
    PageBannerComponent,
  ],
})
export class SharedModule {}
