import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  @Input() user: {id: number, name: string};
  private routeSubscription: Subscription;

  constructor(private userService: UserService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    const name = this.activatedRoute.snapshot.params['name'];
    this.user = {id: id, name: name};

    this.routeSubscription = this.activatedRoute.params
      .subscribe(
        (params: Params) => {
          this.user = {
            id: params['id'],
            name: params['name']
          };
        }
      );
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
