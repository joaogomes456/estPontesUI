import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/core/model';

@Component({
  selector: 'app-listaprodutos',
  templateUrl: './listaprodutos.component.html',
  styleUrls: ['./listaprodutos.component.scss']
})
export class ListaprodutosComponent implements OnInit {

  produtos: Produto[] = [

    {'id': 1, 'nomeproduto': 'Processador AMD Ryzen 5 PRO'}

  ];

  displayedColumns = ['nomeproduto'];

  constructor() { }

  ngOnInit(): void {
  }

}
