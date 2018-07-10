import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Client } from '../models/Client';

@Injectable()
export class ClientService {
  clients: any = [];
  client: any ;

  constructor(
    public af:AngularFireDatabase
  ) { 
    this.clients = this.af.list('/clients') as AngularFireList<Client[]>;
  }
  getClients(){
    return this.clients;
  }

  //getClientsNew(){
    //return this.af.list('/clients').valueChanges();//boyle korsan sonra istedigin herhangi bi yerden 
    //subsribe yapabilirsin 
    //burdfa yaparsan subscribe sonuc sace servisteki clients ta kalir
  //}

  // newClientNew(client:Client){
  //   this.af.list('/clients').push(client)//hatirlarsan boyle eklemiyodu bazaya hata variyodu.
  //   return this.af.list('/clients').push({ 
  //     firstName : client.firstName, 
  //     lastname : client.lastName, 
  //     email : client.email,
  //     phone: client.phone,
  //     balance: client.balance
  //   });
  // }

  newClient(client:Client){
    this.clients.push(client);
   }

   getClientsNew(){
    return this.af.list('/clients').valueChanges();//boyle korsan sonra istedigin herhangi bi yerden 
    //subsribe yapabilirsin 
    //burdfa yaparsan subscribe sonuc sace servisteki clients ta kalir
  }

  // getClient(id:string){
  //   this.client = this.af.object('/clients/'+id) as AngularFireObject<Client>;
  //   return this.client;
  // }


  getClient(id:string){
    //return this.af.object('/clients/'+id).valueChanges();
    this.client = this.af.object('/clients/'+id).valueChanges(); //as AngularFireObject<Client>;
    return this.client;
  } 

  

}

