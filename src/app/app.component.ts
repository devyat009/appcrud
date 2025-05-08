import { Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-crud';


  constructor(private renderer: Renderer2) {}

  toggleTheme() {
    const currentTheme = document.documentElement.classList.contains('dark-theme');

    if (currentTheme) {
      this.setLightTheme();
    } else {
      this.setDarkTheme();
    }
  }

  // Apply light theme
  setLightTheme() {
    this.renderer.removeClass(document.documentElement, 'dark-theme');
    this.renderer.addClass(document.documentElement, 'light-theme');
    this.changeStylesheet('light-theme');
  }

  // Apply dark theme
  setDarkTheme() {
    this.renderer.removeClass(document.documentElement, 'light-theme');
    this.renderer.addClass(document.documentElement, 'dark-theme');
    this.changeStylesheet('dark-theme');
  }

  // Change stylesheet dynamically
  changeStylesheet(theme: string) {
    const themeLink = document.getElementById('theme-stylesheet') as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = `${theme}.css`;
    }
  }
}
