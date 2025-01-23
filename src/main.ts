import { bootstrapApplication } from '@angular/platform-browser';import { appConfig } from './app/app.config';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SignupComponent } from './app/signup/signup.component';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [provideAnimations()],
}).catch(err => console.error(err));

