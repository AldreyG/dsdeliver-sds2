import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../Header';
import OrderCard from '../OrderCard';
import {fetchOrders} from '../api';
import { Orders } from '../types';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useIsFocused, useNavigation } from '@react-navigation/native';

function Order() {

    const[orders, setOrders] = useState<Orders[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const fetchData = () => {
        setIsLoading(true);
        fetchOrders()
        .then(response => setOrders(response.data))
        .catch(() => Alert.alert('Houve um erro ao buscar os pedidos'))
        .finally(() => setIsLoading(false));
    }

    useEffect(() => {

       if (isFocused) {
           fetchData();
       }
    }, [isFocused]);

    const handleOnPress = (order: Orders) => {
        navigation.navigate('OrderDetails', {
            order
        });
    }

    return (
       
    <>
    <Header />
       <ScrollView  style={styles.container}>
        {isLoading  ? (
            <Text>Carregando pedidos...</Text>
            ) : (          
           orders.map(order => (
            <TouchableWithoutFeedback key={order.id} onPress={() => handleOnPress(order)}>
                <OrderCard order={order} />
            </TouchableWithoutFeedback>
           )))}
        </ScrollView>
    </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%'
    }
});

export default Order;