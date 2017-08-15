import {Component, OnInit, AfterViewInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Apollo, ApolloQueryObservable} from 'apollo-angular';
import {ApolloQueryResult} from 'apollo-client';
import {Subject} from 'rxjs/Subject';
import {DocumentNode} from 'graphql';
import {AgentsService} from '../agents.service';
import {MdSnackBar} from '@angular/material';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import {AgentsInterface} from '../graphql/schema';
import {IAgent} from '../agent.interface';
@Component({selector: 'agent-list', templateUrl: './agent-list.component.html', styleUrls: ['./agent-list.component.scss']})
export class AgentListComponent implements OnInit {
  public agents : IAgent[];
  public sampletext : string;
  public listAgentFilter : string;
  public agentControl = new FormControl();
  private nameFilter : Subject < string > = new Subject < string > ();

  // Inject Angular2Apollo service
  constructor(private _agentService : AgentsService, public snackBar : MdSnackBar) {}

  public ngOnInit() {
    this.fetchAgents();
  }
  public fetchAgents() {
    this
      ._agentService
      .get()
      .subscribe((data) => {
        this.agents = data;
      });
  }
  public deleteAgent(id : string) {
    this
      ._agentService
      .delete(id)
      .subscribe((response : any) => {
        this.openSnackBar(response.message, 'Delete');
        this.fetchAgents();
      }, console.error)
  }
  public openSnackBar(message : string, action : string) {
    this
      .snackBar
      .open(message, action, {duration: 4000});
  }
}
