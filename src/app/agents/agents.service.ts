import {Injectable} from '@angular/core';
import {IAgent} from './agent.interface';
import {GetAgentsQuery} from './graphql/queries';
import {Observable} from 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';
import {Apollo, ApolloQueryObservable} from 'apollo-angular';
import {ApolloQueryResult} from 'apollo-client';
import {Http, Response, RequestOptions} from '@angular/http';
import {DeleteAgentInterface, UpdateAgentInterface, AgentsInterface} from './graphql/schema';
import {RemoveAgentMutation, UpdateAgentMutation} from './graphql/mutations';

@Injectable()
export class AgentsService {
  private agents : ApolloQueryObservable < AgentsInterface >;
  private apollo : Apollo;

  constructor(apollo : Apollo, private http : Http) {
    this.apollo = apollo;
  }
  gettext() : Observable < string > {
    return this
      .http
      .get('/api/agents/helloagent')
      .map((res : Response) => {
        // alert('res: ' + res.json() + ' message: ' + res.json().message);
        return res.json();
      });
  }

  get() : Observable < IAgent[] > {
    return this
      .http
      .get('/api/agents')
      .map((res : Response) => {
        console.log('res: ' + res);
        return res.json();
      });
  }
  getDetails(id : string) : Observable < IAgent > {
    return this
      .http
      .get(`/api/agents/${id}`)
      .map((res : Response) => {
        console.log('details res.json(): ' + res.json());
        return res.json();
      });
  }
  put(id : string, agent : IAgent) : Observable < IAgent > {
    return this
      .http
      .put(`/api/agents/${id}`, agent)
      .map((res : Response) => {
        console.log('details res.json(): ' + res.json());
        return res.json();
      });
  }

  post(input : IAgent) : Observable < boolean > {
    return this
      .http
      .post('/api/agents', input)
      .map((res : Response) => res.json());
  }

  // get() : ApolloQueryObservable < AgentsInterface > {   // Query agents data
  // with observable variables   this.agents = this.apollo.watchQuery <
  // AgentsInterface > ({query: GetAgentsQuery})   // Return only agents, not the
  // whole ApolloQueryResult     .map(result => result.data.agents)as any; return
  // this.agents; } delete(id : string) : Promise < any > {   // Call the mutation
  // called deleteAgent   return new Promise((resolve, reject) => {
  // this.apollo.mutate < DeleteAgentInterface > ({         mutation:
  // RemoveAgentMutation,         variables: {           "id": id         } })
  // .take(1)       .subscribe({         next: ({data}) => { console.log('delete
  // agent', data.removeAgent);           // update data     resolve({success:
  // true, message: `Agent #${id} deleted successfully `});         }, error:
  // (errors) => {           console.log('there was an error sending the query',
  // errors);           reject({success: false, message: errors}) }       }); });
  // }

}
