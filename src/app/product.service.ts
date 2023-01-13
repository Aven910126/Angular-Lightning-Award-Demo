import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getproductname(): Object[] {
    return [
      {
        productName: "product1",
        img: "https://picsum.photos/500/300?random=1",
        producontent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eaque dignissimos nesciuntnulla inventore ut odit, quo voluptatem! Corporis, reprehenderit aperiam. Sint nisi beataearchitecto?",
        quantity: 5,
      },
      {
        productName: "product2",
        img: "https://picsum.photos/500/300?random=2",
        producontent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eaque dignissimos nesciuntnulla inventore ut odit, quo voluptatem! Corporis, reprehenderit aperiam. Sint nisi beataearchitecto?",
        quantity: 0,
      },
      {
        productName: "product3",
        img: "https://picsum.photos/500/300?random=6",
        producontent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eaque dignissimos nesciuntnulla inventore ut odit, quo voluptatem! Corporis, reprehenderit aperiam. Sint nisi beataearchitecto?",
        quantity: 5,
      },
      {
        productName: "product4",
        img: "https://picsum.photos/500/300?random=3",
        producontent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eaque dignissimos nesciuntnulla inventore ut odit, quo voluptatem! Corporis, reprehenderit aperiam. Sint nisi beataearchitecto?",
        quantity: 10,
      },
      {
        productName: "product5",
        img: "https://picsum.photos/500/300?random=4",
        producontent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eaque dignissimos nesciuntnulla inventore ut odit, quo voluptatem! Corporis, reprehenderit aperiam. Sint nisi beataearchitecto?",
        quantity: 8,
      },
      {
        productName: "product6",
        img: "https://picsum.photos/500/300?random=5",
        producontent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eaque dignissimos nesciuntnulla inventore ut odit, quo voluptatem! Corporis, reprehenderit aperiam. Sint nisi beataearchitecto?",
        quantity: 5,
      },
    ]
  }
}
