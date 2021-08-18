import { Component, OnInit } from '@angular/core';
import {CatsService} from '../../services/cats.service';
import {Observable} from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../../store/app.reducer';
import * as UI from '../../../store/ui.actions';
import {map} from 'rxjs/operators';

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
isLoading$: Observable<boolean>;
  constructor(private catsService: CatsService, private store: Store<fromRoot.State>) { }

  ngOnInit(): void {
    this.isLoading$ = this.store.pipe(select(fromRoot.getIsLoading));
    this.getCat();
  }

  getCat(): void{
    this.store.dispatch(new UI.StartLoading());
    this.catsService.getCatImage().subscribe(result => {
      this.cat.image = result[0].url;
      this.store.dispatch(new UI.StopLoading());
      // console.log(this.cat);

    });
    this.catsService.getCatText().subscribe(result => {
      this.cat.text = result.fact;
      this.store.dispatch(new UI.StopLoading());
      // console.log(this.cat);
    });

  }

}
