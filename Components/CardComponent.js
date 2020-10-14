import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';

function CardComponent() {
    return (
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={{ uri: 'https://steemitimages.com/u/anpigon/avatar' }} />
                    <Body>
                        <Text>Anpigon</Text>
                        <Text note>Oct 08, 2020</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem cardBody>
                <Image
                    source={{ uri: 'https://user-images.githubusercontent.com/3969643/51441420-b41f1c80-1d14-11e9-9f5d-af5cd3a6aaae.png' }}
                    style={{ height: 200, width: null, flex: 1 }}
                />
            </CardItem>
            <CardItem style={{ height: 45 }}>
                <Left>
                    <Button transparent>
                        <Icon name="heart" style={{ color: 'black' }} />
                    </Button>
                    <Button transparent>
                        <Icon name="chatbubbles" style={{ color: 'black' }} />
                    </Button>
                    <Button transparent>
                        <Icon name="send" style={{ color: 'black' }} />
                    </Button>
                </Left>
            </CardItem>
            <CardItem style={{ height: 20 }}>
                <Text>101 likes</Text>
            </CardItem>
            <CardItem>
                <Text>
                    <Text style={{ fontWeight: '900' }}>Anpigon</Text>
                </Text>
            </CardItem>
        </Card>
    );
};

export default CardComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});