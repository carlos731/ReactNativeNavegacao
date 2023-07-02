import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators, CardStyleInterpolators } from "@react-navigation/stack";
import React from 'react';
import {
  Easing,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MensagenEnvio from '../components/Chat/MensagenEnvio';
import TopTabs from '../navigations/TopTabs';
import TopTabsContatos from '../navigations/TopTabsContatos';
import AnimatedHeader from '../pages/AnimatedHeader';
import Home from '../pages/Home';
import Chat from '../pages/Mensagens/Chat';
import Contatos from '../pages/Mensagens/Contato/Contatos';
import Solicitacoes from '../pages/Mensagens/Contato/Solicitações';
import Notificacao from '../pages/Notificação';

const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  }
}

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear,
  }
}

const customTransition = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            })
          },
          {
            rotate: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: ["180deg", "0deg"],
            }),
          },
          {
            scale: next ?
              next.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0.7],
              }) : 1,
          }
        ]
      },
      opacity: current.opacity,
    }
  }
}

function AnimatedRoutes() {
  return (
    <Stack.Navigator
      // apply for all screen
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}
    // headerMode="none"
    >
      <Stack.Screen name="HomeScreem" component={Home}
        options={{
          headerShown: false,
          transitionSpec: {
            open: config,
            close: closeConfig,
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen name="ContatoScreem" component={Contatos}
        options={{
          headerShown: true,
          gestureDirection: 'vertical',
          transitionSpec: {
            open: config,
            close: closeConfig,
          },
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
        }}
      />
      <Stack.Screen name="SolicitacoesScreem" component={AnimatedHeader}
        options={{
          headerShown: true,
          transitionSpec: {
            open: config,
            close: closeConfig,
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />

      <Stack.Screen name="MensagensScreem" component={TopTabs}
        options={{
          headerShown: true,
          transitionSpec: {
            open: config,
            close: closeConfig,
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      // options={{
      //   headerShown: false,
      //   gestureDirection: 'vertical',
      //   transitionSpec: {
      //     open: config,
      //     close: closeConfig,
      //   },
      //   cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
      // }}
      />
      <Stack.Screen name="ChatScreem" component={Chat}
        options={{
          headerShown: false,
          gestureDirection: 'vertical-inverted',
          cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
        }}
      />
      <Stack.Screen name="NotificacaoScreem" component={Notificacao}
        options={{
          ...customTransition,
        }}
      />
      <Stack.Screen name="ContatosScreem" component={TopTabsContatos}
        options={{
          gestureDirection: 'vertical',
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />
    </Stack.Navigator>
  )
}

export default AnimatedRoutes;