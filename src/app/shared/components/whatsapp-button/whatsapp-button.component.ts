import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  templateUrl: './whatsapp-button.component.html',
  styleUrls: ['./whatsapp-button.component.scss'],
  standalone: false,
})
export class WhatsappButtonComponent {
  readonly whatsappNumber = '918586021659';
  readonly message = 'Hello! I would like to know more about your services.';

  get whatsappUrl(): string {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.message)}`;
  }
}
