import { Component, OnInit } from '@angular/core';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  // tslint:disable-next-line:member-ordering
  dish: Dish;

  constructor(private dishservice: DishService,
  private route: ActivatedRoute,
  private location: Location ) { }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    let id = +this.route.snapshot.params['id'];
    this.dish = this.dishservice.getDish(id);
  }

    goBack(): void{
      this.location.back();
    }
}
