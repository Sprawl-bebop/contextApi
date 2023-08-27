import {View, Text, FlatList, ActivityIndicator, Pressable} from 'react-native';
import React, {useEffect} from 'react';

import {useContext} from 'react';
import {ProductContext} from '../context/ProductsContext';

const Products = ({navigation}: any) => {
  const state = useContext(ProductContext);

  // console.log('I am products screen', state.user);

  // if (!state.user) {
  //   navigation.naviate('login');
  // }

  if (state.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    // display loading also
    // display products from ProductContext using FLat list
    <View style={{flex: 1}}>
      <Pressable
        onPress={() => {
          navigation.navigate('Checkout');
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 26, textAlign: 'right', color:"green", padding:10}}>
          Cart Count: {state.myProducts.length}
        </Text>
      </Pressable>
      {state.errorMessage && (
        <Text style={{color: 'red', fontSize: 28, textAlign: 'center'}}>
          {state.errorMessage}
        </Text>
      )}

      <FlatList
        data={state.products}
        renderItem={({item}) => {
          return (
            <View style={{margin: 10, flexDirection: 'row', borderColor:"gray", borderWidth:1, padding:7}}>
              <View style={{flex: 2}}>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold'}}
                  numberOfLines={1}>
                  {item.title}
                </Text>
              </View>

              <Pressable
                onPress={() => {
                  state.addToCart(item);
                }}
                style={{
                  backgroundColor: 'blue',
                  width: 100,
                  borderRadius: 10,
                  margin:2,
                  padding:5
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 17,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    flex: 1,
                  }}>
                  Add
                </Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  state.removeFromCart(item);
                }}
                style={{
                  backgroundColor: 'red',
                  width: 100,
                  borderRadius: 10,
                  padding:5,
                  margin:2
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 17,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    flex: 1,
                  }}>
                  Remove
                </Text>
              </Pressable>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Products;
