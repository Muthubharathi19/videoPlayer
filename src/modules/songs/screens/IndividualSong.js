import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Dimensions
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const IndividualSong = ({ route }) => {
    const { id, url } = route.params;
    const [selectedSongs, setSelectedSongs] = useState({
        id: id,
        url: url
    });

    return (
        <View
            style={{ transform: [{ rotate: "90deg" }] }}
        >
            <YoutubePlayer
                play={true}
                videoId={selectedSongs.url}
                height={SCREEN_WIDTH}
                width={SCREEN_HEIGHT}
                webViewProps={{
                    injectedJavaScript: `
              var element = document.getElementsByClassName('container')[0];
              element.style.position = 'unset';
              element.style.paddingBottom = 'unset';
              true;
            `,
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({

});

export default IndividualSong;