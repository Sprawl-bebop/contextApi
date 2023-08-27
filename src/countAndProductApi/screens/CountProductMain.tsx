import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import products from '../../countAndProductApi/contextAPI/products.json';


const Stack = createNativeStackNavigator();


import Products from '../../countAndProductApi/screens/Products';
import CheckoutScreen from '../../countAndProductApi/screens/CheckoutScreen';

import {ProductsProvider} from '../../countAndProductApi/context/ProductsContext';


function CountProductMain(): JSX.Element {

    return (
        <ProductsProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName='Products'>
              <Stack.Screen name="Products" component={Products} />
              <Stack.Screen name="Checkout" component={CheckoutScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </ProductsProvider>
      );

}


export default CountProductMain;

// Provider, Value Consumer
