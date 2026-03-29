import { Component, HostListener, OnInit } from '@angular/core';
import { NavItem } from '../../../core/models/nav-item.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;

  navItems: NavItem[] = [
    { label: 'Home', route: '/' },
    { label: 'About Us', route: '/about' },
    { label: 'Services', route: '/services' },
    { label: 'Jobs', route: '/jobs' },
  ];

  ngOnInit(): void {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
