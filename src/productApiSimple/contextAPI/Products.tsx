import {View, Text, FlatList, Button} from 'react-native';
import React, {useContext} from 'react';
import {ProductContext} from '../context/ProductsContext';
import {useRoute} from '@react-navigation/native';
import ProductMain from '../screens/ProductMain';

const Products = () => {
  const {products} = useContext(ProductContext);
//   const state = useContext(CountContext)
//   const route = useRoute();
// state.count, state.products
//   const {products} = route.params;
//   console.log('products', countState.count);

//   return (
//     <View>
//       <Text>Logged IN usename</Text>
//       <Text>Cart count:{state.cartCount}</Text>
//       <Button
//         onPress={() => {
//           state.incrementCount()
//         }}
//         title="Increment Count"
//       />
//     </View>
//   );

  return (
    <FlatList
      data={products}
      renderItem={({item}) => {
        return (
          <View style={{margin: 10, flexDirection: 'row'}}>
          <View style={{flex: 2}}>
            <Text
              style={{fontSize: 20, fontWeight: 'bold', color:"#000", margin:3, padding:5, borderWidth:1, borderColor:"gray"}}
              numberOfLines={1}>
              {item.title}
            </Text>
          </View>
          </View>
        );
      }}
    />
  );
};

export default Products;
