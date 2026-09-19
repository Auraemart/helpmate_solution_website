import { Component } from '@angular/core';

@Component({
  selector: 'app-recruitment-page',
  templateUrl: './recruitment-page.component.html',
  styleUrls: ['./recruitment-page.component.scss'],
  standalone: false,
})
export class RecruitmentPageComponent {
  services = [
    { title: 'Permanent hiring', text: 'Find skilled candidates who are ready to grow with your organisation.' },
    { title: 'Contract staffing', text: 'Build flexible teams for changing workloads and business priorities.' },
    { title: 'Executive search', text: 'Reach the leadership talent that can move your business forward.' },
  ];

  process = [
    { number: '01', title: 'Understand your role', text: 'We learn about your business, role requirements, and ideal candidate profile.' },
    { number: '02', title: 'Source & screen', text: 'Our team identifies relevant candidates and carries out an initial screening.' },
    { number: '03', title: 'Coordinate interviews', text: 'We keep the hiring process moving with clear communication at every stage.' },
    { number: '04', title: 'Support your hire', text: 'We stay involved through selection, offer, and onboarding support.' },
  ];
}
