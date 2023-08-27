import React,{useContext} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import products from '../contextAPI/products.json';


import Products from '../contextAPI/Products';
import { ProductContext, ProductsProvider } from '../context/ProductsContext';


const Stack = createNativeStackNavigator();

function ProductMain(): JSX.Element {

  // Provider,Conusmer,Value
  const {products, isLoading} = useContext(ProductContext);

  return (
    // <ProductContext.Provider value={{products, isLoading}} >

    <ProductsProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Products">
          <Stack.Screen
            name="Products"
            component={Products}
            initialParams={{
              products,
            }}
            options={{headerShown: true}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ProductsProvider>
    // </ProductContext.Provider>

  );
}


export default ProductMain;
