import { Component } from '@angular/core';

@Component({
  selector: 'app-cctv-page',
  templateUrl: './cctv-page.component.html',
  styleUrls: ['./cctv-page.component.scss'],
  standalone: false,
})
export class CctvPageComponent {
  solutions = [
    { title: 'Home Security', text: 'Keep an eye on entrances, family spaces, parking areas, and deliveries from wherever you are.' },
    { title: 'Office & Retail', text: 'Protect people, inventory, and everyday operations with dependable video coverage.' },
    { title: 'Factory & Warehouse', text: 'Monitor larger premises, perimeters, and critical work areas with a tailored camera layout.' },
  ];

  process = [
    { number: '01', title: 'Site assessment', text: 'We understand your space, risks, and coverage priorities.' },
    { number: '02', title: 'Right-fit design', text: 'We recommend the cameras, recording, and access setup that suits you.' },
    { number: '03', title: 'Neat installation', text: 'Our technicians install, configure, and test every part of the system.' },
    { number: '04', title: 'Ongoing support', text: 'We remain available for guidance, maintenance, and future upgrades.' },
  ];
}
