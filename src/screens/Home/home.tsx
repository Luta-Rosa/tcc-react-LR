import React from "react";
import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import Carousel from "react-native-snap-carousel";
import foto1 from '../../../assets/sliders/foto1.png'
import foto2 from '../../../assets/sliders/foto2.png'
import foto3 from '../../../assets/sliders/foto3.png'
import Footer from "../../components/footer";
import Header from "../../components/header";

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH * 0.8;
const CARD_HEIGHT = 176; // Ajuste a altura desejada
const BUTTON_WIDTH = ITEM_WIDTH * 0.9; // Ajuste a largura desejada
const BUTTON_HEIGHT = 60; // Ajuste a altura desejada
const BUTTON_TEXT_SIZE = 19; // Ajuste o tamanho do texto conforme desejado
const BUTTON_MARGIN_BOTTOM = 45;
type Props = {
  item: {
    imgUrl: string
  }
  index: number
}

const carouselItems = [
  { imgUrl: foto1 },
  { imgUrl: foto2 },
  { imgUrl: foto3 },
];

function CarouselCardItem({ item, index }: Props) {
  return (
    <View style={styles.cardContainer} key={index}>
      <View style={styles.card}>
        <Image style={styles.image} source={item.imgUrl} />
      </View>
    </View>
  );
}



export default function Home() {

 

 

  return (
    <View style={styles.container}>
    <Header />
    <ScrollView>
      <Carousel
        data={carouselItems}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
        layout="default"
      />
      <View style={styles.centeredContainer}>
        <TouchableOpacity style={[styles.button, { marginBottom: BUTTON_MARGIN_BOTTOM }]} onPress={function () {
          }}>
          <Text style={styles.buttonText}>Cuidados</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { marginBottom: BUTTON_MARGIN_BOTTOM }]} onPress={() => {
        
        }}>
          <Text style={styles.buttonText}>Saúde Mental</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    <Footer />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  card: {
    width: ITEM_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    backgroundColor: '#FFF',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardText: {
    fontSize: 18,
    color: '#2B4A6D',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60, // Ajuste o valor conforme necessário para posicionar os botões no centro
  },
  button: {
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    backgroundColor: '#D4E8FF',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: BUTTON_TEXT_SIZE,
    color: '#2B4A6D',
  },
});
