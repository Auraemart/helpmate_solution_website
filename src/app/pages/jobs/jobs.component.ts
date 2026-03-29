import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobsService } from '../../core/services/jobs.service';
import { ContactService } from '../../core/services/contact.service';
import { Job } from '../../core/models/job.interface';
import { JobApplication } from '../../core/models/job-application.interface';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  standalone: false,
})
export class JobsComponent implements OnInit {
  jobs: Job[] = [];
  filteredJobs: Job[] = [];
  selectedJob: Job | null = null;
  showApplyModal = false;

  applyForm!: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = '';

  activeFilter = 'All';
  departments: string[] = [];

  constructor(
    private jobsService: JobsService,
    private contactService: ContactService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.jobs = this.jobsService.getAll();
    this.filteredJobs = this.jobs;

    const deptSet = new Set<string>(this.jobs.map(j => j.department));
    this.departments = ['All', ...Array.from(deptSet)];

    this.applyForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      experience: ['', Validators.required],
      currentCTC: [''],
      expectedCTC: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(20)]],
    });
  }

  filterByDepartment(dept: string): void {
    this.activeFilter = dept;
    if (dept === 'All') {
      this.filteredJobs = this.jobs;
    } else {
      this.filteredJobs = this.jobs.filter(j => j.department === dept);
    }
  }

  openApply(job: Job): void {
    this.selectedJob = job;
    this.showApplyModal = true;
    this.submitSuccess = false;
    this.submitError = '';
    this.applyForm.reset();
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.showApplyModal = false;
    this.selectedJob = null;
    document.body.style.overflow = '';
  }

  onSubmitApplication(): void {
    if (this.applyForm.invalid || !this.selectedJob) {
      this.applyForm.markAllAsTouched();
      return;
    }
    this.isSubmitting = true;
    this.submitError = '';

    const formValue = this.applyForm.value as {
      name: string;
      email: string;
      phone: string;
      experience: string;
      currentCTC: string;
      expectedCTC: string;
      message: string;
    };

    const payload: JobApplication = {
      ...formValue,
      jobId: this.selectedJob.id,
      jobTitle: this.selectedJob.title,
    };

    this.contactService.submitJobApplication(payload).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.applyForm.reset();
      },
      error: () => {
        this.isSubmitting = false;
        this.submitError = 'Something went wrong. Please try again or email directly.';
      },
    });
  }

  hasError(field: string, error: string): boolean {
    const control = this.applyForm.get(field);
    return !!(control?.touched && control?.hasError(error));
  }

  getDepartmentColor(department: string): string {
    const colorMap: Record<string, string> = {
      Technical: '#2563eb',
      'Human Resources': '#7c3aed',
      Sales: '#059669',
      Engineering: '#d97706',
      'Sales & Business': '#db2777',
    };
    return colorMap[department] ?? '#6b7280';
  }

  getDepartmentBg(department: string): string {
    const colorMap: Record<string, string> = {
      Technical: '#eff6ff',
      'Human Resources': '#f5f3ff',
      Sales: '#ecfdf5',
      Engineering: '#fffbeb',
      'Sales & Business': '#fce7f3',
    };
    return colorMap[department] ?? '#f3f4f6';
  }
}
