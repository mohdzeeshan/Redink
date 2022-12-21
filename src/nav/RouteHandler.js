import React from 'react';
import AuthStackNav from './AuthStack';
import HomeStackNav from './HomeStack';
import {useSelector} from 'react-redux';

const RouteNav = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return isAuthenticated ? <HomeStackNav /> : <AuthStackNav />;
};

export default RouteNav;
