import firebase from "firebase";

export const retornaDocumentos = (snapshot:firebase.firestore.QuerySnapshot) => {
    var documentos:any[] = [];
    // ...agrega al array lo que trae data con sus propiedades
    snapshot.forEach(snapHijo => {
        documentos.push({
        id: snapHijo.id,
        ...snapHijo.data() 
        });
    });
    console.log(documentos);
    return documentos;

}