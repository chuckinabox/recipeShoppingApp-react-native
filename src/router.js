import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";

import HomeContainer from "./containers/HomeContainer";
import OneRecipeContainer from "./containers/OneRecipeContainer";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="loggedout">
          <Scene
            leftTitle="Signup"
            onLeft={() => {}}
            rightTitle="Login"
            onRight={() => {}}
            key="loggedoutHome"
            component={HomeContainer}
            title="RecipeShopping"
            initial
          />
          <Scene
            key="loggedoutRecipe"
            component={OneRecipeContainer}
            hideNavBar
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
