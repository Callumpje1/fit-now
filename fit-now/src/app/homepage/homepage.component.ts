import { Component } from '@angular/core';
import { Exercise } from '../exercise';
import { CommonModule } from '@angular/common';
import { ExerciseDetailComponent } from '../exercise-detail/exercise-detail.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, ExerciseDetailComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})

export class HomepageComponent {

  selectedExercise: Exercise | undefined;

  exerciseList: Exercise[] = [
    {
      name: 'Push-ups',
      description: 'Perform push-ups to strengthen your upper body.',
      duration: 5.00,
      type: 'Strength',
      level: 'Beginner',
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Squats',
      description: 'Perform squats to strengthen your lower body.',
      duration: 1.00,
      type: 'Strength',
      level: 'Intermediate',
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Plank',
      description: 'Hold a plank position to strengthen your core.',
      duration: 3.00,
      type: 'Core',
      level: 'Advanced',
      image: 'https://via.placeholder.com/300'
    }
  ];

  selectExercise(exercise: Exercise){
    this.selectedExercise = exercise
  }

}
