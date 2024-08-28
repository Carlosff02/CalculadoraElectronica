import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
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
    
    
    
  }
  acciones(accion:string){
    this.number=this.salva;
    this.number+=accion;
    
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
  
}
