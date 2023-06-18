import { StyleSheet } from "react-native";

const stylesForm = StyleSheet.create({
  formContext: {
    width: "100%",
    height: "100%",
    bottom: 0,
    backgroundColor: "#E7EFE2",
    alignItems: "center",
    marginTop: 30,
    borderRadius: 30,
    padding: 30,
  },
  formTextAltura: {
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  formText: {
    flex: 1,
    textAlign: "center",
    color: "#12E08E",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  input: {
    width: "100%",
    height: 60,
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 30,
    width: "100%",
    color: "#12E08E",
    borderColor: "#12E08E",
    borderWidth: 1,
    marginTop:15,
  },
  larguraTela:{
    
  },
  buttonContainer: {
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "#12E08E",
    borderWidth: 1,
    marginTop: 100,
  },
  buttonText: {
    color: "#12E08E",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  pesoIdealContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  pesoIdealText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  pesoIdealValue: {
    fontSize: 24,
    color: "#F2661F", // Cor para destacar o peso ideal
    marginTop: 5,
  }
  
});

export default stylesForm;
