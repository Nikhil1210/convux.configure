import {Injectable} from '@angular/core';
import {IAgent} from './agent.interface';
import {GetAgentsQuery} from './graphql/queries';
import {Subject} from 'rxjs/Subject';
import {Apollo, ApolloQueryObservable} from 'apollo-angular';
import {ApolloQueryResult} from 'apollo-client';
import {DeleteAgentInterface, UpdateAgentInterface, AgentsInterface} from './graphql/schema';
import {RemoveAgentMutation, UpdateAgentMutation} from './graphql/mutations';

@Injectable()
export class AgentsService {
  private agents : ApolloQueryObservable < AgentsInterface >;
  private apollo : Apollo;

  constructor(apollo : Apollo) {
    this.apollo = apollo;
  }

  get() : ApolloQueryObservable < AgentsInterface > {
    // Query agents data with observable variables
    this.agents = this.apollo.watchQuery < AgentsInterface > ({query: GetAgentsQuery})
    // Return only agents, not the whole ApolloQueryResult
      .map(result => result.data.agents)as any;
    return this.agents;
  }
  delete(id : string) : Promise < any > {
    // Call the mutation called deleteAgent
    return new Promise((resolve, reject) => {
      this.apollo.mutate < DeleteAgentInterface > ({
          mutation: RemoveAgentMutation,
          variables: {
            "id": id
          }
        })
        .take(1)
        .subscribe({
          next: ({data}) => {
            console.log('delete agent', data.removeAgent);
            // update data
            resolve({success: true, message: `Agent #${id} deleted successfully  `});
          },
          error: (errors) => {
            console.log('there was an error sending the query', errors);
            reject({success: false, message: errors})
          }
        });
    });
  }

}
