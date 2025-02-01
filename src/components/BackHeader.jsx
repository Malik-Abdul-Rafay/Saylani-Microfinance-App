import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon1 from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const BackHeader = ({ heading }) => {
    const navigation = useNavigation();
    const [isClicked, setIsClicked] = useState(false);

    const handleBackPress = () => {
        if (!isClicked) {
            setIsClicked(true);
            navigation.goBack();
        }
    };

    return (
        <View style={styles.header}>
            <View style={styles.headerLeft}>
                <TouchableOpacity
                    style={styles.chevronIconContainer}
                    onPress={handleBackPress}
                    disabled={isClicked} // Disable the button after the first click
                >
                    <Icon1 name="chevron-small-left" size={30} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{heading}</Text>
            </View>
        </View>
    );
};

export default BackHeader;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 14,
        paddingHorizontal: 15,
        paddingTop: 15,
        paddingBottom: 10,
        backgroundColor: '#fff',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    chevronIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 60,
        width: 45,
        height: 45,
        backgroundColor: '#ECF0F4',
    },
    headerTitle: {
        fontSize: 20,
        color: '#000',
        fontFamily: 'Sen-Bold',
    },
});