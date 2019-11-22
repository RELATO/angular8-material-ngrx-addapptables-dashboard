import { NgModule } from '@angular/core';
import { DragAndDropRoutingModule } from './drag-and-drop-routing.module';
import { DragAndDropComponent } from './drag-and-drop.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardModule } from '@addapptables/card';
import { MatIconModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SortingComponent } from './components/sorting/sorting.component';
import { DragAnDropSortingComponent } from './components/drag-an-drop-sorting/drag-an-drop-sorting.component';

@NgModule({
  imports: [
    SharedModule,
    DragAndDropRoutingModule,
    CardModule,
    MatIconModule,
    DragDropModule
  ],
  declarations: [DragAndDropComponent, SortingComponent, DragAnDropSortingComponent]
})
export class DragAndDropModule { }
