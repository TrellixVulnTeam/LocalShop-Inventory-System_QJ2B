import { Component, OnInit } from '@angular/core';
import {StockService} from '../service/stock.service';
import {MatTableDataSource} from '@angular/material/table';
import {Product} from  '../interface/product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  data :Product[] |Object |any;
  dataSource: any;
 
  
  constructor(private stockService :StockService ) { }
  
 
  ngOnInit(): void {
    this.stockService.productslist().subscribe(x => {
    this.data = x;
    console.log(this.data);
    });

    this.dataSource = new MatTableDataSource(this.data);
  }
  displayedColumns: string[] = ['id', 'name','store_name','created_date', 'cost','price'];
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
