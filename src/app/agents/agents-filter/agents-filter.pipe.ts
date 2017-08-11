import {PipeTransform, Pipe} from '@angular/core';
import {IAgent} from '../agent.interface'
@Pipe({name: 'agentsFilter'})
export class AgentsFilterPipe implements PipeTransform {
  transform(value : IAgent[], filtetBy : string) : IAgent[] {
    filtetBy = filtetBy
      ? filtetBy.toLocaleLowerCase()
      : null; //search in each product if is the same
    return filtetBy
      ? value.filter((agent : IAgent) => agent.title.toLocaleLowerCase().indexOf(filtetBy) !== -1)
      : value;
  }

}
