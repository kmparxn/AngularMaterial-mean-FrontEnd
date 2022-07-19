import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  info = [{ _id: "62d07d3bbdde73f2ca9edb2p", productname: "camila", category: "Fruits", date: "2022-07-12T05:00:00.000Z", freshness: "Bran New",
  price: 213123, comment: "Crud with Angular Material"}, { _id: "62d07d3bbdde73f2ca9edb2v", productname: "lorena", category: "Fruits", date: "2022-07-12T05:00:00.000Z", freshness: "Bran New",
  price: 213123, comment: "Crud with Angular Material"}, { _id: "62d07d3bbdde73f2ca9edb2w", productname: "laura", category: "Fruits", date: "2022-07-12T05:00:00.000Z", freshness: "Bran New",
  price: 213123, comment: "Crud with Angular Material"}, { _id: "62d07d3bbdde73f2ca9edb2y", productname: "victoria", category: "Fruits", date: "2022-07-12T05:00:00.000Z", freshness: "Bran New",
  price: 213123, comment: "Crud with Angular Material"}, { _id: "62d07d3bbdde73f2ca9edb2c", productname: "sofia", category: "Fruits", date: "2022-07-12T05:00:00.000Z", freshness: "Bran New",
  price: 213123, comment: "Crud with Angular Material"}, { _id: "s62d07d3bbdde73f2ca9edb2d", productname: "pedro", category: "Fruits", date: "2022-07-12T05:00:00.000Z", freshness: "Bran New",
  price: 213123, comment: "Crud with Angular Material"}, {_id: "262d07d3bbdde73f2ca9edb2e", productname: "sara", category: "Fruits", date: "2022-07-12T05:00:00.000Z", freshness: "Bran New",
  price: 213123, comment: "Crud with Angular Material"}, {_id: "s362d07d3bbdde73f2ca9edb2f", productname: "daniel", category: "Fruits", date: "2022-07-12T05:00:00.000Z", freshness: "Bran New",
  price: 213123, comment: "Crud with Angular Material"}]

  constructor() { }

  posProduct(data: any){
    return  this.info.unshift(data)
  }

  getProduct() {
    return this.info;
  }

  putProducto(data : any, id: any) {

    data._id = id._id;

    this.info = this.info.map(item => {

      return item._id === data._id ? item = data : item;

    });

    return this.info


  }

  deleteProducto(id: string) {

    this.info = this.info.filter(function(item) {
      return item._id !== id
    });
    
    return this.info  
   
  }

}