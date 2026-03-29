import { Injectable } from '@angular/core';
import { ContactForm, ContactSubmitResponse } from '../models/contact-form.interface';
import { JobApplication } from '../models/job-application.interface';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ContactService {
  submitContactForm(form: ContactForm): Observable<ContactSubmitResponse> {
    // In production, replace with HttpClient POST to your backend
    console.log('Contact form submitted:', form);
    return of({ success: true, message: 'Thank you! We will get back to you within 24 hours.' }).pipe(delay(1000));
  }

  submitJobApplication(application: JobApplication): Observable<ContactSubmitResponse> {
    // In production, replace with HttpClient POST to your backend
    console.log('Job application submitted:', application);
    return of({ success: true, message: 'Application submitted successfully! Our HR team will contact you soon.' }).pipe(delay(1000));
  }
}
