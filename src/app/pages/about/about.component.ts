import { Component, OnInit } from '@angular/core';
import { ServicesDataService } from '../../core/services/services-data.service';
import { TeamMember } from '../../core/models/team-member.interface';
import { Stat } from '../../core/models/stat.interface';

interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

interface MilestoneItem {
  year: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: false,
})
export class AboutComponent implements OnInit {
  teamMembers: TeamMember[] = [];
  stats: Stat[] = [];

  values: ValueItem[] = [
    {
      icon: 'integrity',
      title: 'Integrity',
      description: 'We operate with honesty and transparency in every interaction, building long-term trust with clients and partners.',
    },
    {
      icon: 'excellence',
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality across all our service verticals — no compromise.',
    },
    {
      icon: 'innovation',
      title: 'Innovation',
      description: 'We embrace technology and modern approaches to solve business challenges creatively and efficiently.',
    },
    {
      icon: 'client',
      title: 'Client First',
      description: 'Every decision we make is driven by what is best for our clients. Your success is our success.',
    },
    {
      icon: 'teamwork',
      title: 'Teamwork',
      description: 'Our diverse, skilled team collaborates seamlessly to deliver unified, consistent service experiences.',
    },
    {
      icon: 'growth',
      title: 'Growth',
      description: 'We believe in the continuous growth of our clients, our team, and our organization.',
    },
  ];

  milestones: MilestoneItem[] = [
    {
      year: '2019',
      title: 'Founded',
      description: 'Helpmate Solution was founded by Akki Mahajan in Sahibabad, Ghaziabad, starting with HR and recruitment services.',
    },
    {
      year: '2020',
      title: 'CCTV Division Launched',
      description: 'Expanded into security solutions with the launch of Helpmate CCTV, catering to homes, offices, and commercial spaces.',
    },
    {
      year: '2021',
      title: 'Property Division Added',
      description: 'Helpmate Realty was introduced to assist NCR clients in buying, selling, and renting residential and commercial properties.',
    },
    {
      year: '2023',
      title: 'Software Division',
      description: 'Helpmate Software was launched to provide custom web, mobile, and enterprise software solutions to businesses.',
    },
    {
      year: '2024',
      title: '500+ Clients Milestone',
      description: 'Crossed the milestone of 500+ satisfied clients and 1000+ successful job placements across the NCR region.',
    },
    {
      year: '2026',
      title: 'Growing Strong',
      description: 'Continuing to expand our service portfolio and geographic reach, with new partnerships and innovations underway.',
    },
  ];

  constructor(private servicesDataService: ServicesDataService) {}

  ngOnInit(): void {
    this.teamMembers = this.servicesDataService.getTeamMembers();
    this.stats = this.servicesDataService.getStats();
  }
}
