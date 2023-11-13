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

type Props = {
  item: {
    imgUrl: string
  }
  index: number
}

const carouselItems = [
  {
    imgUrl: foto1
  },

  {
    imgUrl: foto2
    
  },

  {
    imgUrl: foto3
    
  },
]

function CarouselCardItem({ item, index }: Props) {
  return (
    <View style={styles.cardContainer} key={index}>
      <View style={styles.card}>
        <Image style={styles.image} source={ item.imgUrl } />
      </View>
    </View>
  )
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
        <View style={styles.containerBu}>
          <TouchableOpacity style={styles.button} onPress={() => {
            // Adicione o código que deseja executar quando o botão é pressionado
          }}>
            <Text style={styles.buttonText}>Cuide-se</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerBu}>
          <TouchableOpacity style={styles.button} onPress={() => {
            // Adicione o código que deseja executar quando o botão é pressionado
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
  },

  card: {
    width: ITEM_WIDTH,
    height: 200,  // Altura ajustada para 200 pixels
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

  image: {
    borderRadius: 8,
  },
  
  containerBu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  
  button: {
    backgroundColor: '#D4E8FF', // Cor de fundo
    padding: 10,
    borderRadius: 10, // Borda arredondada
  },

  buttonText: {
    color: '#2B4A6D', // Cor do texto
    fontSize: 18,
  },

  footer: {
    backgroundColor: "#E86687",
    height: 75,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 24,
  },
});