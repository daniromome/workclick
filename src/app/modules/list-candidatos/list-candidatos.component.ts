import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-list-candidatos',
  templateUrl: './list-candidatos.component.html',
  styleUrls: ['./list-candidatos.component.scss']
})
export class ListCandidatosComponent {
  columnas: string[] = ['codigo', 'descripcion', 'precio', 'docs', 'borrar'];

  datos: Articulo[] = [
  new Articulo(1, 'Aracely Mercado Castro', 99, 3),
  new Articulo(2, 'Ernesto Armas Estrada', 97, 1),
  new Articulo(3, 'Fernando Alexander Casas Ortega', 90, 2),
  ];

  articuloselect: Articulo = new Articulo(0, "", 0, 0);

  @ViewChild(MatTable) tabla1!: MatTable<Articulo>;

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }
}


export class Articulo {
  constructor(public codigo: number, public descripcion: string, public precio: number, public docs: number) {
  }
  
}
