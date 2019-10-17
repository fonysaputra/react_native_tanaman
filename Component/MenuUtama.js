import React, { Component } from "react";

import {
  View,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";
import {
  Text,
  Content,
  Container,
  Card,
  CardItem,
  Thumbnail
} from "native-base";
import axios from "axios";

import ImageSlider from "react-native-image-slider";

import { AdMobBanner } from "react-native-admob";

// const server = "http://smartindoo.id/tanaman_obat/";

import server from "./Server";

export default class MenuUtama extends Component {
  static navigationOptions = { header: null };
  constructor() {
    super();
    this.state = {
      isLoading: true,

      isPlaying: true,
      images: [
        server + "assets/balakacida.jpg",
        server + "assets/hidup-kunyit.jpg",
        server + "assets/kumis_kucing.jpg",
        server + "assets/kunyit.jpg",
        server + "assets/tanaman-biduri.jpg",
        server + "assets/buah-mengkudu.jpg"
      ]
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#2a9053" barStyle="light-content" />
        <Container>
          <AdMobBanner
            adSize="fullBanner"
            adUnitID="ca-app-pub-7987914246691031~8295071692"
            testDevices={[AdMobBanner.simulatorId]}
            onAdFailedToLoad={error => console.log(error)}
          />
          <Content>
            <View style={{ height: 180 }}>
              <ImageSlider
                images={this.state.images}
                autoPlayWithInterval={5000}
              />
            </View>
            <Text style={{ margin: 10 }}>Menu Utama </Text>
            <View
              style={{
                marginBottom: 10,
                backgroundColor: "#000708",
                height: 2,
                width: Dimensions.get("window").width
              }}
            />
            <Content horizontal>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("TanamanObat");
                }}
              >
                <Card style={{ alignItems: "center", marginLeft: 10 }}>
                  <CardItem cardBody>
                    <Thumbnail
                      style={{ marginTop: 10 }}
                      source={require("../assets/balakacida.jpg")}
                    />
                  </CardItem>
                  <CardItem>
                    <Text>Tanaman</Text>
                  </CardItem>
                </Card>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Sejarah");
                }}
              >
                <Card style={{ alignItems: "center", marginLeft: 20 }}>
                  <CardItem cardBody>
                    <Thumbnail
                      style={{ marginTop: 10 }}
                      source={require("../assets/sejarah.jpg")}
                    />
                  </CardItem>
                  <CardItem>
                    <Text>Sejarah</Text>
                  </CardItem>
                </Card>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Tentang");
                }}
              >
                <Card style={{ alignItems: "center", marginLeft: 20 }}>
                  <CardItem cardBody>
                    <Thumbnail
                      style={{ marginTop: 10 }}
                      source={require("../assets/aboutus.png")}
                    />
                  </CardItem>
                  <CardItem>
                    <Text>Tentang</Text>
                  </CardItem>
                </Card>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Bantuan");
                }}
              >
                <Card
                  style={{
                    alignItems: "center",
                    marginLeft: 20,
                    marginRight: 10
                  }}
                >
                  <CardItem cardBody>
                    <Thumbnail
                      style={{ marginTop: 10 }}
                      source={require("../assets/help.png")}
                    />
                  </CardItem>
                  <CardItem>
                    <Text>Bantuan</Text>
                  </CardItem>
                </Card>
              </TouchableOpacity>
            </Content>

            {/*
            }
            <Text style={{ margin: 10 }}>Vidio Tanaman Obat Keluarga </Text>

            <YouTube
             apiKey= 'AIzaSyAoUALqyPDv6w3LKuxF26FuC1fr1bgnb5c'
  videoId="qcL2chBR2Os"   // The YouTube video ID
  //play={true}             // control playback of video with true/false
  //fullscreen={false}       // control whether the video should play in fullscreen or inline
  loop={true}
  controls={2}
  //play={this.state.isPlaying}    // control whether the video should loop when ended
  style={{ alignSelf: 'stretch', height: 300 }}
/>
            {
              */}

            <Text style={{ margin: 10 }}>Tumbuhan Obat </Text>
            <View
              style={{
                marginBottom: 10,
                backgroundColor: "#000708",
                height: 2,
                marginHorizontal: 10,
                width: Dimensions.get("window").width - 10
              }}
            />
            <Card>
              <CardItem cardBody>
                <Image
                  source={require("../assets/obat.jpg")}
                  style={{ height: 150, width: null, flex: 1 }}
                />
              </CardItem>
              <CardItem>
                <Text style={{ textAlign: "justify" }}>
                  Tumbuhan obat adalah tumbuhan yang telah diidentifikasi dan
                  diketahui berdasarkan pengamatan manusia memiliki senyawa yang
                  bermanfaat untuk mencegah dan menyembuhkan penyakit, melakukan
                  fungsi biologis tertentu, hingga mencegah serangan serangga
                  dan jamur. Setidaknya 12 ribu senyawa telah diisolasi dari
                  berbagai tumbuhan obat di dunia, tetapi jumlah ini hanya
                  sepuluh persen dari jumlah total senyawa yang dapat
                  diekstraksi dari seluruh tumbuhan obat
                </Text>
              </CardItem>
            </Card>
          </Content>
        </Container>
      </View>
    );
  }
}
