import { Modal, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

import ModelContent from "../CustomComponents/ModelContent";

export default function CartModel({ route, navigation }) {
  const modelIsVisible = useSelector((state) => state.roots.modelIsVisible);

  return (
    <>
      <Modal visible={modelIsVisible} transparent={true} animationType="slide">
        <ModelContent route={route} navigation={navigation} />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({});
