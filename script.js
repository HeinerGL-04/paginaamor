/* =====================================================
   CONFIGURACIÓN DE IMÁGENES
===================================================== */

/*
    Aquí puedes cambiar las 5 imágenes
    de referencia de la página.

    Actualmente utilizamos imágenes de Unsplash.

    1. Portada
    2. Historia
    3. Cuenta regresiva
    4. RSVP
    5. Galería
*/


const images = {

    portada:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85",

    historia:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",

    cuentaRegresiva:
        "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1800&q=85",

    rsvp:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1800&q=85",

    galeria:
        "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1800&q=85"

};



/* =====================================================
   ASIGNAR IMÁGENES
===================================================== */


document.addEventListener(
    "DOMContentLoaded",
    () => {


        /*
            HERO
        */

        const hero =
            document.getElementById("hero");


        hero.style.backgroundImage =
            `
            linear-gradient(
                rgba(0,0,0,.25),
                rgba(0,0,0,.35)
            ),
            url("${images.portada}")
            `;



        /*
            HISTORIA
        */

        document.getElementById(
            "story-image"
        ).src =
            images.historia;



        /*
            CUENTA REGRESIVA
        */

        const countdownSection =
            document.getElementById(
                "countdown-section"
            );


        countdownSection.style.backgroundImage =
            `
            linear-gradient(
                rgba(60,45,35,.55),
                rgba(60,45,35,.55)
            ),
            url("${images.cuentaRegresiva}")
            `;



        /*
            RSVP
        */

        const rsvpSection =
            document.querySelector(
                ".rsvp-section"
            );


        rsvpSection.style.backgroundImage =
            `
            linear-gradient(
                rgba(50,40,35,.6),
                rgba(50,40,35,.6)
            ),
            url("${images.rsvp}")
            `;



        /*
            GALERÍA

            Utilizamos las 5 imágenes
            como diferentes fotografías.
        */


        document.getElementById(
            "gallery-image-1"
        ).src =
            images.galeria;



        document.getElementById(
            "gallery-image-2"
        ).src =
            images.portada;



        document.getElementById(
            "gallery-image-3"
        ).src =
            images.historia;



        document.getElementById(
            "gallery-image-4"
        ).src =
            images.cuentaRegresiva;



        document.getElementById(
            "gallery-image-5"
        ).src =
            images.rsvp;


    }
);



/* =====================================================
   PANTALLA DE BIENVENIDA
===================================================== */


const welcomeScreen =
    document.getElementById(
        "welcome-screen"
    );


const enterButton =
    document.getElementById(
        "enter-button"
    );


const music =
    document.getElementById(
        "background-music"
    );


const musicButton =
    document.getElementById(
        "music-button"
    );



enterButton.addEventListener(
    "click",
    () => {


        welcomeScreen.classList.add(
            "hidden"
        );


        /*
            Si agregas música,
            puedes activarla aquí.
        */


        if (music.src) {

            music.play()
                .then(
                    () => {

                        musicButton.classList.add(
                            "playing"
                        );

                    }
                )
                .catch(
                    () => {

                        console.log(
                            "El navegador bloqueó la música."
                        );

                    }
                );

        }


    }
);



/* =====================================================
   CONTROL DE MÚSICA
===================================================== */


musicButton.addEventListener(
    "click",
    () => {


        if (!music.src) {

            alert(
                "Agrega una canción al elemento audio del HTML."
            );

            return;

        }


        if (music.paused) {


            music.play();


            musicButton.classList.add(
                "playing"
            );


        } else {


            music.pause();


            musicButton.classList.remove(
                "playing"
            );


        }


    }
);



/* =====================================================
   CUENTA REGRESIVA
===================================================== */


/*
    FECHA DE LA BODA

    Año: 2026
    Mes: 11 = Diciembre
    Día: 15
    Hora: 16:00
*/


const weddingDate =
    new Date(
        2026,
        11,
        15,
        16,
        0,
        0
    ).getTime();



function updateCountdown() {


    const now =
        new Date().getTime();


    const distance =
        weddingDate - now;



    if (distance <= 0) {


        document.getElementById(
            "days"
        ).innerText = "00";


        document.getElementById(
            "hours"
        ).innerText = "00";


        document.getElementById(
            "minutes"
        ).innerText = "00";


        document.getElementById(
            "seconds"
        ).innerText = "00";


        return;

    }



    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );



    const hours =
        Math.floor(
            (
                distance %
                (1000 * 60 * 60 * 24)
            )
            /
            (1000 * 60 * 60)
        );



    const minutes =
        Math.floor(
            (
                distance %
                (1000 * 60 * 60)
            )
            /
            (1000 * 60)
        );



    const seconds =
        Math.floor(
            (
                distance %
                (1000 * 60)
            )
            /
            1000
        );



    document.getElementById(
        "days"
    ).innerText =
        String(days).padStart(
            2,
            "0"
        );



    document.getElementById(
        "hours"
    ).innerText =
        String(hours).padStart(
            2,
            "0"
        );



    document.getElementById(
        "minutes"
    ).innerText =
        String(minutes).padStart(
            2,
            "0"
        );



    document.getElementById(
        "seconds"
    ).innerText =
        String(seconds).padStart(
            2,
            "0"
        );

}



updateCountdown();


setInterval(
    updateCountdown,
    1000
);



/* =====================================================
   ANIMACIONES AL HACER SCROLL
===================================================== */


const revealElements =
    document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right"
    );



const observer =
    new IntersectionObserver(

        (entries) => {


            entries.forEach(
                (entry) => {


                    if (
                        entry.isIntersecting
                    ) {


                        entry.target
                            .classList
                            .add(
                                "active"
                            );


                    }


                }
            );


        },

        {

            threshold: 0.15

        }

    );



revealElements.forEach(
    (element) => {


        observer.observe(
            element
        );


    }
);



/* =====================================================
   GALERÍA - MODAL
===================================================== */


const galleryImages =
    document.querySelectorAll(
        ".gallery-item img"
    );


const modal =
    document.getElementById(
        "image-modal"
    );


const modalImage =
    document.getElementById(
        "modal-image"
    );


const closeModal =
    document.querySelector(
        ".close-modal"
    );



galleryImages.forEach(
    (image) => {


        image.addEventListener(
            "click",
            () => {


                modalImage.src =
                    image.src;


                modal.classList.add(
                    "active"
                );


            }
        );


    }
);



closeModal.addEventListener(
    "click",
    () => {


        modal.classList.remove(
            "active"
        );


    }
);



modal.addEventListener(
    "click",
    (event) => {


        if (
            event.target === modal
        ) {


            modal.classList.remove(
                "active"
            );


        }


    }
);



/* =====================================================
   PARALLAX DEL HERO
===================================================== */


window.addEventListener(
    "scroll",
    () => {


        const hero =
            document.querySelector(
                ".hero"
            );


        const scrollPosition =
            window.scrollY;



        if (
            scrollPosition <
            window.innerHeight
        ) {


            hero.style.backgroundPosition =
                `center ${scrollPosition * 0.3}px`;


        }


    }
);