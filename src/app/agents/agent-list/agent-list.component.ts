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
  // Observable with GraphQL result
  public agents : ApolloQueryObservable < AgentsInterface >;
  public agents2 : IAgent[];
  public sampletext : string;
  public listAgentFilter : string;
  public agentControl = new FormControl();
  private nameFilter : Subject < string > = new Subject < string > ();

  // Inject Angular2Apollo service
  constructor(private _agentService : AgentsService, public snackBar : MdSnackBar) {}

  public ngOnInit() {
    console.log('calling getAgents service method');
    this
      ._agentService
      .get()
      .subscribe((data) => {
        console.log(data);
        this.agents2 = data;
      });
    this
      ._agentService
      .gettext()
      .subscribe((data) => {
        // alert(data);
        this.sampletext = data.message;
      });
    // this.agents = this   ._agentService   .get(); // Add debounce time to wait
    // 300 ms for a new change instead of keep hitting the // server this
    // .agentControl   .valueChanges   .debounceTime(300)   .subscribe(name => {
    // this       .nameFilter       .next(name);   });
  }
  public deleteAgent(id : string) {
    this
      ._agentService
      .delete(id)
      .then((response) => {
        this.openSnackBar(response.message, 'Delete');
        this
          .agents
          .refetch();
      })
      .catch((error) => {
        this.openSnackBar(error.message, 'Delete');

      })
  }
  public openSnackBar(message : string, action : string) {
    this
      .snackBar
      .open(message, action, {duration: 4000});
  }
}
