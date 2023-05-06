import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomNavigator from './BottomNavigator'
import {
    LoginScreen,
    RegisterScreen,
    ProductDetailScreen,
} from '../screens'
import { ROUTER } from '../constants'

export default function RootNavigator() {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name='Root'
                component={BottomNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ROUTER.LOGIN_SCREEN}
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ROUTER.REGISTER_SCREEN}
                component={RegisterScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ROUTER.PRODUCT_DETAIL_SCREEN}
                component={ProductDetailScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}