import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {styles} from './style';
import HeaderComponent from '../../components/HeaderComponent';
import {TextComponent} from '../../components/TextComponent';
import {colors} from '../../theme/color';
import {carla, morgon, william} from '../../assets/images';
import {hp, wp} from '../../theme/responsive';
import Divider from '../../components/Divider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomModal from '../../components/BottomModalComponent.js';
import FilterTypeComponent from '../../components/FilterTypeComponent';

const ContractorScreen = ({navigation}) => {

    
    
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState([]);
  
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
  
    const toggleFilter = (filter) => {
      setSelectedFilters([filter]);
    };
  
    const renderFilterItem = (filter, index) => (
      <React.Fragment key={index}>
        <TouchableOpacity
          onPress={() => toggleFilter(filter)}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: wp('95'),
            padding: 10,
          }}>
         { <Ionicons
            name={selectedFilters.includes(filter) ?'checkmark-outline':"close"}
            size={hp('3')}
            color={selectedFilters.includes(filter) ? colors.purpleColor : colors.placeholderColor} // Change color based on selection
            style={{ marginRight: wp('2') }}
          />}
          <TextComponent text={filter} styles={{...styles.filterType,color:selectedFilters.includes(filter)?colors.purpleColor:colors.placeholderColor}} />
          <View></View>
        </TouchableOpacity>
        <Divider dividerStyle={{ width: wp('100') }} />
      </React.Fragment>
    );


  const renderItem = ({item, index}) => {
    return (
      <>
        <TouchableOpacity
            onPress={()=>navigation.navigate('ContractorProfile',{items:item})}
          style={{
            backgroundColor: colors.white,
            width: wp('100'),
            padding: 15,
          }}>
          <View style={styles.contractor}>
            <Image
              source={item.image}
              style={{width: wp('20'), height: hp('15'), resizeMode: 'contain'}}
            />
            <View style={{padding: 10}}>
              <TextComponent text={item.name} styles={styles.name} />
              <View style={styles.star}>
                <Ionicons
                  name={'star'}
                  size={hp('2')}
                  color={colors.primary}
                  style={{marginRight: wp('2')}}
                />
                <TextComponent text={'5.0 (10 Reviews)'} styles={styles.des} />
              </View>
              <View style={styles.star}>
                <Ionicons
                  name={'checkmark-circle-outline'}
                  size={hp('2')}
                  color={colors.purpleColor}
                  style={{marginRight: wp('2')}}
                />
                <TextComponent
                  text={'14 waiting in Line jobs'}
                  styles={styles.des}
                />
              </View>
              <View style={styles.star}>
                <Ionicons
                  name={'time-outline'}
                  size={hp('2')}
                  color={colors.purpleColor}
                  style={{marginRight: wp('2')}}
                />
                <TextComponent
                  text={'2 hour minimum required'}
                  styles={styles.des}
                />
              </View>
            </View>
          </View>
          <View style={styles.contractorLastView}>
            <TextComponent
              text={'I have a 100% rating after completing 150+ tasks.'}
            />
            <TextComponent
              text={'View profile'}
              styles={{color: colors.purpleColor}}
            />
          </View>
        </TouchableOpacity>
        <Divider />
      </>
    );
  };
  return (
    <>
      <SafeAreaView />
      <HeaderComponent
        IconOnPress={toggleModal}
        onPress={() => navigation.goBack()}
        text={'Select Contractor'}
        rightIconName={'options'}
        iconName={'arrow-back'}
      />
      <View style={styles.container}>
        <FlatList
          keyExtractor={index => index.id.toString()}
          renderItem={renderItem}
          data={[
            {id: 0, image: morgon, name: 'Morgan L.'},
            {id: 1, image: carla, name: 'Carla E.'},
            {id: 2, image: william, name: 'William P.'},
          ]}
        />
      </View>
      <BottomModal isVisible={isModalVisible} onClose={toggleModal}>
        <View style={styles.bottom}>
          <TextComponent text={'Sort by:'} styles={styles.filterTitle} />
          <Divider dividerStyle={{ width: wp('100') }} />
          {renderFilterItem('New', 0)}
          {renderFilterItem('Popular', 1)}
          {renderFilterItem('Rating', 2)}
          {renderFilterItem('Price', 3)}
        </View>
      </BottomModal>
    </>
  );
};

export default ContractorScreen;
