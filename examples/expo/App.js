import React, {Component} from 'react';
import {Image, ListView, ScrollView, StyleSheet, View,} from 'react-native';

import {Overwrite} from 'react-native-elements-defaults/helpers';

const input = [
    new Overwrite('$colors', Overwrite.TYPE.FILE, Overwrite.SCOPE.DEFAULTS, {
        primary: '#9E9E9E',
        primary1: '#4d86f7',
        primary2: '#6296f9',
        secondary: '#8F0CE8',
        secondary2: '#00B233',
        secondary3: '#00FF48',
        grey0: '#393e42',
        grey1: '#43484d',
        grey2: '#5e6977',
        grey3: '#86939e',
        grey4: '#bdc6cf',
        grey5: '#e1e8ee',
        dkGreyBg: '#232323',
        greyOutline: '#bbb',
        searchBg: '#303337',
        disabled: '#dadee0',
        white: '#ffffff',
        error: '#ff190c',
    }),
    new Overwrite('$fonts', Overwrite.TYPE.FILE, Overwrite.SCOPE.DEFAULTS_DEEP, {
        ios: {},
        android: {},
    }),
    new Overwrite('Text', Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {
            fontFamily: 'Times New Roman',
        },
    }),
    new Overwrite('Icon', Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        iconStyle: {},
        containerStyle: {},
    }),
    new Overwrite('Badge', Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        containerStyle: {},
        wrapperStyle: {},
        textStyle: {},
    }),
    new Overwrite('Divider', Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
    }),
    new Overwrite('Search', Overwrite.TYPE.CLASS_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        containerStyle: {},
        inputStyle: {},
    }),
    new Overwrite('Slider', Overwrite.TYPE.CLASS_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        containerStyle: {},
        trackStyle: {},
        thumbStyle: {},
    }),
    new Overwrite('Avatar', Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        containerStyle: {},
        avatarStyle: {},
        titleStyle: {},
        overlayContainerStyle: {},
        iconStyle: {},
    }),
    new Overwrite('Button', Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        containerViewStyle: {},
        buttonStyle: {},
        textStyle: {},
        disabledStyle: {},
        activityIndicatorStyle: {},
    }),
    new Overwrite('ButtonGroup', Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        containerViewStyle: {},
        buttonStyle: {},
        textStyle: {},
        disabledStyle: {},
        activityIndicatorStyle: {},
    }),
    new Overwrite('Card', Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        containerStyle: {},
        wrapperStyle: {},
        titleStyle: {},
        featuredTitleStyle: {},
        featuredSubtitleStyle: {},
        dividerStyle: {},
        imageStyle: {},
        imageWrapperStyle: {},
    }),
    new Overwrite('CheckBox', Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        containerStyle: {},
        textStyle: {},
    }),
    new Overwrite('FeaturedTile', Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        iconContainerStyle: {},
        titleStyle: {},
        captionStyle: {},
        containerStyle: {},
        imageContainerStyle: {},
        contentContainerStyle: {},
    }),
    new Overwrite('Tile', Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        iconContainerStyle: {},
        titleStyle: {},
        captionStyle: {},
        containerStyle: {},
        imageContainerStyle: {},
        contentContainerStyle: {},
    }),
    new Overwrite('SocialIcon', Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        iconStyle: {},
        fontStyle: {},
    }),
    new Overwrite('Header', Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        outerContainerStyles: {},
        innerContainerStyles: {},
    }),
    new Overwrite('List', Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        containerStyle: {},
    }),
    new Overwrite('ListItem', Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        avatarStyle: {},
        avatarContainerStyle: {},
        avatarOverlayContainerStyle: {},
        containerStyle: {},
        wrapperStyle: {},
        titleStyle: {},
        titleContainerStyle: {},
        subtitleContainerStyle: {},
        subtitleStyle: {},
        rightTitleContainerStyle: {},
        rightTitleStyle: {},
        textInputStyle: {},
        textInputContainerStyle: {},
        disabledStyle: {},
    }),
    new Overwrite('PricingCard', Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        containerStyle: {},
        wrapperStyle: {},
    }),
    new Overwrite('Rating', Overwrite.TYPE.CLASS_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
    }),
    new Overwrite('FormInput', Overwrite.TYPE.CLASS_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        containerStyle: {},
        inputStyle: {},
    }),
    new Overwrite('FormLabel', Overwrite.TYPE.CLASS_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        containerStyle: {},
        labelStyle: {},
    }),
    new Overwrite('FormValidationMessage', Overwrite.TYPE.CLASS_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        containerStyle: {},
        labelStyle: {},
    }),
];

import rned from 'react-native-elements-defaults';
const {Badge, Header, Avatar, Button, ButtonGroup, Card, List, ListItem, Text, Tile, FormLabel, FormInput, FormValidationMessage
} = rned(input);

const users = [
    {
        name: 'anna',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    },
    {
        name: 'thot leader',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg',
    },
    {
        name: 'jsa',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg',
    },
    {
        name: 'talhaconcepts',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/talhaconcepts/128.jpg',
    },
    {
        name: 'andy vitale',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/andyvitale/128.jpg',
    },
    {
        name: 'katy friedson',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
    },
];

