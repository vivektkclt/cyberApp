import {StyleSheet} from 'react-native';
import appColors from '../../Theme/Colors';
export const styles = StyleSheet.create({
  drawerItemTextStyle: {
    fontSize: 16,
    color: appColors.background,
    margin: 0,
  },
  drawerHeaderView: {
    height: 250,
    backgroundColor: appColors.white,
    borderBottomWidth: 1,
    borderBottomColor: appColors.transPrentWhite,
    paddingLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerLogoImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  drawerItemImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
  },
  drawerLine: {
    borderBottomWidth: 1,
    borderBottomColor: appColors.transPrentWhite,
  },
  headerLeftView: {
    flexDirection: 'row',
  },
  headerLeftText: {
    color: appColors.white,
    alignSelf: 'center',
  },
  mainViewContainer: {
    flex: 1,
    backgroundColor: appColors.transPrentWhite,
  },
  headerMainView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerMainImage: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  headerMainText: {
    color: appColors.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  psTxt: {
    alignSelf: 'center',
    fontWeight: '700',
    color: appColors.background,
    fontSize: 15,
  },
});
