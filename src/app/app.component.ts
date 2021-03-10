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
  action = "";
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getEmployees();
  }

  showAdd(id) {
    return !this.cart.some(c => c === id);
  }
  showAddAnother(id) {
    return this.cart.some(c => c === id);
  }
  showConfigure(id) {
    return this.cart.some(c => c === id);
  }
  showDelete(id) {
    return this.cart.some(c => c === id);
  }

  add(id) {
    this.loaderSimulation(() => this.cart.push(id), "Adding");
  }

  addAnother(id) {
    this.loaderSimulation(() => this.cart.push(id), "Adding");
  }
  configure(id) {
    this.loaderSimulation(() => {}, "Configuring");
  }
  delete(id) {
    this.loaderSimulation(() => {
      this.cart = this.cart.filter(c => c !== id);
    }, "Deleting");
  }

  loaderSimulation(callback, actionName) {
    this.action = actionName;
    setTimeout(() => {
      this.action += ".";
      setTimeout(() => {
        this.action += ".";
        setTimeout(() => {
          this.action += ".";
          setTimeout(() => {
            this.action = "";
            callback();
          }, 400);
        }, 200);
      }, 200);
    }, 200);
  }
}
