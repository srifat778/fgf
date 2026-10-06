/* =========================================
   PAGE NAVIGATION
========================================= */

function showPage(pageNumber) {

    const pages =
        document.querySelectorAll(".website-page");

    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    const targetPage =
        document.getElementById("page" + pageNumber);


    if (targetPage) {

        targetPage.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


/* =========================================
   LOGIN
========================================= */

function login() {

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value;

    const error =
        document.getElementById("login-error");


    /*
        Password intentionally does not matter.
        Whatever password she types will work.
    */


    if (username === "FizaPiza") {

        error.innerHTML = "";

        localStorage.setItem(
            "fizaLoggedIn",
            "true"
        );


        showPage(2);


        createHeartExplosion();

    }

    else {

        error.innerHTML =
            "Hmm... that's not my Fiza Piza 🥺💜";

    }

}


/* =========================================
   LOVE LETTER
========================================= */

function openLetter() {

    const letter =
        document.getElementById("love-letter");


    if (letter) {

        letter.classList.remove("hidden");

        createHeartExplosion();


        /*
            Scroll to the letter after opening
        */

        setTimeout(function() {

            letter.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 200);

    }

}


/* =========================================
   MUSIC
========================================= */

let currentSong = null;


function playSong(songId) {

    const song =
        document.getElementById(songId);

    const status =
        document.getElementById("music-status");


    if (!song) {
        return;
    }


    /*
        Stop currently playing song
    */

    if (
        currentSong &&
        currentSong !== song
    ) {

        currentSong.pause();

        currentSong.currentTime = 0;

    }


    currentSong = song;


    /*
        Play / pause selected song
    */

    if (song.paused) {

        const playPromise =
            song.play();


        if (playPromise !== undefined) {

            playPromise
                .then(function() {

                    if (status) {

                        status.innerHTML =
                            "🎵 Playing a little song for you... 💜";

                    }

                })
                .catch(function() {

                    if (status) {

                        status.innerHTML =
                            "🎵 Click again to play the song.";

                    }

                });

        }

    }

    else {

        song.pause();


        if (status) {

            status.innerHTML =
                "🎵 Music paused... 💕";

        }

    }

}


/* =========================================
   MARRIAGE ANSWER
========================================= */

function sayYes() {

    const message =
        document.getElementById("final-message");


    if (!message) {
        return;
    }


    message.classList.remove("hidden");


    createHeartExplosion();


    /*
        Scroll smoothly to the answer
    */

    setTimeout(function() {

        message.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    }, 200);

}


/* =========================================
   HEART EXPLOSION
========================================= */

function createHeartExplosion() {

    const hearts = [

        "💜",
        "🩷",
        "💕",
        "💗",
        "✨",
        "🌸",
        "🎀"

    ];


    for (
        let i = 0;
        i < 25;
        i++
    ) {

        const heart =
            document.createElement("div");


        heart.innerHTML =
            hearts[
                Math.floor(
                    Math.random() *
                    hearts.length
                )
            ];


        heart.style.position =
            "fixed";


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.top =
            Math.random() * 100 + "vh";


        heart.style.fontSize =
            (15 + Math.random() * 25) +
            "px";


        heart.style.zIndex =
            "9999";


        heart.style.pointerEvents =
            "none";


        document.body.appendChild(
            heart
        );


        heart.animate(

            [

                {
                    transform:
                        "translateY(0) scale(1)",

                    opacity: 1
                },

                {

                    transform:
                        `translateY(-${
                            100 +
                            Math.random() * 200
                        }px)
                        scale(1.5)
                        rotate(${
                            Math.random() * 360
                        }deg)`,

                    opacity: 0

                }

            ],

            {

                duration:
                    1200 +
                    Math.random() * 1000,

                easing:
                    "ease-out"

            }

        );


        setTimeout(
            function() {

                heart.remove();

            },
            2300
        );

    }

}


/* =========================================
   INITIAL PAGE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        showPage(1);

    }
);