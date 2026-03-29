import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-banner',
  templateUrl: './page-banner.component.html',
  styleUrls: ['./page-banner.component.scss'],
  standalone: false,
})
export class PageBannerComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() breadcrumb = '';
}
