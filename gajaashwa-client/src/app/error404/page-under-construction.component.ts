import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-under-construction',
  standalone: true,
  templateUrl: './page-under-construction.component.html',
  styleUrl: './page-under-construction.component.scss'
})
export class PageUnderConstructionComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }
}
