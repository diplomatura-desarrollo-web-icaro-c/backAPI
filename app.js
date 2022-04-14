const express = require('express');
const app = express();
const port = 3001;

let INFORMACION_USUARIO = [
    {
        id: 0,
        nombre: "tNombre0",
        email: "temail@email.com",
        apellido: "tApellido0"
    },
    {
        id: 1,
        nombre: "tGimena",
        email: "temail@email.com",
        apellido: "tDiStefano"
    },
    {
        id: 2,
        nombre: "nombre",
        email: "email2@email.com",
        apellido: "apellido"
    },
    {
        id: 3,
        nombre: "Usuario 3",
        email: "email3@email.com",
        apellido: "apellidousuario3"
    },
    {
        id: 4,
        nombre: "Usuario 4",
        email: "email4@email.com",
        apellido: "apellidousuario4"
    },
];

app.get('/', (req, res) => {
    res.send(INFORMACION_USUARIO);
});


const QueryUserById = (id) => {
    let user;
    INFORMACION_USUARIO.forEach((userData) => {
      if (userData.id === Number(id)) {
        user = userData;
      }
    });
    return user;
  };

app.get('/:id', (req, res) => {
    const userId = req.params.id;
    const usuarioObtenido = QueryUserById(userId);
    res.send(usuarioObtenido);
});

app.post('/ejecutarFormulario', (req, res) => {
    const userId = req.params.id;
    const usuarioObtenido = QueryUserById(userId);
    res.send(usuarioObtenido);
});



app.listen(port, () => {
    console.log('Ejmpleo de app escuchandoo en puerto' + port)
})