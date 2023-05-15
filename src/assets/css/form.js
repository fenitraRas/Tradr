import {StyleSheet} from 'react-native';

const formStyles = StyleSheet.create({
  connectToAppleButtonContainer: {
    width: '100%',
    maxWidth: 350,
    alignSelf: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  connectToAppleButton: {
    alignSelf: 'center',
    backgroundColor: '#000000',
    width: '100%',
    maxWidth: 350,
    height: 49,
    marginTop: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  connectToAppleImg: {
    color: '#FFFFFF',
    lineHeight: 20,
    fontSize: 17,
    fontWeight: 600,
  },
  connectToAppleButtonText: {
    width: 186,
    height: 21,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 21,
    color: '#FFFFFF',
    marginLeft: 10,
    marginTop: 1,
  },
  formContent: {
    marginTop: 14,
  },
  inputContainer: {
    width: '100%',
  },
  loginButtonContainer: {
    width: '100%',
    marginTop: 30,
  },
  navbarContainer: {
    width: '100%',
    height: 27,
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 10,
  },
  navbarIcon: {
    flex: 1,
    paddingTop: 2,
    maxWidth: 32,
    minWidth: 32,
  },
  navbarTextContainer: {
    flex: 1,
  },
  navbarText: {
    marginTop: 1,
    textAlign: 'left',
    fontWeight: 300,
    fontSize: 17,
    lineHeight: 21,
    fontFamily: 'Montserrat',
    color: '#9154FD',
  },
  image: {
    marginTop: 40,
    alignSelf: 'center',
    height: 40,
    width: 113.68,
  },
  titleContainer: {
    height: 22,
  },
  title: {
    height: 24,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 18,
    lineHeight: 22,
    color: '#1A2442',
  },
  titleImg: {
    marginLeft: 6,
    marginTop: 2,
  },
  formContainer: {
    alignSelf: 'center',
    marginTop: 50,
    width: '100%',
    maxWidth: 350,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export {formStyles};
