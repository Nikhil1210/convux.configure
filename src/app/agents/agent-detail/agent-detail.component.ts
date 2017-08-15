import {Component, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Apollo, ApolloQueryObservable} from 'apollo-angular';
import {ApolloQueryResult} from 'apollo-client';
import {Subject} from 'rxjs/Subject';
import {DocumentNode} from 'graphql';
import {client} from '../graphql.client';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import {AgentByIdInterface} from '../graphql/schema';
import {GetAgentDetailQuery} from '../graphql/queries';
import {AgentsService} from "../agents.service";

@Component({templateUrl: './agent-detail.component.html', styleUrls: ['./agent-detail.component.scss']})

export class agentDetailComponent implements OnInit,
OnDestroy {
  public pageTitle : string = 'Agent detail:';
  public agent : any;
  public errorMessage : string;
  private apollo : Apollo;
  public agentControl = new FormControl();
  // Observable variable of the graphql query
  public nameFilter : Subject < string > = new Subject < string > ();
  private sub : Subscription;
  public id;
  // Inject Angular2Apollo service tslint:disable-next-line:max-line-length
  constructor(private _agentService : AgentsService, apollo : Apollo, private route : ActivatedRoute) {
    this.apollo = apollo;
  }

  public ngOnInit() : void {
    this.sub = this
      .route
      .params
      .subscribe(params => {
        this.id = params['id'];
      });
    this
      ._agentService
      .getDetails(this.id)
      .subscribe((data) => {
        this.agent = data;
      });
    // this.apollo.watchQuery < AgentByIdInterface > ({   query:
    // GetAgentDetailQuery,   variables: {     "id": this.id   }
    // }).subscribe(({data}) => {   this.agent = data.agent; });
  }
  ngOnDestroy() {
    this
      .sub
      .unsubscribe();
  }
}
