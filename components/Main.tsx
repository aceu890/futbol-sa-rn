import React from 'react';
import { StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

import { View, Text } from './Themed';

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View>
            <TouchableOpacity style={styles.boxTeam}>
                    {/* <Text>TEAM One</Text> */}
                    <Image
      
                      source={{uri: 'https://www.mirafutbol.com/futebol/8001152/41f1b7_garciahuidobro.png'}}
                      style={ styles.imgStyle}
                    />
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxTeam}>
                    {/* <Text>TEAM three</Text> */}
                    <Image
      
                      source={{uri: 'https://www.mirafutbol.com/futebol/8001152/342ab6_bellohorizonte.png'}}
                      style={ styles.imgStyle}
                    />
      
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxTeam}>
                    {/* <Text>TEAM three</Text> */}
                    <Image
      
                      source={{uri: 'https://www.mirafutbol.com/futebol/8001152/fe2347_juanasppe.png'}}
                      style={ styles.imgStyle}
                    />
      
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxTeam}>
                    {/* <Text>TEAM three</Text> */}
                    <Image
      
                      source={{uri: 'https://www.mirafutbol.com/futebol/8001152/f9e022_laurobarros.png'}}
                      style={ styles.imgStyle}
                    />
      
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxTeam}>
                    {/* <Text>TEAM three</Text> */}
                    <Image
      
                      source={{uri: 'https://www.mirafutbol.com/futebol/8001152/8108dc_norteamerica.png'}}
                      style={ styles.imgStyle}
                    />
      
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxTeam}>
                    {/* <Text>TEAM three</Text> */}
                    <Image
      
                      source={{uri: 'https://www.mirafutbol.com/futebol/8001152/92658d_pedroaguirre.png'}}
                      style={ styles.imgStyle}
                    />
      
            </TouchableOpacity>
        </View>
        {/* TODO: COLUMN TWO */}
          <View>
              <TouchableOpacity style={styles.boxTeam}>
                      {/* <Text>TEAM two</Text> */}
                      <Image
      
                      source={{uri: 'https://www.mirafutbol.com/futebol/8001152/17a694_cerroalegre.png'}}
                      style={ styles.imgStyle}
                    />
              </TouchableOpacity>
              <TouchableOpacity style={styles.boxTeam}>
                      {/* <Text>TEAM four</Text> */}
                      <Image
      
                      source={{uri: 'https://www.mirafutbol.com/futebol/8001152/bfd7cf_lasdunas.png'}}
                      style={ styles.imgStyle}
                    />
              </TouchableOpacity>
              <TouchableOpacity style={styles.boxTeam}>
                      {/* <Text>TEAM four</Text> */}
                      <Image
      
                      source={{uri: 'https://www.mirafutbol.com/futebol/8001152/800fe0_sanjuan.png'}}
                      style={ styles.imgStyle}
                    />
              </TouchableOpacity>
              <TouchableOpacity style={styles.boxTeam}>
                      {/* <Text>TEAM four</Text> */}
                      <Image
      
                      source={{uri: 'https://www.mirafutbol.com/futebol/8001152/8c3560_torino.png'}}
                      style={ styles.imgStyle}
                    />
              </TouchableOpacity>
              <TouchableOpacity style={styles.boxTeam}>
                      {/* <Text>TEAM four</Text> */}
                      <Image
      
                      source={{uri: 'https://www.mirafutbol.com/futebol/8001152/800fe0_sanjuan.png'}}
                      style={ styles.imgStyle}
                    />
              </TouchableOpacity> 
          </View>
         
      
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'black'
  },
  boxTeam: {
    backgroundColor: '#FAFAFA',
    marginHorizontal: 5,
    marginVertical: 5,
    width: 150,
    height: 150,
    borderRadius: 100,
    // borderWidth: 2,
    // borderColor: 'gray',
  }, 
  imgStyle: {
    alignSelf: 'center',
    
    width: 70,
    height: 70,
    marginTop: 30,
  }
});
