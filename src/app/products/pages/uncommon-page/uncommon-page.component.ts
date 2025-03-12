import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Johan';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  public changeClient(): void {
    this.name = 'Lisse';
    this.gender = 'female';
  }

  // i18n Plural
  public clients: string[] = ['Lisse', 'Pedro', 'Fernando', 'Eduardo', 'Melissa', 'Natalia'];
  public clientsMap = {
    '=0': 'no tenemos ninguño esperando',
    '=1': 'tenemos # cliente esperando',
    other: 'tenemos # clientes esperando'
  }
  public deleteClient(): void {
    this.clients.shift();
  }

  // Slice
  public sliceArray(): void {
    this.clients = this.clients.slice(1);
  }

  // Key Value Pipe
  public person = {
    name: 'Johan',
    age: 25,
    address: 'Colombia'
  }

  // Async Pipe
  public myObservable: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value) )
  )

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
    }, 3500);
  })

}
