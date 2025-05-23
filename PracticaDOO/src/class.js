const URL = "https://special-palm-tree-wrvq767w496q29prp-3000.app.github.dev/users";

function obtenerUsuarios() {
    if (salida.textContent.trim() !== "") {
        salida.textContent = ""
    } else {
        fetch(URL, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                document.getElementById('salida').textContent = JSON.stringify(data, null, 2);
            })
    }
}

function buscarUsuario() {
    const id = document.getElementById('buscarUsuario').value;
    fetch(`${URL}/${id}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("usuario").textContent = JSON.stringify(data, null, 2);
        })
}

function eliminarUsuario() {
    const id = document.getElementById('buscarUsuarioEliminar').value;
    fetch(`${URL}/${id}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(data => alert(data.message));
}

function registrarUsuario() {
    const datos = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        edad: document.getElementById('edad').value,
        email: document.getElementById('email').value
    };
    fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/JSON' },
        body: JSON.stringify(datos)

    })
        .then(response => response.json())
        .then(data => alert("Usuario agregado exitosamente..."))
}

function buscarUsuarioActualizar() {
    const id = document.getElementById('inputUsuarioActualizar').value;
    fetch(`${URL}/${id}`)
        .then(response => response.json())
        .then(data => {
            // Rellena los inputs con los datos del usuario
            document.getElementById('updateNombre').value = data.nombre;
            document.getElementById('updateApellido').value = data.apellido;
            document.getElementById('updateEdad').value = data.edad;
            document.getElementById('updateEmail').value = data.email;
        });
}

function actualizarUsuario() {
    const id = document.getElementById('inputUsuarioActualizar').value;
    const datosActualizados = {
        nombre: document.getElementById('updateNombre').value,
        apellido: document.getElementById('updateApellido').value,
        edad: document.getElementById('updateEdad').value,
        email: document.getElementById('updateEmail').value
    };
    fetch(`${URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datosActualizados)
    })
        .then(response => response.json())
        .then(data => alert("Usuario actualizado..."))
}

