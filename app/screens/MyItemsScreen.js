import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { SubmitButton, ViewContainer, UpperContainer, LowerContainer, BottomNavContainer } from '../components/common';
import { NavItem } from '../components/common/NavItem';
import ListView from '../components/ListView';
import { realm } from '../components/Schema';
import ItemDB from '../components/Schema';

class MyItemsScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ViewContainer>
        <UpperContainer>
          <ListView deleteItem={this.deleteItem}/>
        </UpperContainer>
        <LowerContainer>
          <SubmitButton onPress={() => Actions.add() }>
            ADD ITEM
          </SubmitButton>
        </LowerContainer>
        <BottomNavContainer>
          <NavItem>
            My Items
          </NavItem>
          <NavItem>
            Recipes
          </NavItem>
        </BottomNavContainer>
      </ViewContainer>
    );
  }

}

export default MyItemsScreen;
