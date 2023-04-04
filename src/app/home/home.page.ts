import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  

  public selected = 0;

  public categs = [
    { codigo: 1, nome: 'Frango'},
    { codigo: 2, nome: 'Bovinos'},
    { codigo: 3, nome: 'Suínos'},
    { codigo: 4, nome: 'Dogão'}
    
  ]

  public pathImgs = '../../assets/img/';

  public produtos = [
    { codigo: 1, categoria: 1, preco: 'R$ 22,90', nome: 'Frango Empanado', descricao : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum nisi nec justo laoreet, vel suscipit tortor varius. Nullam vel mauris eget justo maximus efficitur. Sed rutrum tortor eget bibendum pulvinar. ', visibled: false, imagem: ['frango-emp-1.jpg', 'frango-emp-2.jpg'] },
    { codigo: 2, categoria: 1, preco: 'R$ 20,90', nome: 'Frango com Queijo', descricao : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum nisi nec justo laoreet, vel suscipit tortor varius. Nullam vel mauris eget justo maximus efficitur. Sed rutrum tortor eget bibendum pulvinar. ', visibled: false, imagem: ['frg-queijo-1.jpg', 'frg-queijo-2.jpg']},
    { codigo: 3, categoria: 1, preco: 'R$ 19,90', nome: 'Filé de Frango', descricao : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum nisi nec justo laoreet, vel suscipit tortor varius. Nullam vel mauris eget justo maximus efficitur. Sed rutrum tortor eget bibendum pulvinar. ', visibled: false, imagem: ['filefrg-1.jpg', 'filefrg-2.jpg']},
    { codigo: 4, categoria: 2, preco: 'R$ 32,99', nome: 'Patinho', descricao : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum nisi nec justo laoreet, vel suscipit tortor varius. Nullam vel mauris eget justo maximus efficitur. Sed rutrum tortor eget bibendum pulvinar. ', visibled: false, imagem: ['patinho-1.jpg', 'patinho-2.jpg']},
    { codigo: 5, categoria: 2, preco: 'R$ 30,99', nome: 'Duplo Hamburguer', descricao : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum nisi nec justo laoreet, vel suscipit tortor varius. Nullam vel mauris eget justo maximus efficitur. Sed rutrum tortor eget bibendum pulvinar. '      , visibled: false, imagem: ['hamburgcompleto1.jpg', 'hamburggourmet2.jpg']},
    { codigo: 6, categoria: 2, preco: 'R$ 21,90', nome: 'Cheese Burguer', descricao : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum nisi nec justo laoreet, vel suscipit tortor varius. Nullam vel mauris eget justo maximus efficitur. Sed rutrum tortor eget bibendum pulvinar. ' , visibled: false, imagem: ['bacon-1.jpg', 'bacon2.jpg']},
    { codigo: 7, categoria: 3, preco: 'R$ 22,90', nome: 'Bacon', descricao : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum nisi nec justo laoreet, vel suscipit tortor varius. Nullam vel mauris eget justo maximus efficitur. Sed rutrum tortor eget bibendum pulvinar. ', visibled: false, imagem: ['hamburgcompleto1.jpg', 'hamburgcompleto2.jpg']},
    { codigo: 8, categoria: 3, preco: 'R$ 49,90', nome: 'Costelinha', descricao : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum nisi nec justo laoreet, vel suscipit tortor varius. Nullam vel mauris eget justo maximus efficitur. Sed rutrum tortor eget bibendum pulvinar. ', visibled: false, imagem: ['costelinha1.jpg', 'hamburggourmet2.jpg']},
    { codigo: 9, categoria: 3, preco: 'R$ 26,99', nome: 'Hamburguer Suino', descricao : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum nisi nec justo laoreet, vel suscipit tortor varius. Nullam vel mauris eget justo maximus efficitur. Sed rutrum tortor eget bibendum pulvinar. ', visibled: false, imagem: ['hamburggourmet1.jpg', 'hamburggourmet1.jpg']},
    { codigo: 10, categoria: 4, preco: 'R$ 19,99', nome: 'Duplo Dog', descricao : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum nisi nec justo laoreet, vel suscipit tortor varius. Nullam vel mauris eget justo maximus efficitur. Sed rutrum tortor eget bibendum pulvinar. ', visibled: false, imagem: ['dog2salsichas.jpg', 'dog2salsichas.jpg']},
    { codigo: 11, categoria: 4, preco: 'R$ 21,99', nome: 'Dogão com Queijo', descricao : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum nisi nec justo laoreet, vel suscipit tortor varius. Nullam vel mauris eget justo maximus efficitur. Sed rutrum tortor eget bibendum pulvinar. ', visibled: false, imagem: ['dogqueijo.jpg', 'especial1.jpg']},
    { codigo: 12, categoria: 4, preco: 'R$ 69,99', nome: 'Auu-Auu', descricao : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum nisi nec justo laoreet, vel suscipit tortor varius. Nullam vel mauris eget justo maximus efficitur. Sed rutrum tortor eget bibendum pulvinar. ', visibled: false, imagem: ['podrão.jpg', 'podrão2.jpg']}

  ]
  
  public slideOpts = {
    slidesPerView: 1
  }


  route: any;



  constructor(private navCtrl: NavController) {
    
    this.setSelected(1);
  }

  public goProduto(produto:any){
    this.navCtrl.navigateForward('produto',{
      queryParams: { produto: produto}
    });
  }

  public setSelected(codigoCategoria: number) {
    this.selected = codigoCategoria;

    this.produtos.map(el => el.visibled = false);

    this.produtos
    .filter(el => el.categoria == this.selected)
    .map(el => el.visibled = true);

   
  }

}