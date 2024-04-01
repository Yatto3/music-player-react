
const Tracks = [
    {
        trackName : " All Eyez On Me (Dj Belite Remix)" ,
        trackAuthor : "2Pac, Big Syke",
        audioSrc : "src/assets/Tracks/2Pac, Big Syke – All Eyez On Me (Dj Belite Remix).mp3",
        imgSrc : "src/assets/database/TraksImg/512x512bb.jpg",
        id : 0,
    },

    {
        trackName : "Threshold" ,
        trackAuthor : "Slayer",
        audioSrc : "src/assets/Tracks/Slayer – Threshold.mp3",
        imgSrc : "src/assets/database/TraksImg/512x512bbb.jpg",
        id : 1,
    },

    {
        trackName : "Spoiler" ,
        trackAuthor : "Hyper",
        audioSrc : "src/assets/Tracks/Hyper – Spoiler.mp3",
        imgSrc : "src/assets/database/TraksImg/Hyper – Spoiler.jpg",
        id : 2,
    },

    {
        trackName : "Disposable Heroes" ,
        trackAuthor : "Metallica",
        audioSrc : "src/assets/Tracks/Metallica – Disposable Heroes.mp3",
        imgSrc : "src/assets/database/TraksImg/Metallica - Disposable Heroes.jpg",
        id : 3,
    },

    {
        trackName : "Nothing Else Matters" ,
        trackAuthor : "Metallica",
        audioSrc : "src/assets/Tracks/Metallica – Nothing Else Matters.mp3",
        imgSrc : "src/assets/database/TraksImg/Metallica – Nothing Else Matters.jpg",
        id : 4,
    },

    {
        trackName : "Sorry Bout That" ,
        trackAuthor : "Yeat",
        audioSrc : "src/assets/Tracks/yeat-sorry-bout-that.mp3",
        imgSrc : "src/assets/database/TraksImg/Yeat – Sorry Bout That.jpg",
        id : 5,
    },

    {
        trackName : "Taliban" ,
        trackAuthor : "Yeat",
        audioSrc : "src/assets/Tracks/Yeat – Taliban.mp3",
        imgSrc : "src/assets/database/TraksImg/Yeat – Taliban.jpg",
        id : 6,
    },
   
]


export default Tracks;

export function shuffle(array){
    for(let i = array.length - 1 ; i >= 0 ; i--){
        let temp_index = array[i];
        let random_index = Math.floor(Math.random() * array.length);

        array[i] = array[random_index];
        array[random_index] = temp_index ;
    }
}