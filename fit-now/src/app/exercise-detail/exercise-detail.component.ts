import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Exercise } from '../exercise';


@Component({
  selector: 'app-exercise-detail',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './exercise-detail.component.html',
  styleUrl: './exercise-detail.component.css'
})
export class ExerciseDetailComponent {

  @Input() exercise!:Exercise;

}
