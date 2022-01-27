import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';

export default function FloatingBtn({ toggle, isOpen }) {
  return (
    <Pressable onPress={toggle} style={styles.btn}>
        <Text style={styles.txt}>{isOpen ? "-" : "+"}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    btn:{
        position: 'absolute',
        right: 20,
        bottom: 20,
        height: 40,
        width: 40,
        borderRadius: 40,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
      },
    txt:{
        textAlign: 'center',
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold'
    }
})