import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { CdkDropList, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Exercise } from 'src/app/models/exercise';
import { Training } from 'src/app/models/training';

@Component({
  selector: 'app-dragable',
  templateUrl: './dragable.component.html',
  styleUrls: ['./dragable.component.scss']
})
export class DragableComponent implements OnInit {

  @ViewChild('exercisesList', { static: true }) exer: CdkDropList;
  @ViewChild('trainingsList', { static: true }) train: CdkDropList;

  @Input() exercises: Exercise[];
  @Input() trainings: Training[];
  @Input() bundles: any;

  selectedName: string;
  selectedTraining: Exercise[]; // Exercise[];
  copy: Exercise[] = []; // Exercise[] = [];

  ngOnInit() {
    console.log(this.exercises);
    console.log(this.trainings);
    console.log(this.bundles);

    console.log(this.exer.connectedTo.valueOf());
    this.select(1);
  }

  drop(event: CdkDragDrop<{}[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      console.log(this.exercises);
    }
    console.log(this.trainings);
  }

  select(itemId: number) {
    const selectedTraining = this.trainings.filter((training) => training.id === itemId);
    this.selectedTraining = selectedTraining[0].exercises;
    this.selectedName = selectedTraining[0].name;
  }

  copyObject(item: Exercise) {
    const c = new Exercise(item.id, item.name, item.bodyPart);
    this.copy.push(c);
    console.log(c);
  }

  deleteObject(item: Exercise) { // Exercise
    this.exercises = this.exercises.filter((obj) => obj !== item);
  }

}
