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

  get() : Observable < IAgent[] > {
    return this
      .http
      .get('/api/agents')
      .map((res : Response) => {
        return res.json();
      });
  }
  getDetails(id : string) : Observable < IAgent > {
    return this
      .http
      .get(`/api/agents/${id}`)
      .map((res : Response) => {
        return res.json();
      });
  }
  put(id : string, agent : IAgent) : Observable < string > {
    return this
      .http
      .put(`/api/agents/${id}`, {data: agent})
      .map((res : Response) => {
        return res.json();
      });
  }

  post(input : IAgent) : Observable < boolean > {
    return this
      .http
      .post('/api/agents', input)
      .map((res : Response) => res.json());
  }
  delete(id : string) : Observable < string > {
    return this
      .http
      .delete(`/api/agents/${id}`)
      .map((res : Response) => {
        return res.json();
      });
  }
}
