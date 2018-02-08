import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import {
  Card,
  CardSection,
  Input,
  Button,
  Spinner
} from "../components/common";
import Recipes from "../components/Recipes";
import { getTopRecipes } from "../actions";

class HomeContainer extends Component {
  componentWillMount() {
    this.props.getTopRecipes(this.props.recipesPage);
  }

  renderRecipes() {
    if (this.props.isFetching) {
      return (
        <Card>
          <CardSection>
            <Spinner />
          </CardSection>
        </Card>
      );
    }
    return <Recipes recipes={this.props.recipes} />;
  }
  render() {
    return (
      <View style={{ backgroundColor: "#11D39D", flex: 1 }}>
        <Card>
          <CardSection>
            <Input placeholder="Search here" noLabel={true} />
            <Button>Search</Button>
          </CardSection>
        </Card>
        {this.renderRecipes()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipesPage: state.topRecipes.recipesPage,
    recipes: state.topRecipes.recipes,
    isFetching: state.topRecipes.isFetching
  };
};

export default connect(mapStateToProps, { getTopRecipes })(HomeContainer);
