import { View, Text, FlatList } from 'react-native';
import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductsContext';

const CheckoutScreen = () => {
  const state = useContext(ProductContext);
  return (
    <View>
      <Text style={{textAlign:"center", fontSize:35, fontWeight:"bold", color:"blue"}}>CheckoutScreen </Text>
       <Text style={{textAlign:"center", fontSize:25, fontWeight:"bold",margin:7,padding:10, color:"red"}} >Number of Items: {state.myProducts.length}</Text>
      <FlatList
        data={state.myProducts}
        renderItem={({ item }) => {
          return (
            <View style={{ margin: 5, flexDirection: 'row', }}>
              <View style={{ flex: 2 }}>
                <Text
                  style={{ fontSize: 25, fontWeight: 'bold', color: "#000", margin: 3, padding: 5, borderWidth: 1, borderColor: "gray", borderRadius:10 }}
                  numberOfLines={1}>
                  {item.title}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CheckoutScreen;
