import React, { Component } from "react";
import { Footer, FooterTab, Button, Icon, Text } from "native-base";

import { withNavigation } from "react-navigation";

class Footers extends Component {
  render() {
    return (
      <Footer>
        <FooterTab style={{ backgroundColor: "#0c8e57" }}>
          <Button
            vertical
            onPress={() => {
              this.props.navigation.navigate("MenuUtama");
            }}
          >
            <Icon name="home" style={{ color: "#fcfbff" }} />
            <Text style={{ color: "#fcfbff", fontSize: 12 }}>Home</Text>
          </Button>
          <Button
            vertical
            onPress={() => {
              this.props.navigation.navigate("Tentang");
            }}
          >
            <Icon name="person" style={{ color: "#fcfbff" }} />
            <Text style={{ color: "#fcfbff", fontSize: 12 }}>Tentang</Text>
          </Button>
          <Button
            vertical
            onPress={() => {
              this.props.navigation.navigate("Bantuan");
            }}
          >
            <Icon name="help" style={{ color: "#fcfbff" }} />
            <Text style={{ color: "#fcfbff", fontSize: 12 }}>Bantuan</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default withNavigation(Footers);
