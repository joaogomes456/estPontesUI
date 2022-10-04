import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/core/model';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-listaprodutos',
  templateUrl: './listaprodutos.component.html',
  styleUrls: ['./listaprodutos.component.scss']
})
export class ListaprodutosComponent implements OnInit {

  produtos: Observable<Produto[]>;
  displayedColumns = ['nomeproduto'];

  constructor(private produtosService: ProdutosService) {
    this.produtos = this.produtosService.listProdutos();
   }

  ngOnInit(): void {
  }

}
