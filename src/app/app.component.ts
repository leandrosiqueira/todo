import { Component } from '@angular/core';
import { ListaTarefa } from './listaTarefa';
import { Tarefa } from './tarefa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  exibirFinalizadas: boolean = false;
  
  private lista = new ListaTarefa(
    'Leandro', [ 
      new Tarefa('Caminhar', true),
      new Tarefa('Ir à Academia'),
      new Tarefa('Ir à Igreja'),
   ]
  );

  get nomeUsuario(): string {
    return this.lista.nomeUsuario;
  }

  get qtdItens(): number {
    return this.tarefas.length;
  }

  get tarefas(): readonly Tarefa[] {
    return this.lista.tarefas.filter(item => this.exibirFinalizadas || !item.finalizada);
  }

  incluirTarefa(novaTarefa) {
    if (novaTarefa != "") {
      this.lista.incluirTarefa(novaTarefa);
    }
  } 

}
