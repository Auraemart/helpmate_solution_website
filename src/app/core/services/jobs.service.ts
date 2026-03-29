import { Injectable } from '@angular/core';
import { Job } from '../models/job.interface';

@Injectable({ providedIn: 'root' })
export class JobsService {
  private jobs: Job[] = [
    {
      id: 1,
      title: 'CCTV Installation Technician',
      company: 'Helpmate CCTV',
      department: 'Technical',
      location: 'Ghaziabad / NCR',
      experience: '1–3 Years',
      type: 'Full Time',
      salary: '₹15,000 – ₹25,000/month',
      skills: ['CCTV Installation', 'IP Cameras', 'DVR/NVR Setup', 'Network Cabling', 'Troubleshooting'],
      description: 'We are looking for a skilled CCTV technician to install, configure, and maintain surveillance systems for residential and commercial clients across the NCR region.',
      responsibilities: [
        'Install CCTV cameras, DVR/NVR, and related equipment',
        'Configure IP-based surveillance systems',
        'Perform periodic maintenance and troubleshooting',
        'Coordinate with clients for site surveys and installations',
        'Maintain service logs and reports',
      ],
      applyEmail: 'helpmatecctv@gmail.com',
      postedDate: '2026-03-01',
      isActive: true,
    },
    {
      id: 2,
      title: 'HR Recruiter / Talent Acquisition Executive',
      company: 'Helpmate Solution',
      department: 'Human Resources',
      location: 'Sahibabad, Ghaziabad',
      experience: '1–3 Years',
      type: 'Full Time',
      salary: '₹18,000 – ₹30,000/month',
      skills: ['Sourcing', 'LinkedIn Recruiter', 'Interview Coordination', 'MS Office', 'Communication'],
      description: 'Join our growing HR team and help connect talented professionals with leading companies. You will manage end-to-end recruitment for our clients across multiple sectors.',
      responsibilities: [
        'Source candidates via job portals, LinkedIn, and referrals',
        'Screen resumes and conduct initial telephonic interviews',
        'Coordinate interview rounds with client companies',
        'Manage candidate pipeline and maintain recruitment database',
        'Achieve monthly placement targets',
      ],
      applyEmail: 'helpmatehrsolution@gmail.com',
      postedDate: '2026-03-05',
      isActive: true,
    },
    {
      id: 3,
      title: 'Sales Executive – Property & Real Estate',
      company: 'Helpmate Realty',
      department: 'Sales',
      location: 'Ghaziabad / NCR',
      experience: '1–4 Years',
      type: 'Full Time',
      salary: '₹20,000 – ₹35,000/month + Incentives',
      skills: ['Real Estate Sales', 'Client Handling', 'Lead Generation', 'Negotiation', 'Local Market Knowledge'],
      description: 'We are seeking a dynamic sales executive to join Helpmate Realty. You will assist clients in buying, selling, and renting residential and commercial properties across the NCR.',
      responsibilities: [
        'Generate and follow up on property enquiries and leads',
        'Conduct property site visits with potential buyers/renters',
        'Negotiate deals between buyers and sellers',
        'Maintain knowledge of local property market trends',
        'Ensure smooth documentation and transaction process',
      ],
      applyEmail: 'helpmaterealty@gmail.com',
      postedDate: '2026-03-10',
      isActive: true,
    },
    {
      id: 4,
      title: 'Full Stack Developer (Angular + Node.js)',
      company: 'Helpmate Software',
      department: 'Engineering',
      location: 'Remote / Ghaziabad',
      experience: '2–5 Years',
      type: 'Full Time',
      salary: '₹35,000 – ₹60,000/month',
      skills: ['Angular', 'Node.js', 'TypeScript', 'MongoDB', 'REST APIs', 'Git'],
      description: 'We are looking for a passionate full-stack developer to build and maintain web and mobile applications for our diverse portfolio of clients.',
      responsibilities: [
        'Design and develop scalable web applications using Angular and Node.js',
        'Build RESTful APIs and integrate third-party services',
        'Write clean, maintainable TypeScript code',
        'Collaborate with UI/UX designers and backend teams',
        'Deploy and maintain applications on cloud platforms',
      ],
      applyEmail: 'helpmatesoftware@gmail.com',
      postedDate: '2026-03-15',
      isActive: true,
    },
    {
      id: 5,
      title: 'Business Development Executive',
      company: 'Helpmate Solution',
      department: 'Sales & Business',
      location: 'Sahibabad, Ghaziabad',
      experience: '0–2 Years',
      type: 'Full Time',
      salary: '₹15,000 – ₹25,000/month + Incentives',
      skills: ['Lead Generation', 'Cold Calling', 'Client Relationship', 'CRM Tools', 'Presentation Skills'],
      description: 'Join our business development team and help expand Helpmate Solution\'s reach across the NCR. This is a great opportunity for a motivated individual to grow in a multi-service environment.',
      responsibilities: [
        'Identify and develop new business opportunities',
        'Build relationships with potential clients across all service verticals',
        'Prepare and deliver sales presentations',
        'Achieve monthly revenue targets',
        'Coordinate with service teams for client onboarding',
      ],
      applyEmail: 'helpmatehrsolution@gmail.com',
      postedDate: '2026-03-20',
      isActive: true,
    },
  ];

  getAll(): Job[] {
    return this.jobs.filter(j => j.isActive);
  }

  getById(id: number): Job | undefined {
    return this.jobs.find(j => j.id === id);
  }

  getByDepartment(department: string): Job[] {
    return this.jobs.filter(j => j.department === department && j.isActive);
  }
}
