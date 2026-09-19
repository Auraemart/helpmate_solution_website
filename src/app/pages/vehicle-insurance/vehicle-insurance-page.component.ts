import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicle-insurance-page',
  templateUrl: './vehicle-insurance-page.component.html',
  styleUrls: ['./vehicle-insurance-page.component.scss'],
  standalone: false,
})
export class VehicleInsurancePageComponent {
  coverageOptions = [
    { title: 'Comprehensive cover', text: 'Explore protection for your vehicle that can include accidental damage, theft, and other covered events.' },
    { title: 'Third-party cover', text: 'Get help understanding the required liability protection for damage or injury involving others.' },
    { title: 'Renewals & add-ons', text: 'Review renewal choices, optional benefits, and policy details before you decide.' },
  ];

  vehicleTypes = [
    { image: 'images/img-11.jpeg', title: 'Two-wheelers', text: 'Insurance guidance for bikes and scooters.' },
    { image: 'images/img-12.jpeg', title: 'Private cars', text: 'Compare cover options for your car.' },
    { image: 'images/img-13.jpeg', title: 'Commercial vehicles', text: 'Support for vehicles used in business.' },
  ];

  steps = [
    { number: '01', title: 'Share your vehicle details', text: 'Tell us the vehicle type, existing policy status, and what you need help with.' },
    { number: '02', title: 'Review suitable options', text: 'We help make cover types, policy terms, and add-ons easier to understand.' },
    { number: '03', title: 'Choose with confidence', text: 'Select the policy that best fits your vehicle and requirements.' },
    { number: '04', title: 'Get ongoing guidance', text: 'Reach out for renewal reminders and assistance with policy-related questions.' },
  ];
}
