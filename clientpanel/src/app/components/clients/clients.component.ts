
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: any[];
  totalOwed:number;

  constructor(
    public clientService:ClientService
  ) { }

  ngOnInit() {
    // this.clientService.getClients().subscribe(clients => {
    //   this.clients = clients;
    //   this.getTotalOwed();
    // });

    this.clientService.getClientsNew().subscribe( ff =>{
      this.clients = ff;
      this.getTotalOwed();
      //iste bu sekilde serviste subscribe yapmamis olursun sadece database calls definition 
      //yapmis oluyosun, ondan sonra  servisi nerde kullanirsan kullan asil 
      //call orda yapiyosun subscribe ile ve sonucla calisabiliyosun, burda oldugu gibi
    })
  }

  getTotalOwed(){
    let total = 0;
    for(let i = 0;i < this.clients.length;i++){
      total += parseFloat(this.clients[i].balance);
    }
    return this.totalOwed = total;
    
  }

  ////addNewClient () { 
    //bu sekilde calismalari gerekiyor dostum 
    //bunlari bi deniyebilir misin sen ? 
    ////this.clientService.newClientNew({firstName : "Deneme", lastName: "asdasd", email: "asdasd"})
    ////.then(result => {
        //database retrieved result
    ////},
  ////error => {
    //error ocured during database call
  ////});

  //}

}
