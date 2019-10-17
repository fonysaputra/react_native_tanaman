import React, { Component } from "react";
import { Text, View, StatusBar } from "react-native";

import Footers from "../Footers";
import { Container, Header, Tab, Tabs, ScrollableTab } from "native-base";
import BahasaTanamanObat from "./BahasaTanamanObat";
import axios from "axios";
import Server from "../Server";

export default class TanamanObat extends Component {
  static navigationOptions = { title: "Tanaman Obat Keluarga" };
  constructor() {
    super();
    this.state = {
      bahasa: []
    };
  }
  getBahasa = () => {
    axios
      .get(Server + `api.php?operasi=bahasa`)
      .then(res => {
        this.setState({
          bahasa: res.data
        });
      });
  };
  componentDidMount() {
    // this.getBahasa();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#2a9053" barStyle="light-content" />
        {/* <Tabs
          style={{ marginTop: 5 }}
          tabBarUnderlineStyle={{ borderBottomWidth: 5 }}
          renderTabBar={() => (
            <ScrollableTab
              tabsContainerStyle={{ backgroundColor: "#0972be" }}
            />
          )}
        >
       
              <Tab
                tabStyle={{ backgroundColor: "#0972be" }}
                textStyle={{ color: "#fff" }}
                activeTabStyle={{ backgroundColor: "#0972be" }}
                activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
              
                heading="Tanaman Obat Keluarga"
              >
              
              </Tab>
         
        </Tabs> */}
          <BahasaTanamanObat id_bahasa="1" />
        <Footers />
      </View>
    );
  }
}
