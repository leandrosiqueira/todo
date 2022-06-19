export class Tarefa {
  tarefa: string;
  finalizada: boolean;

  constructor
  ( conteudoTarefa: string, tarefaFinalizada: boolean = false ) {
    this.tarefa = conteudoTarefa;
    this.finalizada = tarefaFinalizada;
  }
}