import { Injectable } from '@angular/core';
import db from '../../firebase/config';
import { retornaDocumentos } from '../../helpers/mostrar-documentos';

@Injectable({
  providedIn: 'root'
})
export class PruebasService {
  usuario = {
    nombre:'Claudio',
    activo: false,
    fechaNaci: 0,
    salario: 2850
  }
  usuarios:any[] = [];
  usuariosRef = db.collection('usuarios');

  constructor() { 
    // this.guardarDatos();
    // this.actualizarDatos();
    // this.eliminarDatos();
    // this.getAllData();
    // this.querys();
    // this.querys2();
    this.pagination();
    
  }
  
  private guardarDatos(){
    // guardar datos en firestore
    this.usuariosRef.add(this.usuario)
      .then( docRef => {
        console.log(docRef);
      })
      .catch(e => console.log('error',e));
    
  }
  private actualizarDatos(){
    // actualizar datos en firestore
    this.usuariosRef
      .doc('7T1RgKGwangZ6PRVJQF3')
      .update({
        activo: false,
        fechaNaci:0
      });

      // DESTRUCTIVO
      // con set se guardan solo los datos que pasamos y elimina todos los otros
      // this.usuariosRef
      // .doc('7T1RgKGwangZ6PRVJQF3')
      // .set({
      //   activo: false,
      //   fechaNaci:0
      // });

    // this.usuariosRef.add(this.usuario)
    //   .then( docRef => {
    //     console.log(docRef);
    //   })
    //   .catch(e => console.log('error',e));
    
  }

  private eliminarDatos(){
    const id:string = 'wUGXjdTadq1Svo1ulScw';
    this.usuariosRef
      .doc(id)
      .delete()
      .then(() => console.log('Borrado'))
      .catch( e => console.log('error',e));
  }

  private getAllData(){
    
    //onSnapShot esta siempre escuchando a la espera
    // de cambios en la bd
    this.usuariosRef
      .onSnapshot( snap => {
        this.usuarios = retornaDocumentos(snap);
      });
    // get busca los datos y solo se actualiza cuando
    // se recarga la pagina
    //this.usuariosRef
    //    .get().then( snap => this.usuarios = retornaDocumentos(snap));
  }

  private querys(){
    /*
    select * from usuarios 
    where activo = true
    */
    // this.usuariosRef
    // .where('activo','==',true)
    // .onSnapshot( snap => {
    //   this.usuarios = retornaDocumentos(snap);
    // });
    
    /*
      select * from where salario > 1500
     */
    // this.usuariosRef
    //   .where('salario','>',1500)
    //   .onSnapshot( snap => {
    //     this.usuarios = retornaDocumentos(snap);
    //   });

    /*
      select * from where salario > 1500
     */
    // this.usuariosRef
    //   .where('salario','>',1500)
    //   .where('salario','<',2300)
    //   .onSnapshot( snap => {
    //     this.usuarios = retornaDocumentos(snap);
    //   });
    /*
      select * from where salario > 1800 and activo = true
     */
      this.usuariosRef
      .where('salario','>=',1500)
      .where('activo','==',true)
      .onSnapshot( snap => {
        this.usuarios = retornaDocumentos(snap);
      });
  }

  private querys2(){
    this.usuariosRef
      .orderBy('nombre')
      .orderBy('salario','asc')
      .onSnapshot(snap => {
        this.usuarios = retornaDocumentos(snap);
      })
  }

  private pagination() {

    const btnPrev = document.createElement('button');
    btnPrev.innerHTML = 'Prev';
    document.body.append(btnPrev);
    
    const btnNext = document.createElement('button');
    btnNext.innerHTML = 'Next';
    document.body.append(btnNext);

    let firstDocument:any = null;
    let lastDocument:any = null;

    btnNext.addEventListener('click', () => {
      const query = this.usuariosRef
                      .orderBy('nombre')
                      .startAfter(lastDocument);
      query.limit(2).get().then( snap => {
        firstDocument = snap.docs[0] || null;
        lastDocument = snap.docs[snap.docs.length-1] || null;
        this.usuarios = retornaDocumentos(snap);
      })
    });

    

    btnPrev.addEventListener('click', () => {
      const query = this.usuariosRef
                      .orderBy('nombre')
                      .endBefore(firstDocument);

      query.limitToLast(2).get().then( snap => {
        firstDocument = snap.docs[0] || null;
        lastDocument = snap.docs[snap.docs.length-1] || null;
        this.usuarios = retornaDocumentos(snap);
      })
    })


    btnNext.click();

    // this.usuariosRef
    //   .limit(1)
    //   .onSnapshot(snap => {
    //     this.usuarios = retornaDocumentos(snap);
    //   })
  }
}
