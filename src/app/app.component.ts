import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';


@Component({
    standalone: true,
    selector: 'app-root',
    template: `
  <main>
  <header class="brand-name">
    <img src="/assets/logo.svg" alt="logo" arial-hidden="true" class="brand-logo">
  </header>
  <section class="content"></section>
  <router-outlet></router-outlet>
  </main>
  `,
    styleUrls: ['./app.component.css'],
    imports: [HomeComponent, RouterModule]
})
export class AppComponent {
  title = 'homes';
}
