import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Apollo} from 'apollo-angular';

import {GetAgentsQuery} from '../graphql/queries';
import {AddAgentMutation} from '../graphql/mutations';
import {AgentsService} from "../agents.service";
import {IAgent} from "../agent.interface";
@Component({selector: 'new-agent', templateUrl: './new-agent.component.html', styleUrls: ['./new-agent.component.scss']})
export class NewAgentComponent {
  form : FormGroup;

  constructor(formBuilder : FormBuilder, private router : Router, private apollo : Apollo, private agentService : AgentsService) {
    this.form = formBuilder.group({
      title: [
        '',
        [Validators.required]
      ],
      content: ['']
    });
    this.apollo = apollo;
  }
  public save() {
    if (!this.form.valid)
      return;
    var agent : IAgent = {
      agentId: 33,
      title: this.form.value.title,
      content: this.form.value.content
    };
    this
      .agentService
      .post(agent)
      .subscribe((response) => {
        console.log('got a new agent', response);
        this
          .router
          .navigate(['/agents']);
      }, console.error);
    // this   .apollo   .mutate({     mutation: AddAgentMutation,     variables: {
    // "data": {         "title": this.form.value.title,         "content":
    // this.form.value.content       }     },     refetchQueries: [       { query:
    // GetAgentsQuery       }     ]   })   .take(1)   .subscribe({     next:
    // ({data}) => {       console.log('got a new agent', data);       // get new
    // data       this         .router         .navigate(['/agents']);     }, error:
    // (errors) => {       console.log('there was an error sending the query',
    // errors);     }   });
  }
}
