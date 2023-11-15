import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import HeaderComponent from '../../components/HeaderComponent';
import {colors} from '../../theme/color';
import {FontSize} from '../../theme/font';
import {TextComponent} from '../../components/TextComponent';
import {styles} from './style';
import Divider from '../../components/Divider';
import {hp, wp} from '../../theme/responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ButtonComponent from '../../components/ButtonComponent';
import BottomModal from '../../components/BottomModalComponent.js';

const FirstRoute = ({navigation, route}) => {
  const { items, toggleModal } = route || {};
  console.log({items});
  return (
    <ScrollView  showsVerticalScrollIndicator={false}>
      <TextComponent text={'Contractor'} styles={styles.contractor} />
      <Divider />
      <View style={styles.contractor}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={items.image}
            style={{width: wp('20'), height: hp('12'), resizeMode: 'contain'}}
          />
        </View>
        <View style={{padding: 10}}>
          <TextComponent
            text={'You’ve booked Morgan L.'}
            styles={styles.name}
          />
          <View style={styles.star}>
            <TextComponent
              numberOfLines={3}
              text={
                'Morgan L. is currently offline and will reach out once available in the...'
              }
              styles={styles.des}
            />
          </View>
        </View>
      </View>
      <Divider dividerStyle={{width: wp('100')}} />
      <TextComponent text={'Details'} styles={styles.contractor} />
      <Divider dividerStyle={{width: wp('100')}} />
      <View
        style={{
          padding: 15,
        }}>
        <View style={styles.star}>
          <View
            style={{
              flexDirection: 'row',
              width: wp('20'),
              margin: 10,
            }}>
            <Ionicons
              name={'calendar-outline'}
              size={hp('2')}
              color={colors.purpleColor}
              style={{marginRight: wp('2')}}
            />
            <TextComponent text={'Date'} styles={styles.des} />
          </View>
          <TextComponent
            text={'Sunday - 22 Oct, 2023'}
            styles={styles.rightText}
          />
        </View>
        <View style={styles.star}>
          <View
            style={{
              flexDirection: 'row',
              width: wp('20'),
              margin: 10,
            }}>
            <Ionicons
              name={'time-outline'}
              size={hp('2')}
              color={colors.purpleColor}
              style={{marginRight: wp('2')}}
            />
            <TextComponent text={'Time'} styles={styles.des} />
          </View>
          <TextComponent
            text={'Sunday - 22 Oct, 2023'}
            styles={styles.rightText}
          />
        </View>
      </View>
      <Divider dividerStyle={{width: wp('90'), alignSelf: 'center'}} />
      <View
        style={{
          padding: 15,
        }}>
        <View style={styles.star}>
          <View
            style={{
              flexDirection: 'row',
              width: wp('25'),
              margin: 10,
            }}>
            <Ionicons
              name={'calendar-outline'}
              size={hp('2')}
              color={colors.purpleColor}
              style={{marginRight: wp('2')}}
            />
            <TextComponent text={'Price Details'} styles={styles.des} />
          </View>
        </View>
        <View style={styles.star}>
          <View
            style={{
              flexDirection: 'row',
              width: wp('30'),
              margin: 10,
            }}>
            <TextComponent
              text={'Per unit rate'}
              styles={{...styles.des, marginLeft: wp('5')}}
            />
          </View>
          <TextComponent text={'$5.00'} styles={styles.rightText} />
        </View>
        <View style={styles.star}>
          <View
            style={{
              flexDirection: 'row',
              width: wp('50'),
              margin: 10,
            }}>
            <TextComponent
              text={'Minimum unit quantity'}
              styles={{...styles.des, marginLeft: wp('5')}}
            />
          </View>
          <TextComponent text={'20-30 Units'} styles={styles.rightText} />
        </View>
      </View>
      <Divider dividerStyle={{width: wp('90'), alignSelf: 'center'}} />
      <View
        style={{
          padding: 15,
        }}>
        <View style={styles.star}>
          <View
            style={{
              flexDirection: 'row',
              width: wp('20'),
              margin: 10,
            }}>
            <Ionicons
              name={'calendar-outline'}
              size={hp('2')}
              color={colors.purpleColor}
              style={{marginRight: wp('2')}}
            />
            <TextComponent text={'Location'} styles={styles.des} />
          </View>
          <TextComponent
            text={'Los Angeles'}
            styles={styles.rightText}
          />
        </View>

        </View>
      <Divider dividerStyle={{width: wp('90'), alignSelf: 'center'}} />
      <View
        style={{
          padding: 15,
        }}>
        <View style={styles.star}>
          <View
            style={{
              flexDirection: 'row',
              width: wp('20'),
              margin: 10,
            }}>
            <Ionicons
              name={'calendar-outline'}
              size={hp('2')}
              color={colors.purpleColor}
              style={{marginRight: wp('2')}}
            />
            <TextComponent text={'Location'} styles={styles.des} />
          </View>
          <TextComponent
            text={'Contract notes'}
            styles={styles.rightText}
          />
        </View>
        <TextComponent
        numberOfLines={3}
            text={`Hey how are you? 
Service Address: 
Los Angeles,Los Angeles, CA`}
            styles={{...styles.rightText,padding:15}}
          />
        </View>
      <Divider dividerStyle={{width: wp('90'), alignSelf: 'center'}} />
      <View style={{alignItems:'center',}}>
      <ButtonComponent text={'Find a new contractor'} buttonStyle={{backgroundColor:colors.white,borderWidth:1,borderColor:colors.black,marginTop:hp('2')}}/>
      <ButtonComponent text={'Cancel contract'} buttonStyle={{backgroundColor:colors.white,borderWidth:1,borderColor:colors.black,marginTop:hp('2')}}/>
      <ButtonComponent  onPress={toggleModal} text={'Find a new contractor'} buttonStyle={{marginVertical:hp('3')}}/>
    
      </View>
    </ScrollView>
  );
};

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}}>
    <Text>Chat</Text>
  </View>
);

