import { Component, OnInit } from '@angular/core';
import {CatsService} from '../../services/cats.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../store/app.reducer';
import * as UI from '../../../store/ui.actions';

interface Cat {
  image: string;
  text: string;
}
@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {
cat: Cat = {
  image: 'none',
  text: 'none'
};

  constructor(private catsService: CatsService, private store: Store<fromRoot.State>) { }

  ngOnInit(): void {

    this.getCat();
  }

  getCat(): void{
    this.store.dispatch(new UI.StartLoading());
    this.catsService.getCatImage().subscribe(result => {
      this.cat.image = result[0].url;
      this.store.dispatch(new UI.StopLoading());
       console.log(result);

    });
    this.catsService.getCatText().subscribe(result => {
      this.cat.text = result.fact;
      this.store.dispatch(new UI.StopLoading());
      console.log(result);
    });

  }

}
