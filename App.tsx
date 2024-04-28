import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'

export default function App() {
    const [bgColor, setbgColor] = useState("color")
    const [circleColor, setCircleColor] = useState("#ffffff")
    const [squareColor, setSquareColor] = useState("#ffffff")
    const [aColor, setAColor] = useState("#ffffff")
    const [bColor, setBColor] = useState("#ffffff")
    const generate = () => {
        const hexColor = "0123456789ABCDEF"
        let color = "#"
        let circleColor ="#"
        let squareColor = "#"
        let aColor = "#"
        let bColor ="#"

        for(let i=0;i<6;i++){
          let x=hexColor[Math.floor(Math.random()*16)];
          color+=x;
          circleColor += hexColor[Math.floor(Math.random()*16)];
          squareColor += hexColor[Math.floor(Math.random()*16)];
          aColor += hexColor[Math.floor(Math.random()*16)];
          bColor += hexColor[Math.floor(Math.random()*16)];
        }
        setbgColor(color)
        setCircleColor(circleColor)
        setSquareColor(squareColor)
        setAColor(aColor)
        setBColor(bColor)

    } 

    return (
    <>
    <StatusBar backgroundColor={bgColor}/>
      <View style={[styles.container, {backgroundColor: bgColor}]}> 

       <View style={styles.shapeContainer}>
       <View style={[styles.circleShape, {backgroundColor: squareColor}]}></View>
        <View style={[styles.squareShape, {backgroundColor: circleColor}]}></View>
       </View>
       <View style={[styles.circleShapeOutside, {backgroundColor: aColor}]}></View>
        <View style={styles.btn}>
          <TouchableOpacity onPress={generate}>
          <Text style={[styles.btnTxt, {backgroundColor: bgColor}]}>Press Me</Text>
          </TouchableOpacity>
          
        
        </View>
        <View style={styles.shapeContainer}>
        <View style={[styles.squareShape, {backgroundColor: aColor}]}></View>
       <View style={[styles.circleShape, {backgroundColor: bColor}]}></View>
       </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  btn: {
   // paddingVertical: 10,
   // paddingHorizontal: 12,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginVertical: 90
  },
  btnTxt: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000'
  },
  horizantalBox: {
   height: 100,
   width: 100,
   borderRadius: 50
  //  backgroundColor: 'orange'
  },
  circleShape: {
    height: 200,
   width: 200,
   borderRadius: 100,
   marginHorizontal: 20,
   marginBottom: 100
  },
  squareShape: {
    height: 150,
    width: 150,
    borderRadius: 10,
    marginHorizontal: 20
  },
  shapeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 30
  },
  circleShapeOutside: {
    height: 75,
    width: 75,
    borderRadius: 37
  }
})