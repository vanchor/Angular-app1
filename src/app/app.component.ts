import {Component, OnInit} from '@angular/core';
import {IProduct} from "./models/product";
import {Products as data} from "./data/products"
import {ProductService} from "./services/product.service";
import {ModalService} from "./services/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

}
