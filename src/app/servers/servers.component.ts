import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers: {id: number, name: string, status: string}[] = [];
  selectedServer: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
        private router: Router,
        private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onServerClicked = (server: {id: number, name: string, status: string}) => {
    this.selectedServer = server;
  }

  onReload = () => {
    this.router.navigate(['servers'], {relativeTo: this.activatedRoute});
  }
}