const renderScene = ({route}) => {
  switch (route.key) {
    case 'first':
      return <FirstRoute route={route ? route : null} />;
    case 'second':
      return <SecondRoute />;
    default:
      return null;
  }
};

const ContractScreen = ({route, navigation}) => {
  const {items} = route?.params;
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
    //Bottom NAVIGATION
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      console.log('first')
      setModalVisible(!isModalVisible);
     
    };
  const [routes] = React.useState([
    {key: 'first', title: 'Contract Info', items,toggleModal},
    {key: 'second', title: 'Chat', items},
  ]);



  const renderTabBar = props => (
    <TabBar
      {...props}
      inactiveColor={colors.black}
      indicatorStyle={{backgroundColor: colors.primary}}
      style={{backgroundColor: 'white'}}
      labelStyle={{color: colors.primary}}
      renderLabel={({route, focused, color}) => (
        <Text style={{color, fontSize: FontSize.scale18, fontWeight: '400'}}>
          {route.title}
        </Text>
      )}
    />
  );



  return (
    <>
      <SafeAreaView />
      <HeaderComponent
        onPress={() => navigation.goBack()}
        text={'Contracts'}
        rightIconName={'options'}
        iconName={'arrow-back'}
      />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={renderTabBar}
      />
 <BottomModal showCenter isVisible={isModalVisible} onClose={toggleModal}>
  <View style={{alignItems:'flex-end',}}>

 <Ionicons
          onPress={()=>toggleModal()}
          name={'close'}
          size={hp('3')}
          color={colors.purpleColor}
          style={{marginRight: wp('2'),}}
          />
          </View>
        <View style={styles.box}>
          <TextComponent text={'Morgan’s Schedule'} styles={styles.boxText} />
          <TextComponent numberOfLines={2} text={'Please let us know why you are canceling below'} styles={styles.boxDes} />
          <Divider/>
          <View style={{flexDirection:'row',
        marginTop:hp('2'),
        
        }}>
          <Ionicons
          name={'checkmark-circle-sharp'}
          size={hp('2')}
          color={colors.purpleColor}
          style={{marginRight: wp('2'),}}
          />
          <TextComponent text={'Contract was created by mistake'} styles={styles.boxTickText} />

          </View>
          <View style={{flexDirection:'row',
        marginTop:hp('2')
        
        }}>
          <Ionicons
          name={'checkmark-circle-sharp'}
          size={hp('2')}
          color={colors.purpleColor}
          style={{marginRight: wp('2'),}}
          />
          <TextComponent text={'My schedule change or conflict'} styles={styles.boxTickText} />

          </View>
          <View style={{flexDirection:'row',
        marginTop:hp('2')
        
        }}>
          <Ionicons
          name={'checkmark-circle-sharp'}
          size={hp('2')}
          color={colors.purpleColor}
          style={{marginRight: wp('2'),}}
          />
          <TextComponent text={'Contractor schedule change or conflict'} styles={styles.boxTickText} />

          </View>
          <View style={{flexDirection:'row',
        marginTop:hp('2')
        
        }}>
          <Ionicons
          name={'checkmark-circle-sharp'}
          size={hp('2')}
          color={colors.purpleColor}
          style={{marginRight: wp('2'),}}
          />
          <TextComponent text={'Contract required more skills/supplies'} styles={styles.boxTickText} />

          </View>
          <View style={{flexDirection:'row',
        marginTop:hp('2')
        
        }}>
          <Ionicons
          name={'checkmark-circle-sharp'}
          size={hp('2')}
          color={colors.purpleColor}
          style={{marginRight: wp('2'),}}
          />
          <TextComponent text={'Contractor canceled or no-show'} styles={styles.boxTickText} />

          </View>
          <View style={{flexDirection:'row',
        marginTop:hp('2')
        
        }}>
          <Ionicons
          name={'checkmark-circle-sharp'}
          size={hp('2')}
          color={colors.purpleColor}
          style={{marginRight: wp('2'),}}
          />
          <TextComponent text={'I changed my mind / did it myself'} styles={styles.boxTickText} />

          </View>
         {/* <ButtonComponent  onPress={()=>{}} text={'Select & Continue'}/> */}
          <View style={{flexDirection:'row',
        marginTop:hp('2')
        
        }}>
          <Ionicons
          name={'checkmark-circle-sharp'}
          size={hp('2')}
          color={colors.purpleColor}
          style={{marginRight: wp('2'),}}
          />
          <TextComponent numberOfLines={2} text={'A natural disaster or crisis event has occurred'} styles={styles.boxTickText} />

          </View>
          <View style={{alignItems:'center',marginTop:hp('2')}}>

         <ButtonComponent  buttonStyle={{width:wp('80'),}} onPress={()=>{}} text={'Submit'}/>
          </View>
         
        </View>
      </BottomModal>
    </>
  );
};

export default ContractScreen;
