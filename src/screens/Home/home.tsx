import React from "react";
import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import Carousel from "react-native-snap-carousel";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import foto1 from '../../../assets/sliders/foto1.png'
import foto2 from '../../../assets/sliders/foto2.png'
import foto3 from '../../../assets/sliders/foto3.png'
import Footer from "../../components/footer";
import Header from "../../components/header";

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH * 0.8;
const CARD_HEIGHT = 200; // Ajuste a altura desejada

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
        <TouchableOpacity style={styles.button} onPress={() => {
          // Adicione o código que deseja executar quando o botão "Cuide-se" é pressionado
        }}>
          <Text style={styles.buttonText}>Cuide-se</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {
          // Adicione o código que deseja executar quando o botão "Saúde Mental" é pressionado
        }}>
          <Text style={styles.buttonText}>Saúde Mental</Text>
        </TouchableOpacity>
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
  button: {
    width: ITEM_WIDTH,
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
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#2B4A6D',
  },
});
