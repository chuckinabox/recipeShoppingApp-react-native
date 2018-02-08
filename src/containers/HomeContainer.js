import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, CardSection } from "../components/common";

class HomeContainer extends Component {
  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Text>Test</Text>
          </CardSection>
        </Card>
      </View>
    );
  }
}

export default HomeContainer;
