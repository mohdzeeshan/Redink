import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {removeItem} from '../../redux/reducers';

const ListPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.auth.currentList);
  const username = useSelector(state => state.auth.currentUser.username);

  const ListItemCard = ({item, index}) => {
    return (
      <View style={styles.itemContainer}>
        <Text>{item}</Text>
        <TouchableOpacity
          onPress={() => {
            dispatch(removeItem({username: username, index: index}));
          }}>
          <MaterialCommunityIcons name="delete" color={'#8E2300'} size={25} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {items.length > 0 ? (
        <FlatList
          width="80%"
          data={items}
          renderItem={({item, index}) => {
            return <ListItemCard item={item} index={index} />;
          }}
        />
      ) : (
        <Text> No items added</Text>
      )}
    </SafeAreaView>
  );
};

export default ListPage;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    paddingTop: 20,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
  },
});
