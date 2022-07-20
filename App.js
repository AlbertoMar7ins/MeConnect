import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Routes from './src/InitialPages/bottomTab';
import TopBar from './src/CompanyScreen/topbar';
import MCButton from './components/MCButton';
import MCHeader from './components/MCHeader';
import MCInput from './components/MCInput';
import MCTitle from './components/MCTitle';
// import ChooseAccountType from './screens/start/ChooseAccountType';
// import FormClientRegistration from './screens/start/FormClientRegistration';
// import FormCompanyRegistration from './screens/start/FormCompanyRegistration';
// import FormUserLogin from './screens/start/FormUserLogin';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';


export default function App() {
  return (
    <NavigationContainer>
      <TopBar />
    </NavigationContainer>
  );
}