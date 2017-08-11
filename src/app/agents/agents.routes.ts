import {AgentListComponent} from './agent-list/agent-list.component';
import {NewAgentComponent} from './new-agent/new-agent.component';
import {EditAgentComponent} from './edit-agent/edit-agent.component';
import {agentDetailComponent} from './agent-detail/agent-detail.component';

export const routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AgentListComponent
      }, {
        path: 'agent-detail/:id',
        component: agentDetailComponent
      }, {
        path: 'new',
        component: NewAgentComponent
      }, {
        path: 'edit/:id',
        component: EditAgentComponent
      }

    ]
  }
];
