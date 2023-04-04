const cuadrados = document.querySelectorAll('.cuadrado');
let jugadorActual = 'X';
const jugadores = ['X', 'O'];
let sumadorX = 0;
let sumadorO = 0;
cuadrados.forEach(cuadrado => {
    cuadrado.addEventListener('click', () => {                                              /* ArrowFuntions--Funciones flecha */
        if (cuadrado.textContent === ' ') {
            cuadrado.textContent = jugadorActual;
            cuadrado.setAttribute('jugador-data', jugadorActual)
            validarGanador();
            jugadorActual = jugadorActual === jugadores[0] ? jugadores[1] : jugadores[0]   /* tipo de if terniario */
        }
    }
    )
}
);

const botonReseteo= document.querySelector('#reinicio-btn');
botonReseteo.addEventListener('click', () =>{
    reseteoJuego();
}
);

const botonResetMarcador= document.querySelector('#reinicio-mrcdor');
botonResetMarcador.addEventListener('click', () =>{
    sumadorX=0;
    sumadorO=0;
    marcadorJuego();
}
);

function validarGanador(){
    const combinacionGanadores = [
        /* combinaciones horizontales */
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        /* combinaciones verticales */
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        /* combinaciones diagonales */
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i=0; i<combinacionGanadores.length; i++){
        const [a, b, c] = combinacionGanadores[i];
        const cuadradoA = cuadrados[a];
        const cuadradoB = cuadrados[b];
        const cuadradoC = cuadrados[c];

        if (
            cuadradoA.textContent === jugadorActual && 
            cuadradoB.textContent === jugadorActual &&
            cuadradoC.textContent === jugadorActual
            ){
                if (jugadorActual==='X'){
                    sumadorX++;
                }
                if(jugadorActual==='O'){
                    sumadorO++;
                }
                
                const etiquetaGanador=document.querySelector("#etiqueta-ganador");
                etiquetaGanador.textContent = `El ganador fue ${jugadorActual}! Felicitaciones` /* formating a insert para mostrar la variable */
                 
                marcadorJuego(); 
                setTimeout(()=>{
                    reseteoJuego();
                },3000
                );
                return;
            }
    }

}

function marcadorJuego(){
    const etiquetaMarcador=document.querySelector("#etiqueta-marcador");
    etiquetaMarcador.textContent=`El marcador es X = ${sumadorX} / O = ${sumadorO}`
}



function reseteoJuego() {
    cuadrados.forEach(cuadrado =>{
        cuadrado.textContent= ' ';
        cuadrado.removeAttribute('jugador-data');
    });
    jugadorActual='X'
    const etiquetaGanador=document.querySelector("#etiqueta-ganador");
    etiquetaGanador.textContent = "No ha ganado nadie hasta el momento"
}

/* Agragarle un marcador de ganadores */