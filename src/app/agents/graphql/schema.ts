export interface UpdateAgentInterface {
  updateAgent : {
    id: string,
    title: string | null,
    content: string
  }
}

export interface DeleteAgentInterface {
  removeAgent : {
    id: string,
    title: string | null
  }
}
export interface AgentsInterface {
  agents : Array < {
    title: string | null,
    content: string | null
  } > | null;
}

export interface AgentByIdInterface {
  agent : {
    id: string,
    title: string | null,
    content: string | null
  }
}
