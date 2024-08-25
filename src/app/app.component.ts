import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  title='calculadora';
  number='';
  salva='';
  resultado='0';
  calculo=0;
  action='';
  secundario=0;
  numeros(numero:string){
    this.number=this.salva;
    this.number+=numero;
    this.salva=this.number;
    console.log(`numero: ${this.number}`)
    
    
  }
  acciones(accion:string){
    this.number=this.salva;
    this.number+=accion;
    console.log(eval('4*2'))
    this.salva=this.number;
  }
  igualdad(){
    this.resultado=eval(this.number);
    this.number+=`=${this.resultado}`
    this.salva=this.resultado;
  }
  borrar(){
    this.salva='';
    this.number='';
    this.resultado='0';
  }
  /*users = [{id: 0, name: 'Sarah'}, {id: 1, name: 'Amy'}, {id: 2, name: 'Rachel'}, {id: 3, name: 'Jessica'}, {id: 4, name: 'Poornima'}];
  isEditable = true;
  greet(){
    console.log('Hello, there');
  };
  message = '';
  number = 1;
  onMouseOver() {
    this.message = 'Way to go';
  };
  @Input() occupation = '';
  @Output() addItemEvent = new EventEmitter<string>();
  addItem(){
    this.addItemEvent.emit('🐢');
  }
  sumar(){
    this.number++;
  }*/
}
