import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-produit',
  templateUrl: './show-produit.component.html',
  styleUrls: ['./show-produit.component.css']
})


export class ShowProduitComponent  implements OnInit  {

  Listproduit: any[] = [
    { "id": 1, "ProduitName": "pc gamer 1", "price": 1000, "color": "black" },
    { "id": 2, "ProduitName": "pc gamer 2", "price": 2000, "color": "red" },
    { "id": 3, "ProduitName": "pc gamer 3", "price": 3000, "color": "green" },
    { "id": 4, "ProduitName": "pc gamer 4", "price": 4000, "color": "red" },
    { "id": 5, "ProduitName": "pc gamer 5", "price": 5000, "color": "black" },
    { "id": 6, "ProduitName": "pc gamer 6", "price": 6000, "color": "green" },
    { "id": 7, "ProduitName": "pc gamer 7", "price": 7000, "color": "red" },
    { "id": 8, "ProduitName": "pc gamer 8", "price": 8000, "color": "black" },
    { "id": 9, "ProduitName": "pc gamer 9", "price": 9000, "color": "green" },
  ];

  selectedProduct: any | null = null;

  showProductDetails(product: any): void {
    this.selectedProduct = product;
  }

  hideProductDetails(): void {
    this.selectedProduct = null;
  }





constructor(

){}


ngOnInit(): void {

}


  }
