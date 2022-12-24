import {View, Text, FlatList} from 'react-native';
import React from 'react';
import AppWrapper from '../../components/AppWrapper';
import {FIRitem, HomeHeader} from '../../components';
import {styles} from './styles';
const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const Home = () => {
  const data = [
    {
      Internalid: 157276,
      firno: '05/2017',
      token: 'b5f4a8f31d754754bd715aab068d5413',
    },
    {
      Internalid: 157308,
      firno: '23/2017',
      token: 'b5f4a8f31d754754bd715aab068d5413',
    },
    {
      Internalid: 157310,
      firno: '17/2017',
      token: 'b5f4a8f31d754754bd715aab068d5413',
    },
    {
      Internalid: 157276,
      firno: '05/2017',
      token: 'b5f4a8f31d754754bd715aab068d5413',
    },
    {
      Internalid: 157308,
      firno: '23/2017',
      token: 'b5f4a8f31d754754bd715aab068d5413',
    },
    {
      Internalid: 157310,
      firno: '17/2017',
      token: 'b5f4a8f31d754754bd715aab068d5413',
    },
    {
      Internalid: 157276,
      firno: '05/2017',
      token: 'b5f4a8f31d754754bd715aab068d5413',
    },
    {
      Internalid: 157308,
      firno: '23/2017',
      token: 'b5f4a8f31d754754bd715aab068d5413',
    },
    {
      Internalid: 157310,
      firno: '17/2017',
      token: 'b5f4a8f31d754754bd715aab068d5413',
    },
    {
      Internalid: 157276,
      firno: '05/2017',
      token: 'b5f4a8f31d754754bd715aab068d5413',
    },
    {
      Internalid: 157308,
      firno: '23/2017',
      token: 'b5f4a8f31d754754bd715aab068d5413',
    },
    {
      Internalid: 157310,
      firno: '17/2017',
      token: 'b5f4a8f31d754754bd715aab068d5413',
    },
    {
      Internalid: 157276,
      firno: '05/2017',
      token: 'b5f4a8f31d754754bd715aab068d5413',
    },
    {
      Internalid: 157308,
      firno: '23/2017',
      token: 'b5f4a8f31d754754bd715aab068d5413',
    },
    {
      Internalid: 157310,
      firno: '17/2017',
      token: 'b5f4a8f31d754754bd715aab068d5413',
    },
  ];
  const DATA1 = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  const firItem = ({item}) => {
    return <FIRitem data={item} />;
  };
  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <AppWrapper>
      <HomeHeader />
      <FlatList
        contentContainerStyle={styles.container}
        data={data}
        renderItem={firItem}
        keyExtractor={item => item.id}
      />
    </AppWrapper>
  );
};

export default Home;
