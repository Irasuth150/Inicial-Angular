//Importo el decorador component de angularcore
import { Component, Input, Output, EventEmitter} from '@angular/core';
//Decoro una clase, pasando metadatos
@Component({
  selector: 'custom-hello',
  //Se pasa una referencia donde fue declarado el template,
  //Se pasa el template a su unico archivo html
  templateUrl: './hello.component.html',
  styleUrls: [
    './hello.component.css'
  ],
})
export class HelloComponent{
 //Declarar una propiedad en el componente para el nombre con property bindings
  @Input()name:String;
//Declaro la propiedad sayHello que es de tipo EventEmitter
  @Output()sayHello:EventEmitter<String> = new EventEmitter<String>();
  //Instaciar el objeto con un nuevo EventEmitter
  public namesList: Array<string> = [];
  public inputName: string = '';
//Inicializar los valores
  constructor(){
  }
//Método para llamar al hacer click
  onNameClick(){
  this.sayHello.emit('Hello');
  }
  addName(){
    this.namesList.push(this.inputName);
    this.inputName= '';
    console.log(this.namesList);
  }
}
