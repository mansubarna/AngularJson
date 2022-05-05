import {
  Component
} from '@angular/core';
import {People} from './people';
import data from './data/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularjson';
  people:People[]=data;
}
