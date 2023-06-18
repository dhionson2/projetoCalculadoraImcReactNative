import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import stylesResult from "./styleResult";

export default function ResultImc(props) {
  const [reset, setReset] = useState(false);

  let message;
  let color;
  let belowWeightColor = "#18FFB5"; // Cor da parte abaixo do peso
  let normalWeightColor = "#20FF23"; // Cor da parte peso normal
  let aboveWeightColor = "#F2661F"; // Cor da parte acima do peso
  let obeseColor = "#F44336"; // Cor da parte obeso

  if (reset) {
    message = "";
    color = "black";
  } else if (props.resultImc < 18.5) {
    message = "Abaixo do peso";
    color = belowWeightColor;
  } else if (props.resultImc >= 18.5 && props.resultImc < 25) {
    message = "Peso normal";
    color = normalWeightColor;
  } else if (props.resultImc >= 25 && props.resultImc < 30) {
    message = "Acima do peso";
    color = aboveWeightColor;
  } else {
    message = "Obesa";
    color = obeseColor;
  }

  const handleReset = () => {
    setReset(true);
    // Adicione aqui a lógica para redefinir os valores dos cálculos, se necessário
  };

  // Atualiza o estado de reset quando o valor de resultImc mudar
  React.useEffect(() => {
    setReset(false);
  }, [props.resultImc]);

  return (
    <View>
      <View style={stylesResult.view}>
        <Text style={stylesResult.textTitle}>{props.messageResultImc}</Text>
        <Text style={stylesResult.text}>{props.resultImc}</Text>
      </View>
      {!reset && props.resultImc !== null && (
        <View  style={stylesResult.viewCenter}>
          <Text style={[stylesResult.text, { color: color }]}>
            {message}
          </Text>
        </View>
      )}
    </View>
  );
}
