import React, { Component } from "react";
import { View, Dimensions, ActivityIndicator, Image } from "react-native";

import ImageSlider from "react-native-image-slider";
import {
  Card,
  CardItem,
  Body,
  Text,
  Content,
  Container,
  Right,
  Icon
} from "native-base";
import Footers from "../Footers";
import server from "../Server";
import axios from "axios";

var id_tanaman = "";
var nama = "";
var nama_latin = "";
var deskripsi = "";
var images = "";
var cara_penanaman = "";

export default class DetailTanamanObat extends Component {
  static navigationOptions = ({ navigation }) => {
    id_tanaman = navigation.getParam("id_tanaman");
    nama = navigation.getParam("nama");
    nama_latin = navigation.getParam("nama_latin");
    deskripsi = navigation.getParam("deskripsi");
    images = navigation.getParam("image");
    cara_penanaman = navigation.getParam("cara_tanam");
    return {
      title: navigation.getParam("nama")
    };
  };
  constructor() {
    super();
    this.state = {
      isLoading: true,

      dataManfaat: []
    };
  }

  getdataManfaat = () => {
    axios
      .get(server + `api.php?operasi=manfaat&data=${id_tanaman}`)
      .then(res => {
        this.setState({
          dataManfaat: res.data,
          isLoading: false
        });
      });
  };

  componentDidMount() {
    this.getdataManfaat();
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 100 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <Container>
        <Content style={{ marginTop: 10 }}>
          <Card>
            <CardItem cardBody>
              <Image
                source={{ uri: server + "assets/" + images }}
                style={{ height: 190, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Body>
                <Text style={{fontSize:25}} >{nama} </Text>
                <Text note>Nama Latin : {nama_latin} </Text>
              </Body>
              <Right>
                <Icon style={{ color: "#0b41fe" }} name="paper-plane" />
              </Right>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={{fontSize:25}}  >Deskripsi : </Text>
                <Text style={{ textAlign: "justify" }}>{deskripsi}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={{fontSize:25}}   >Cara Penanaman : </Text>
                <Text style={{ textAlign: "justify" }}>{cara_penanaman}</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Text style={{fontSize:25}} >Manfaat :</Text>
              </Body>
            </CardItem>
          </Card>
          <View
            style={{
              backgroundColor: "rgb(4, 3, 4)",
              height: 2,
              width: Dimensions.get("window").width
            }}
          />
          {this.state.dataManfaat.map((data, key) => {
            return (
              <Card key={key}>
                <CardItem>
                  <Body>
                    <Text>{data.manfaat} :</Text>
                    <Text style={{ textAlign: "justify" }}>
                      {data.deskripsi_manfaat}
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            );
          })}
        </Content>
        <Footers />
      </Container>
    );
  }
}
