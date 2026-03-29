import { Component, OnInit } from '@angular/core';
import { ServicesDataService } from '../../core/services/services-data.service';
import { ServiceItem } from '../../core/models/service-item.interface';

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss'],
  standalone: false,
})
export class ServicesPageComponent implements OnInit {
  services: ServiceItem[] = [];

  processSteps: ProcessStep[] = [
    { step: 1, title: 'Initial Consultation', description: 'We understand your requirements through a detailed discussion.' },
    { step: 2, title: 'Custom Proposal', description: 'We prepare a tailored solution and transparent pricing plan.' },
    { step: 3, title: 'Execution', description: 'Our expert team delivers the service with precision and care.' },
    { step: 4, title: 'Support & Follow-up', description: 'We ensure ongoing support and satisfaction after delivery.' },
  ];

  constructor(private servicesDataService: ServicesDataService) {}

  ngOnInit(): void {
    this.services = this.servicesDataService.getServices();
  }
}
