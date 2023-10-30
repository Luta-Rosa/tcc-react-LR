import React from "react";
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import Carousel from "react-native-snap-carousel";

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH * 0.88;

type Props = {
  item: {
    imgUrl: string
  }
  index: number
}

const carouselItems = [
  {
    imgUrl: 
    "https://images8.alphacoders.com/594/thumb-1920-594870.jpg"
  },

  {
    imgUrl: 
    "https://i.pinimg.com/originals/2e/2a/60/2e2a605ab3c772b33c1c53734bd33891.jpg"
  },

  {
    imgUrl:
    "https://img.freepik.com/fotos-gratis/closeup-textural-flores-exoticas-brilhantes-generativas-al_169016-28576.jpg"
  },
]

function carouselCardItem({item, index}: Props){
  return (
    <View style={Styles.cardCarousel} key={index}>
      <Image style={Styles.image} source={{uri: item.imgUrl}}/>
    </View>
  )
}

export default function Home() {
  return (
    <View style={Styles.container}>
     <Carousel 
     data={carouselItems}
     renderItem={carouselCardItem}
     sliderWidth={SLIDER_WIDTH}
     itemWidth={ITEM_WIDTH}
     useScrollView={true}
     />
     <View style={Styles.containerbu}>
       <TouchableOpacity style={Styles.button} onPress={() => {
         // Adicione o código que deseja executar quando o botão é pressionado
       }}>
         <Text style={Styles.buttonText}>Cuide-se</Text>
       </TouchableOpacity>
     </View>
     <View style={Styles.containerbu}>
       <TouchableOpacity style={Styles.button} onPress={() => {
         // Adicione o código que deseja executar quando o botão é pressionado
       }}>
         <Text style={Styles.buttonText}>Saúde Mental</Text>
       </TouchableOpacity>
     </View>
    </View>

    
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  cardCarousel:{
    width: ITEM_WIDTH,
    marginTop: "5%",
  },

  image: {
    height: 250,
    borderRadius: 8,
  },
  containerbu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#D4E8FF', // Cor de fundo
    padding: 10,
    borderRadius: 10, // Borda arredondada
  },
  buttonText: {
    color: '#2B4A6D', // Cor do texto
    fontSize: 18,
  }
})
