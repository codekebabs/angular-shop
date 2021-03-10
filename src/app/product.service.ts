import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "./product";

@Injectable()
export class ProductService {
  constructor(private httpClient: HttpClient) {}
  getEmployees() {
    return [
      new Product("Apple", "1"),
      new Product("Bananas", "2"),
      new Product("Cats", "3"),
      new Product("Dogs", "4")
    ];
  }
}
