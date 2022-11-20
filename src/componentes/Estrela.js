import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';

import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

export default function Estrela({
  onPress,
  desabilitada = true,
  grande = false,
  preenchida,
}) {
  const estilos = estilosFuncao(grande);
  const getImage = () => {
    if (preenchida) {
      return estrela;
    }
    return estrelaCinza;
  };
  return (
    <TouchableOpacity onPress={onPress} disabled={desabilitada}>
      <Image style={estilos.estrela} source={getImage()} />
    </TouchableOpacity>
  );
}

const estilosFuncao = grande =>
  StyleSheet.create({
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
      marginRight: 2,
    },
  });
