import { Tarefa } from "./tarefa";

export class ListaTarefa {
  constructor ( public nomeUsuario: string,  private listaDeTarefas: Tarefa[] = [] ) {
  }

  get tarefas() : readonly Tarefa[] {
    return this.listaDeTarefas;
  }

  incluirTarefa( tarefa: string ) {
    this.listaDeTarefas.push( new Tarefa( tarefa ) );
  }
  
}