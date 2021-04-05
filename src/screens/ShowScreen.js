import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation, route }) => {
  const { state } = useContext(Context);
  const id = route.params.id;
  const blogPost = state.find((blogPost) => blogPost.id === id);
  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: "600", margin: 15 }}>
        {" "}
        Title:{blogPost.title}
      </Text>
      <Text style={{ fontSize: 18, fontWeight: "600", margin: 15 }}>
        {" "}
        Content: {blogPost.content}
      </Text>
    </View>
    
  );
};

const styles = StyleSheet.create({});
export default ShowScreen;
