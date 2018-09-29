import { Component, OnInit, Input } from '@angular/core';

import { ServersService } from '../servers.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  @Input() server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.setServer(this.activatedRoute.snapshot.params);
    this.activatedRoute.params.subscribe((params: Params) => {
      this.setServer(params);
    });
  }

  setServer = (params: Params) => {
    const id = +params['id'];
    this.server = this.serversService.getServer(id);
  }

  onEdit = () => {
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute, queryParamsHandling: 'preserve'});
  }
}
