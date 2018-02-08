import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";

import HomeContainer from "./containers/HomeContainer";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="loggedout">
          <Scene
            key="loggedoutHome"
            component={HomeContainer}
            title="RecipeShoppingApp.com"
            initial
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
