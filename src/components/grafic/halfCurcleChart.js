import React from "react";
import { View, StyleSheet } from "react-native";
import { StyleSheet } from "react-native";

export default function HalfCircleChart({ percentage, color }) {
  const radius = 100; // Raio do gráfico
  const strokeWidth = 20; // Largura da borda

  // Cálculo do ângulo com base na porcentagem
  const angle = percentage * 180 / 100;

  return (
    <View style={styles.chartContainer}>
      <View style={[styles.chart, { borderColor: color }]}>
        <View
          style={[
            styles.fill,
            { width: radius * 2, height: radius, backgroundColor: color },
          ]}
        />
      </View>
      <View style={[styles.mask, { backgroundColor: color, transform: [{ rotate: `${angle}deg` }] }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  chartContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  chart: {
    width: 2 * radius,
    height: radius,
    borderRadius: radius,
    borderWidth: strokeWidth,
    overflow: "hidden",
  },
  fill: {
    position: "absolute",
    bottom: 0,
  },
  mask: {
    position: "absolute",
    width: 2 * radius,
    height: radius,
    borderRadius: radius,
    overflow: "hidden",
    top: 0,
    left: radius,
    transformOrigin: `${radius}px ${radius}px`,
  },
  chartContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  
  chart: {
    width: "25%",
  },
});
