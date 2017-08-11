import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';

import {routes} from './agents.routes';
import {AgentListComponent} from './agent-list/agent-list.component';
import {agentDetailComponent} from './agent-detail/agent-detail.component';
import {NewAgentComponent} from './new-agent/new-agent.component';
import {EditAgentComponent} from './edit-agent/edit-agent.component';
import {AgentsFilterPipe} from './agents-filter/agents-filter.pipe'

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    AgentListComponent,
    NewAgentComponent,
    EditAgentComponent,
    AgentsFilterPipe,
    agentDetailComponent
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild(routes),
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    MaterialModule,
    // ApolloModule.forRoot(client)
  ]
})
export class AgentsModule {
  public static routes = routes;
}
