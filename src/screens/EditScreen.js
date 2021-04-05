import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation, route }) => {
  const { state, editBlogPost } = useContext(Context);
  const id = route.params.id;
  const blogPost = state.find((state) => state.id === id);

  return (
    <View>
      <BlogPostForm
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => {
          editBlogPost(id, title, content, () => navigation.pop());
        }}
      />
    </View>
  );
};
const style = StyleSheet.create({});
export default EditScreen;
