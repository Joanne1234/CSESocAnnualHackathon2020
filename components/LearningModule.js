import React, {useRef, useState} from 'react';
import {View, Dimensions} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

function LearningModule({videoId}) {
    const playerRef = useRef(null);
    const [playing, setPlaying] = useState(true);
    const height = Dimensions.get('window').height/2;
    const width = Dimensions.get('window').width-70;
    
    return (<View>
        <YoutubePlayer
        // code taken from https://github.com/davidohayon669/react-native-youtube
        ref={playerRef}
        height={height}
        width={width}
        videoId={videoId}
        play={playing}
        onChangeState={event => console.log(event)}
        //onReady={() => console.log("ready")}
        onError={e => console.log(e)}
        //onPlaybackQualityChange={q => console.log(q)}
        volume={50}
        playbackRate={1}
        initialPlayerParams={{
            cc_lang_pref: "us",
            showClosedCaptions: true
        }}
        allowWebViewZoom={true}
        />
    </View>)
}

export default LearningModule;