const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send([data={ "id": 0, "nombre": "Nombre00", "email": "email@email.com", "apellido": "Apellido0" }, { "id": 1, "nombre": "Gimena", "email": "email@email.com", "apellido": "DiStefano" }, { "id": 2, "nombre": "nombre", "email": "email2@email.com", "apellido": "apellido" }, { "id": 3, "nombre": "Usuario 3", "email": "email3@email.com", "apellido": "apellidousuario3" }, { "id": 4, "nombre": "Usuario 4", "email": "email4@email.com", "apellido": "apellidousuario4" }]);
});

app.listen(port, () => {
    console.log('Ejmpleo de app escuchandoo en puerto' + port)
})