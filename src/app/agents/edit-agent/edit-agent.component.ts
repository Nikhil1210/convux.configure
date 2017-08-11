import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Apollo} from 'apollo-angular';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';

import {AgentByIdInterface} from '../graphql/schema';
import {GetAgentDetailQuery} from '../graphql/queries';
import {UpdateAgentMutation} from '../graphql/mutations';

@Component({selector: 'edit-agent', templateUrl: './edit-agent.component.html', styleUrls: ['./edit-agent.component.scss']})
export class EditAgentComponent {
  form : FormGroup;
  private sub : Subscription;
  public id;
  public agent : any;

  constructor(formBuilder : FormBuilder, private route : ActivatedRoute, private router : Router, private apollo : Apollo) {
    this.form = formBuilder.group({
      title: [
        '',
        [Validators.required]
      ],
      content: ['']
    });
    this.apollo = apollo;
  }

  public ngOnInit() : void {
    const that = this;
    this.sub = this
      .route
      .params
      .subscribe(params => {
        this.id = params['id'];
      });
    this.apollo.watchQuery < AgentByIdInterface > ({
      query: GetAgentDetailQuery,
      variables: {
        "id": this.id
      }
    }).subscribe(({data}) => {
      that.agent = data.agent;
      this
        .form
        .setValue({title: data.agent.title, content: data.agent.content});
    });
  }

  public save() {
    if (!this.form.valid)
      return;
    this
      .apollo
      .mutate({
        mutation: UpdateAgentMutation,
        variables: {
          "id": this.agent.id,
          "data": {
            "title": this.form.value.title,
            "content": this.form.value.content
          }
        }
      })
      .take(1)
      .subscribe({
        next: ({data}) => {
          console.log('edit agent', data);
          // get edit data
          this
            .router
            .navigate(['/agents']);
        },
        error: (errors) => {
          console.log('there was an error sending the query', errors);
        }
      });
  }
}
