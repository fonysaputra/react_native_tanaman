import React, { Component } from "react";

import { Image, View, ActivityIndicator } from "react-native";
import { Content, Card, CardItem, Text, Body } from "native-base";
import axios from "axios";

import server from "./Server";

export default class Sejarah extends Component {
  static navigationOptions = { title: "Sejarah Tanaman Obat Keluarga" };
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataTanaman: []
    };
  }
  getDataTanaman = e => {
    axios
      .get(server + `api.php?operasi=semua_tanaman&bahasa=1&data=${e}`)
      .then(res => {
        this.setState({
          isLoading: false,
          dataTanaman: res.data
        });
      });
  };
  componentDidMount() {
    this.getDataTanaman("");
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 100 }}>
          <Text style={{ textAlign: "center", marginBottom: 20 }}>
            {" "}
            Loading ......{" "}
          </Text>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <Content>
          {this.state.dataTanaman.map((data, key) => {
            return (
              <Card key={key}>
                <CardItem>
                  <Body>
                    <Text style={{ fontSize: 20 }}>{data.nama_tanaman}</Text>
                  </Body>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    source={{ uri: server + "assets/" + data.nama_foto }}
                    style={{ height: 140, width: null, flex: 1 }}
                  />
                </CardItem>
                <CardItem>
                  <Text style={{ textAlign: "left" }}>Sejarah Tanaman</Text>
                </CardItem>
                <CardItem>
                  <Text style={{ textAlign: "justify" }}>{data.sejarah}</Text>
                </CardItem>
              </Card>
            );
          })}
        </Content>
      </View>
    );
  }
}
