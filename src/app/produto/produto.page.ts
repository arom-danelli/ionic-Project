import { Component,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage  {
  
  public pathImgs = '../../assets/img/';

  public quantidade = 0;

  public produto = {
    codigo: 0,
    categoria: 0,
    nome: '',
    descricao: '',
    preco: 0,
    imagem: [],
    visibled: false
  }

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params=>{
      this.produto = params['produto']
    });
   }




   public add(){
    this.quantidade += 1;
  }

  public remove(){
    if(this.quantidade > 0){
      this.quantidade -= 1;
    }
  }

}
