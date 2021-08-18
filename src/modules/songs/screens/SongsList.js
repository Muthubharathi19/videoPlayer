import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import appTheme from '../../../../constants/theme';

const songs = [
    {
        id: 1,
        title: 'Peru 8K HDR 60FPS (FUHD)...',
        duration: '04:23',
        songImage: require('../../../../././assets/thumbnail1.jpg'),
        url: '1La4QzGeaaQ',

    },
    {
        id: 2,
        title: 'Bulgaria 8K HDR 60P (FUHD)...',
        duration: '04:23',
        songImage: require('../../../../././assets/thumbnail2.jpg'),
        url: 'N1-Jmq7BLFE',
    },
    {
        id: 3,
        title: 'Winter Saint Petersburg Russia 6K. Shot on Zenmuse X7 Drone// Зимний Петербург, аэросъёмка...',
        duration: '04:23',
        songImage: require('../../../../././assets/thumbnail4.jpg'),
        url: '8iSBVIHCRdc',
    },
    {
        id: 4,
        title: 'Magic of Hong Kong. Mind-blowing cyberpunk drone video of the craziest Asia’s city by Timelab.pro...',
        duration: '04:23',
        songImage: require('../../../../././assets/thumbnail3.jpg'),
        url: 'gYO1uk7vIcc',
    },
    {
        id: 5,
        title: '75 000 h.p. The Biggest Nuclear Icebreaker \\ 75 000 л.с. Атомный Ледокол Ямал...',
        duration: '04:23',
        songImage: require('../../../../././assets/thumbnail5.jpg'),
        url: 'bKaVhXn49xY',

    },

]


const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
function currentSong(id, title, duration, songImage, url, navigation) {
    navigation.navigate('IndividualSong',
        {
            id: id,
            url: url,
            title: title,
            duration: duration,
            songImage: songImage
        }
    )
}
const Item = ({ id, title, duration, songImage, url, navigation }) => (
    <TouchableOpacity style={styles.songCard} onPress={() => currentSong(id, title, duration, songImage, url, navigation)}>
        <View>
            <Image
                style={styles.image}
                source={songImage}
            />
        </View>
        <View style={{ flexDirection: 'column', flex: 1, marginLeft: 15 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.songTitle}>{title}</Text>
                <Text style={styles.duration}>{duration}</Text>
            </View>
        </View>
    </TouchableOpacity>
);
const SongsList = ({
    navigation,
}) => {
    const renderItem = ({ item }) => (
        <Item title={item.title} id={item.id} url={item.url} duration={item.duration} songImage={item.songImage} navigation={navigation} />
    );
    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)

    return (
        <View style={styles.container}>
            <Text style={styles.nameText}>Hello, Muthu!</Text>
            <Text style={styles.subText}>Enjoy your favourite Video</Text>
            <TextInput style={styles.input} placeholder="Looking for video? enter here" />
            <View>
                <Text style={styles.categoryTitle}>Suggested from youtube</Text>
                <Carousel
                    ref={isCarousel}
                    onSnapToItem={(index) => setIndex(index)}
                    layout={"default"}
                    data={songs}
                    renderItem={renderItem}
                    sliderWidth={SCREEN_WIDTH}
                    itemWidth={SCREEN_WIDTH}

                />
                <View
                    style={styles.tabBar}
                >
                    <Pagination
                        dotsLength={songs.length}
                        activeDotIndex={index}
                        carouselRef={isCarousel}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginHorizontal: 0,
                            backgroundColor: '#fff'
                        }}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                        tappableDots={true}
                    />
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: appTheme.COLORS.primary
    },

    nameText: {
        color: appTheme.COLORS.secondary,
        ...appTheme.FONTS.h1,
        paddingTop: appTheme.SIZES.padding,
        paddingLeft: appTheme.SIZES.padding,
        fontWeight: '700'
    },
    subText: {
        color: appTheme.COLORS.secondary,
        ...appTheme.FONTS.body3,
        paddingTop: 10,
        paddingLeft: appTheme.SIZES.padding
    },
    input: {
        // width: '85%',
        backgroundColor: appTheme.COLORS.secondary,
        margin: appTheme.SIZES.padding,
        borderRadius: appTheme.SIZES.radius,
        paddingLeft: appTheme.SIZES.padding
    },
    categoryTitle: {
        color: appTheme.COLORS.secondary,
        ...appTheme.FONTS.h2,
        paddingTop: appTheme.SIZES.padding,
        paddingLeft: appTheme.SIZES.padding,
        fontWeight: '700'

    },
    songCard: {
        color: appTheme.COLORS.secondary,
        borderBottomWidth: 0.2,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'column',
        padding: appTheme.SIZES.padding,
        height: 350
    },
    songTitle: {
        color: appTheme.COLORS.secondary,
        ...appTheme.FONTS.h3,
    },
    duration: {
        color: appTheme.COLORS.secondary,
        ...appTheme.FONTS.body4
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: appTheme.SIZES.radius,

    }
});

export default SongsList