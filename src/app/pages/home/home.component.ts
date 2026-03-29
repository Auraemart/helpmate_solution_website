import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesDataService } from '../../core/services/services-data.service';
import { ContactService } from '../../core/services/contact.service';
import { ServiceItem } from '../../core/models/service-item.interface';
import { TeamMember } from '../../core/models/team-member.interface';
import { Stat } from '../../core/models/stat.interface';
import { ContactForm } from '../../core/models/contact-form.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false,
})
export class HomeComponent implements OnInit {
  services: ServiceItem[] = [];
  teamMembers: TeamMember[] = [];
  stats: Stat[] = [];
  contactForm!: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = '';

  serviceOptions = [
    'CCTV Surveillance',
    'Recruitment Solutions',
    'Property Dealing',
    'Software Development',
    'General Enquiry',
  ];

  constructor(
    private servicesDataService: ServicesDataService,
    private contactService: ContactService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.services = this.servicesDataService.getServices();
    this.teamMembers = this.servicesDataService.getTeamMembers();
    this.stats = this.servicesDataService.getStats();

    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      service: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmitContact(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.isSubmitting = true;
    this.submitError = '';
    const payload: ContactForm = this.contactForm.value as ContactForm;

    this.contactService.submitContactForm(payload).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.contactForm.reset();
      },
      error: () => {
        this.isSubmitting = false;
        this.submitError = 'Something went wrong. Please try again.';
      },
    });
  }

  hasError(field: string, error: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control?.touched && control?.hasError(error));
  }
}
