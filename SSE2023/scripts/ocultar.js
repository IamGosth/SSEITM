function openTab(tabName) {
    var i, tabcontent, tablinks;

    // Ocultar todas las pestañas
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Desactivar todos los enlaces de pestañas
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Mostrar la pestaña actual y resaltar el enlace de la pestaña
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}
