import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'; 
import { MatProgressBarModule } from '@angular/material/progress-bar'; 
import { MatSlideToggleModule } from "@angular/material/slide-toggle" 
import { AppComponent } from './app.component';
import { PasswordComponent } from './password/password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon"


@NgModule({
  declarations: [AppComponent, PasswordComponent],
  imports: [BrowserModule, 
    FormsModule, 
    MatInputModule, 
    MatProgressBarModule, 
    BrowserAnimationsModule, 
    MatCommonModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule ], 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}




