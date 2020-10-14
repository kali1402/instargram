import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Icon } from 'native-base';

function AddMediaTab({ navigation }) {

    // 해당 탭의 아이콘을 보여주어야 하기 때문에 native-base 의 Icon 을 불러 home 아이콘을 넣어준다.
    useLayoutEffect(() => {
        navigation.setOptions({
            tabBarIcon: ({ color }) => (
                <Icon name="add-circle" style={{ color: color }} />
            )
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text>AddMediaTab</Text>
        </View>
    );
};

export default AddMediaTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});