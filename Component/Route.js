import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import MenuUtama from "./MenuUtama";
import TanamanObat from "./TanamanObat/TanamanObat";
import DetailTanamanObat from "./TanamanObat/DetailTanamanObat";
import Sejarah from "./Sejarah";
import Tentang from "./Tentang";
import Bantuan from "./Bantuan";

const AppNavigator = createStackNavigator(
  {
    MenuUtama: {
      screen: MenuUtama
    },
    TanamanObat: {
      screen: TanamanObat
    },
    DetailTanamanObat: {
      screen: DetailTanamanObat
    },
    Sejarah: {
      screen: Sejarah
    },
    Tentang: {
      screen: Tentang
    },
    Bantuan: {
      screen: Bantuan
    }
  },
  {
    initialRouteName: "MenuUtama",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#fff"
      },
      headerTintColor: "#000",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default createAppContainer(AppNavigator);
