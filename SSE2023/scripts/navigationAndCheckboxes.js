function marcarAnteriores() {
    const checkboxes = document.querySelectorAll('.content input[type="checkbox"]');
    let foundChecked = false;

    for (let i = checkboxes.length - 1; i >= 0; i--) {
        const checkbox = checkboxes[i];

        if (checkbox.checked) {
            foundChecked = true;
        } else if (foundChecked) {
            checkbox.checked = true;
        }
    }
}

let seccionesMarcadas = {}; // Almacena el estado de las secciones marcadas

function handleCheckboxClick(checkboxId) {
    const checkbox = document.getElementById(checkboxId);

    if (checkbox.checked) {
        // Marca la sección como seleccionada
        seccionesMarcadas[checkboxId] = true;
    } else {
        // Si la sección estaba marcada pero se desmarca, actualiza el estado
        delete seccionesMarcadas[checkboxId];
    }
}

function marcarAnteriores() {
    const secciones = Object.keys(seccionesMarcadas);
    let ultimaSeccionMarcada = '';
    for (let i = secciones.length - 1; i >= 0; i--) {
        if (seccionesMarcadas[secciones[i]]) {
            ultimaSeccionMarcada = secciones[i];
            break;
        }
    }

    // Redirige solo si hay una sección marcada
    if (ultimaSeccionMarcada !== '') {
        switch (ultimaSeccionMarcada) {
            case 'check-seccion-01':
                window.location.href = 'Encuestas.html';
                break;
            case 'check-seccion-02':
                window.location.href = 'instrucciones.html';
                break;
            case 'check-seccion-03':
                window.location.href = 'perfiles.html';
                break;
            case 'check-seccion-04':
                window.location.href = 'ubicacion_laboral.html';
                break;
            case 'check-seccion-05':
                window.location.href = 'desempenio_y_expectativas.html';
                break;
            default:
                // Si no hay ninguna sección marcada, puedes hacer algo aquí
                break;
        }
    }
}

function marcarSiguientes() {
    const checkboxes = document.querySelectorAll('.content input[type="checkbox"]');
    let siguienteSeccionNoMarcada = '';

    for (let i = 0; i < checkboxes.length; i++) {
        if (!seccionesMarcadas[checkboxes[i].id]) {
            siguienteSeccionNoMarcada = checkboxes[i].id;
            break;
        }
    }

    // Redirige solo si hay una sección no marcada
    if (siguienteSeccionNoMarcada !== '') {
        switch (siguienteSeccionNoMarcada) {
            case 'check-seccion-01':
                window.location.href = 'Encuestas.html';
                break;
            case 'check-seccion-02':
                window.location.href = 'instrucciones.html';
                break;
            case 'check-seccion-03':
                window.location.href = 'perfiles.html';
                break;
            case 'check-seccion-04':
                window.location.href = 'ubicacion_laboral.html';
                break;
            case 'check-seccion-05':
                window.location.href = 'desempenio_y_expectativas.html';
                break;
            default:
                // Si no hay ninguna sección no marcada, puedes hacer algo aquí
                break;
        }
    }
}


