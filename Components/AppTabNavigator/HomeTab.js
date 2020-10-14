import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Container, Content, Icon } from 'native-base';
import CardComponent from '../CardComponent'

function HomeTab({ navigation }) {

    useLayoutEffect(() => {
        navigation.setOptions({
            tabBarIcon: ({ color }) => (
                <Icon name="home" style={{ color: color }} />
            )
        });
    }, [navigation]);

    return (
        <Container style={styles.container}>
            <Content>
                <CardComponent />
            </Content>
        </Container>
    );
};

export default HomeTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});