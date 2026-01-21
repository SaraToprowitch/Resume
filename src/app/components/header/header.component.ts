import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public isActive: boolean = false;


  public toggleMenue(): void {
    this.isActive = !this.isActive
  }
}
