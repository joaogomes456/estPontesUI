import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/core/model';

@Component({
  selector: 'app-listacategorias',
  templateUrl: './listacategorias.component.html',
  styleUrls: ['./listacategorias.component.scss']
})
export class ListacategoriasComponent implements OnInit {

  categorias: Categoria[] = [

    {'id': 1, 'nomecategoria': 'Componentes/Desktop'}

  ];

  displayedColumns = ['nomecategoria'];

  constructor() { }

  ngOnInit(): void {
  }

}
