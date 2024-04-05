import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input'; 
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
imports: [RouterOutlet, RouterLink, MatButtonModule, MatIconModule , RouterModule,MatInputModule,CommonModule],  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'RecipeBookV4';
}