const log = () => console.log('this is an example method');

const list1 = [
    {
        title: 'Appointments',
        icon: 'av-timer',
    },
    {
        title: 'Trips',
        icon: 'flight-takeoff',
    },
    {
        title: 'Passwords',
        icon: 'fingerprint',
    },
    {
        title: 'Pitches',
        icon: 'lightbulb-outline',
    },
    {
        title: 'Updates',
        icon: 'track-changes',
    },
];

const list2 = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President',
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman',
    },
    {
        name: 'Amanda Martin',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
        subtitle: 'CEO',
    },
    {
        name: 'Christy Thomas',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
        subtitle: 'Lead Developer',
    },
    {
        name: 'Melissa Jones',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/nuraika/128.jpg',
        subtitle: 'CTO',
    },
];

const ButtonX = () => <Button
    raised
    buttonStyle={{ backgroundColor: 'blue' }}
    icon={{ name: 'cached' }}
    title='BUTTON WITH ICON'/>;

class App extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });

        this.state = {
            selectedIndex: 0,
            value: 0.5,
            dataSource: ds.cloneWithRows(list1),
        };

        this.updateIndex = this.updateIndex.bind(this);
        this.renderRow = this.renderRow.bind(this);
    }

    updateIndex(selectedIndex) {
        this.setState({ selectedIndex });
    }

    renderRow(rowData, sectionID) {
        return (
            <ListItem
                key={sectionID}
                onPress={log}
                title={rowData.title}
                icon={{ name: rowData.icon }}
            />
        );
    }

    render() {
        const { navigation } = this.props;
        const buttons = ['Button1', 'Button2'];
        const { selectedIndex } = this.state;

        return (
            <View>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <ScrollView>
                    <Badge><Text>TEST</Text></Badge>
                    <Text style={{
                        fontFamily: 'Arial',
                    }}>Test TEEXT</Text>
                    <FormLabel>Name</FormLabel>
                    <FormInput/>
                    <FormValidationMessage>Error message</FormValidationMessage>
                    <List>
                        {list2.map((l, i) => (
                            <ListItem
                                roundAvatar
                                avatar={{ uri: l.avatar_url }}
                                key={i}
                                onPress={log}
                                title={l.name}
                                subtitle={l.subtitle}
                            />
                        ))}
                    </List>
                    <List>
                        {
                            list2.map((l, i) => (
                                <ListItem
                                    key={i}
                                    leftIcon={{ name: 'user-circle-o', type: 'font-awesome', style: { color: 'blue' } }}
                                    title={l.name}
                                    titleStyle={{ color: 'red' }}
                                    subtitle={l.subtitle}
                                    rightTitle='11:00am'
                                    rightTitleStyle={{ color: 'green' }}
                                />
                            ))
                        }
                    </List>
                    <List>
                        <ListItem
                            roundAvatar
                            title="Limited supply! Its like digital gold!"
                            subtitle={
                                <View style={styles.subtitleView}>
                                    <Text style={styles.ratingText}>5 months ago</Text>
                                </View>
                            }
                        />
                    </List>
                    <List>
                        <ListItem
                            onPress={log}
                            title={'Name w/o placeholder'}
                            textInput={true}
                            hideChevron
                        />
                        <ListItem
                            onPress={log}
                            title={'Name w/ placeholder'}
                            textInput={true}
                            textInputPlaceholder={'John Doe'}
                            hideChevron
                        />
                    </List>
                    <List>
                        <ListView
                            renderRow={this.renderRow}
                            dataSource={this.state.dataSource}
                        />
                    </List>
                    <View style={{ marginTop: 20 }}>
                        <ButtonGroup
                            textStyle={{ fontSize: 13 }}
                            onPress={this.updateIndex}
                            selectedIndex={selectedIndex}
                            buttons={buttons}
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Button
                            style={{ margin: 5 }}
                            buttonStyle={{ backgroundColor: 'lightblue' }}
                            title='BUTTON'/>
                        <ButtonX />
                        <Button
                            style={{ margin: 5 }}
                            icon={{ name: 'code' }}
                            title='LARGE WITH RIGHT ICON'/>

                        <Button
                            style={{ margin: 5 }}
                            icon={{ name: 'envira', type: 'font-awesome' }}
                            title='LARGE WITH RIGHT ICON'/>

                        <Button
                            style={{ margin: 5 }}
                            large
                            icon={{ name: 'squirrel', type: 'octicon', buttonStyle: styles.someButtonStyle }}
                            title='OCTICON'/>
                    </View>
                    <View style={styles.container}>
                        <Card title="CARD WITH DIVIDER">
                            {users.map((u, i) => {
                                return (
                                    <View key={i} style={styles.user}>
                                        <Image
                                            style={styles.image}
                                            source={{ uri: u.avatar }}
                                        />
                                        <Text style={styles.name}>{u.name}</Text>
                                    </View>
                                );
                            })}
                        </Card>
                        <Card containerStyle={{ marginTop: 15 }} title="FONTS">
                            <Text style={styles.fonts} h1>h1 Heading</Text>
                            <Text style={styles.fonts} h2>h2 Heading</Text>
                            <Text style={styles.fonts} h3>h3 Heading</Text>
                            <Text style={styles.fonts} h4>h4 Heading</Text>
                            <Text style={styles.fonts}>Normal Text</Text>
                        </Card>
                        <Card
                            containerStyle={{ marginTop: 15, marginBottom: 15 }}
                            title="TILES"
                        >
                            <View>
                                <Tile
                                    imageSrc={{
                                        uri: 'https://static1.squarespace.com/static/5477887ae4b07c97883111ab/5478c08fe4b0fa4e5a552532/57e101f3579fb32aef30d4af/1491426124625/Porthmeor+Sunset+21.jpg',
                                    }}
                                    title="When I admire the wonders of a sunset or the beauty of the moon, my soul expands in the worship of the creator."
                                    titleStyle={{ fontSize: 20 }}
                                    featured
                                    caption="Mahatma Gandhi"
                                    activeOpacity={1}
                                    width={310}
                                />
                            </View>
                            <View style={{ paddingTop: 20 }}>
                                <Tile
                                    imageSrc={{
                                        uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                                    }}
                                    icon={{
                                        name: 'heart',
                                        type: 'font-awesome',
                                        size: 60,
                                        color: 'red',
                                    }}
                                    featured
                                    activeOpacity={0.8}
                                    onPress={() => {
                                        'Tile pressed';
                                    }}
                                    width={310}
                                />
                            </View>
                            <View style={{ paddingTop: 20 }}>
                                <Tile
                                    imageSrc={{
                                        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Half_Dome_from_Glacier_Point%2C_Yosemite_NP_-_Diliff.jpg/320px-Half_Dome_from_Glacier_Point%2C_Yosemite_NP_-_Diliff.jpg',
                                    }}
                                    title="Half Dome, Yosemite"
                                    titleStyle={{ fontSize: 20 }}
                                    activeOpacity={1}
                                    width={310}
                                    contentContainerStyle={{ height: 70 }}
                                >
                                    <View
                                        style={{
                                            flex: 1,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <Text style={{ color: 'green' }}>Visit</Text>
                                        <Text style={{ color: 'blue' }}>Find out More</Text>
                                    </View>
                                </Tile>
                            </View>
                        </Card>
                        <Card
                            containerStyle={{
                                marginTop: 15,
                                marginBottom: 15,
                                height: 230,
                                paddingLeft: 10,
                            }}
                            title="AVATARS"
                        >
                            <View style={{ margin: 40, flex: 1 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Avatar
                                        small
                                        rounded
                                        source={{
                                            uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                                        }}
                                        onPress={() => console.log('Works!')}
                                        containerStyle={{ margin: 10 }}
                                        activeOpacity={0.7}
                                    />
                                    <Avatar
                                        medium
                                        icon={{ name: 'home', color: 'pink' }}
                                        onPress={() => console.log('Works!')}
                                        containerStyle={{ margin: 10, backgroundColor: 'violet' }}
                                        activeOpacity={0.7}
                                    />
                                    <Avatar
                                        large
                                        rounded
                                        title="BP"
                                        onPress={() => console.log('Works!')}
                                        containerStyle={{ margin: 10, backgroundColor: 'red' }}
                                        activeOpacity={0.7}
                                    />
                                    <Avatar
                                        large
                                        rounded
                                        source={{
                                            uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                                        }}
                                        onPress={() => console.log('Works!')}
                                        containerStyle={{ margin: 10 }}
                                        activeOpacity={0.7}
                                    />
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 80
                                }}>
                                    <Avatar
                                        medium
                                        rounded
                                        title="MT"
                                        showEditButton
                                        onPress={() => console.log('Works!')}
                                        containerStyle={{ margin: 10, backgroundColor: 'black' }}
                                        activeOpacity={0.7}
                                    />
                                    <Avatar
                                        large
                                        rounded
                                        showEditButton
                                        onEditPress={() => console.log('Works!')}
                                        source={{
                                            uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                                        }}
                                        onPress={() => console.log('Works!')}
                                        containerStyle={{ margin: 10 }}
                                        activeOpacity={0.7}
                                    />
                                </View>
                            </View>
                        </Card>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        backgroundColor: 'white'
    },
    heading: {
        color: 'white',
        marginTop: 10,
        fontSize: 22,
    },
    fonts: {
        marginBottom: 8,
    },
    user: {
        flexDirection: 'row',
        marginBottom: 6,
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
    },
    social: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    subtitleView: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 5,
    },
    ratingImage: {
        height: 19.21,
        width: 100,
    },
    ratingText: {
        paddingLeft: 10,
        color: 'grey',
    },
});

export default App;
