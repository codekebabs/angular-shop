import { Component, OnInit, VERSION } from "@angular/core";
import { ProductService } from "./product.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;
  products = [];
  cart = [];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getEmployees();
  }

  showAdd(id) {
    console.log("id", id, this.cart.find(c => c !== id), this.cart);
    return this.cart.length === 0 || this.cart.find(c => c !== id);
  }
  showAddAnother(id) {
    return this.cart.find(c => c === id);
  }
  showConfigure(id) {
    return true;
  }
  showDelete(id) {
    return true;
  }

  add(id) {
    this.cart.push(id);
  }

  addAnother(id) {
    this.cart.push(id);
  }
  configure(id) {
    console.log("configuring");
  }
  delete(id) {
    this.cart = this.cart.filter(c => c !== id);
  }
}
