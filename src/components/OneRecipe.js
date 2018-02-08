import React from "react";
import { Text, Image, View } from "react-native";
import { Card, CardSection } from "./common";

const OneRecipe = ({ recipe }) => {
  return (
    <Card>
      <CardSection style={{ justifyContent: "space-between" }}>
        <Text>{recipe.title}</Text>
        <Text>{"Rating: " + recipe.rating}</Text>
      </CardSection>
      <CardSection>
        <Image
          style={{ width: null, flex: 1, height: 300 }}
          source={{ uri: recipe.photoURL }}
        />
      </CardSection>
    </Card>
  );
};

export default OneRecipe;
