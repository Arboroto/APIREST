export class Serie {
  myPuntuaciones = {puntuacion: 0, email:''};

  constructor() {

    this._id = '';
    this.titulo = '';
    this.categorias = [''];
    this.capitulos = 0;
    this.anyo = 0;
    this.sinopsis = '';
    this.puntuaciones = this.myPuntuaciones;
    this.imagenes = [''];

  }

  _id: string;
  titulo: string;
  categorias: [string];
  capitulos: 0;
  anyo: 0;
  sinopsis: string;
  puntuaciones: { puntuacion: number; email: string };
  imagenes: [string]
}
