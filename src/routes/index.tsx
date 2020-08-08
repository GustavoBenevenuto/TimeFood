import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';

const page = createStackNavigator();

function Routes() {
  return (
    <page.Navigator headerMode="none" >
      <page.Screen name="Home" component={Home} />
      {/* <page.Screen name="Notifications" component={App} /> */}
    </page.Navigator>
  );
}

export default Routes;