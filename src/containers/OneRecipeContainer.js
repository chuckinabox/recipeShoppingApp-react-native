import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, CardSection } from "../components/common";

class OneRecipeContainer extends Component {
  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Text>OneRecipeContainer</Text>
          </CardSection>
        </Card>
      </View>
    );
  }
}

export default OneRecipeContainer;
