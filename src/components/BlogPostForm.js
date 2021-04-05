import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  return (
    <View>
      <Text style={styles.label}>Enter Title :</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(newValue) => setTitle(newValue)}
      />
      <Text style={styles.label}>Enter Content :</Text>
      <TextInput
        style={styles.input}
        value={content}
        multiline={true}
    numberOfLines={9}

        onChangeText={(newValue) => setContent(newValue)}
      />
      <TouchableOpacity
        style={{
          margin: 5,
          padding: 5,
          alignSelf: "center",
          borderRadius: 5,
      
        }}
        onPress={() => {
          onSubmit(title, content);
        }}
      >
        <Text>Save Blog Post</Text>
      </TouchableOpacity>
    </View>
  );
};
BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};
const styles = StyleSheet.create({
  label: { fontSize: 18, fontWeight: '600', margin: 15 },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "gray",
    marginHorizontal: 15,
    padding: 5,
    borderRadius: 5,
    textAlignVertical:'top'
  },
  
});
export default BlogPostForm;
