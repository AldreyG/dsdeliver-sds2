import React from 'react'; 
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Order from './Orders';
import OrderDetails from './OrderDetails/index';



const Stack = createStackNavigator();

function Routes() {
    return(
    <NavigationContainer>
        <Stack.Navigator headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: '#FFF'

        }}}>

        <Stack.Screen name="Home" component={Home}></Stack.Screen>

        <Stack.Screen name="Order" component={Order}></Stack.Screen>

        <Stack.Screen name="OrderDetails" component={OrderDetails}></Stack.Screen>

        </Stack.Navigator>

    </NavigationContainer>

    )
}

export default Routes;