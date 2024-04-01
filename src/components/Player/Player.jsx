import { useEffect, useState } from "react";
import styles from "./Player.module.css"
import Tracks from "../../assets/database/Tracks";
import { shuffle } from "../../assets/database/Tracks";

function Player(){
    
    
    let pauseSrc = "src/assets/img/Play/icons8-pause-24.png";
    let playSrc = "src/assets/img/Play/icons8-play-black-24.png"

    const [volume , setVolume] = useState(0.5);
    const [audioElem , setAudioElem] = useState(null);
    const [isPlaying , setIsPlaying] = useState(false);
    const [isShuffled , setIsShuffled] = useState(false);
    const [index , setIndex] = useState(0);
    const [src , setSrc] = useState(playSrc);

    useEffect(() => {
        setAudioElem(document.querySelector("audio"));
        
    },[])

    const handlePlay = () => {
        if (!isPlaying){
            changeTitle(index)
            setSrc(pauseSrc);
            audioElem.volume = volume
            audioElem.play();
            setIsPlaying(true);
        } else {
            setSrc(playSrc);
            audioElem.pause();
            setIsPlaying(false);
        }
        
    }

    const handleBackwards = () => {
        if (index <= 0 ) {
            audioElem.pause();
            setSrc(playSrc);
            return
        }
        setIndex(ind => ind - 1);
        changeTitle(index-1);
        setSrc(pauseSrc);
        

    }

    const handleForwards = () => {
        setIndex(ind => ind + 1);
        if (index >= Tracks.length - 1 ) {
            setIndex(Tracks.length-1);
            setSrc(playSrc);
            audioElem.pause();
            setIsPlaying(false);
        }
        
        changeTitle(index+1);
        setSrc(pauseSrc);
        audioElem.autoplay = true;
        
    }

    const handleVolumeChange = (e) => {
        setVolume(e.target.value / 100 .toFixed(2));
        audioElem.volume = volume;
    }
    
    const handleShuffle = (e) => {
        
        if(!isShuffled){
            shuffle(Tracks);
            e.target.src = "src/assets/img/Shuffle/icons8-shuffle-pink-24.png";
            setIsShuffled(true);
            return;
        } else {
            Tracks.sort((item1,item2) => item1.id - item2.id );
            e.target.src = "src/assets/img/Shuffle/icons8-shuffle-black-24.png";
            setIsShuffled(false);
            setSrc(pauseSrc);
            return;
        }
    }

    const handleRepeat = (e) => {
        if(!audioElem.loop){
            e.target.src = "src/assets/img/repeat/icons8-repeat-pink-24.png"
            audioElem.loop = true ;
        } else {
            e.target.src = "src/assets/img/repeat/icons8-repeat-black-24.png"
            audioElem.loop = false ;
        }
    }

    const changeTitle = (current_index) => {
        document.title = Tracks[current_index].trackAuthor + "-" +  Tracks[current_index].trackName;
    }

    return(
        <div className={styles.playerContainer}>
            <div className={styles.musicPicContainer}>
                <div className={styles.musicPic}>
                    <img src={Tracks[index].imgSrc} alt="track-img" draggable = "false" />
                </div>
            </div>
            <div className={styles.trackInfo}>
                    <h4>{Tracks[index].trackName}</h4>
                    <h3>{Tracks[index].trackAuthor}</h3>
            </div>
            <div className={styles.operationalButtons}>
                <div id="repeat-btn">
                    <img 
                        src="src\assets\img\repeat\icons8-repeat-black-24.png" 
                        alt="repeat-button" 
                        onClick={handleRepeat}
                    />
                </div>
                <div id={styles.navigation}>
                    <div id="backwards-btn">
                        <img 
                            src="src\assets\img\Backwards\icons8-backward--black--24.png" 
                            alt="backwards-button" 
                            onClick={handleBackwards}
                        />
                    </div>
                    <div id="play-btn">
                        <img 
                            src={src} 
                            alt="play-btn" 
                            onClick={handlePlay}
                        />
                    </div>
                    <div id="forwards-btn">
                        <img 
                            src="src\assets\img\Backwards\icons8-backward--black--24.png" 
                            alt="forwards-btn" 
                            style={{transform : 'rotateY(180deg)'}}
                            onClick={handleForwards}
                        />
                    </div>
                </div>
                <div id="shuffle-btn">
                    <img 
                        src="src\assets\img\Shuffle\icons8-shuffle-black-24.png" 
                        alt="shuffle-btn"
                        onClick={handleShuffle} 
                    />
                </div>
            </div>
            <div className={styles.volumeBar}>
                <div className={styles.bar}>
                    <img src="src\assets\img\icons8-low-music-24.png" alt="" />
                    <input 
                        type="range" 
                        step={1} 
                        max={100}
                        min={0}
                        onChange={handleVolumeChange}
                    />
                    <img src="src\assets\img\icons8-speaker-26.png" alt="" />
                </div>
            </div>

            <audio  src={Tracks[index]?.audioSrc}></audio>
        </div>
    )
}


export default Player