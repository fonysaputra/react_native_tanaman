import React, { Component } from "react";
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Card,
  CardItem,
  Content,
  Body,
  Right,
  Text
} from "native-base";
import { withNavigation } from "react-navigation";
import { TouchableOpacity, Image, ActivityIndicator, View } from "react-native";
import axios from "axios";

import server from "../Server";
class BahasaTanamanObat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataTanaman: []
    };
  }
  getDataTanaman = e => {
    axios
      .get(
        server +
          `api.php?operasi=semua_tanaman&bahasa=${this.props.id_bahasa}&data=${e}`
      )
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
      <Container>
        <Header
          searchBar
          rounded
          style={{
            backgroundColor: "#fcfbff",
            marginHorizontal: 5,
            marginBottom: 10,
            marginTop: 10
          }}
        >
          <Item>
            <Icon name="ios-search" />
            <Input
              placeholder="Search"
              onChangeText={e => {
                this.getDataTanaman(e);
              }}
            />
          </Item>
        </Header>

        <Content>
          {this.state.dataTanaman.map((data, key) => {
            return (
              <TouchableOpacity
                key={key}
                onPress={() => {
                  this.props.navigation.navigate("DetailTanamanObat", {
                    nama: data.nama_tanaman,
                    id_tanaman: data.id_tanaman,
                    nama_latin: data.nama_latin,
                    deskripsi: data.deskripsi,
                    cara_tanam: data.cara_penanaman,
                    image: data.nama_foto
                  });
                }}
                style={{ marginVertical: 5 }}
              >
                <Card>
                  <CardItem>
                    <Body>
                      <Text style={{ fontSize: 20 }}>{data.nama_tanaman} </Text>
                    </Body>
                    <Right>
                      <Icon style={{ color: "#0b41fe" }} name="paper-plane" />
                    </Right>
                  </CardItem>
                  <CardItem cardBody>
                    <Image
                      source={{ uri: server + "assets/" + data.nama_foto }}
                      style={{ height: 200, width: null, flex: 1 }}
                    />
                  </CardItem>
                  <CardItem>
                    <Text note>Nama Latin : {data.nama_latin} </Text>
                  </CardItem>
                </Card>
              </TouchableOpacity>
            );
          })}
        </Content>
      </Container>
    );
  }
}

export default withNavigation(BahasaTanamanObat);
