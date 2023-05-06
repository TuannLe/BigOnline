import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import tw from 'twrnc'
import Octicons from 'react-native-vector-icons/Octicons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Foundation from 'react-native-vector-icons/Foundation'
import {
    HomeScreen,
    ProfileScreen,
    LoginScreen,
    CategoryScreen
} from '../screens'
import { ROUTER, COLOR } from '../constants'

export default function BottomNavigator() {
    const BottomTab = createBottomTabNavigator();
    const token = 'hello'
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen
                name={ROUTER.HOME_SCREEN}
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: (({ focused, color }) =>
                        <>
                            {focused ? (
                                <Foundation name="home" size={28} color={COLOR.PRIMARY} />
                            ) : (
                                <Octicons name="home" size={23} color={color} />
                            )}
                        </>
                    )
                }}
            />
            <BottomTab.Screen
                name={ROUTER.CATEGORY_SCREEN}
                component={CategoryScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: (({ focused, color }) =>
                        <>
                            {focused ? (
                                <Ionicons name="grid" size={23} color={COLOR.PRIMARY} />
                            ) : (
                                <Ionicons name="grid-outline" size={23} color={color} />
                            )}
                        </>
                    )
                }}
            />
            {token ? (
                <BottomTab.Screen
                    name={ROUTER.PROFILE_SCREEN}
                    component={ProfileScreen}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: (({ focused, color }) =>
                            <>
                                {focused ? (
                                    <Ionicons name="ios-person" size={28} color={COLOR.PRIMARY} />
                                ) : (
                                    <Ionicons name="ios-person-outline" size={24} color={color} />
                                )}
                            </>
                        )
                    }}
                />
            ) : (
                <BottomTab.Screen
                    name={ROUTER.LOGIN_SCREEN}
                    component={LoginScreen}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: (({ focused, color }) =>
                            <>
                                {focused ? (
                                    <Ionicons name="ios-person" size={28} color={COLOR.PRIMARY} />
                                ) : (
                                    <Ionicons name="ios-person-outline" size={24} color={color} />
                                )}
                            </>
                        )
                    }}
                />
            )}
        </BottomTab.Navigator>
    )
}