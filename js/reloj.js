const mostrarReloj= () =>{
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min= formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`

    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let fechaTexto =`${diaSemana}, ${dia} ${mes}`;
    document.getElementById('fecha').innerHTML = fechaTexto;

    document.getElementById('contenedor').classList.toggle('animar');
}

const formatoHora = (hora) =>{
    if(hora <10)
        hora = '0' + hora; // contatenamos un cero en el caso de que la hora twengo un digito. ej: 10:08
    return hora;
}

setInterval(mostrarReloj, 1000);