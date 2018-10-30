import React, { Component } from 'react';
import Home from './Home';
import api from "../../helpers/api";

class HomeContainer extends Component {
  state = {
    categories: [],
      isLoading: true, // Loading avant de recevoir l'api
  }
    async componentDidMount() {
      const categories = await api.getCategories();
        this.setState({
          categories: categories,
            isLoading: false,
      });
    }
  render() {
    return (
      <Home categories={this.state.categories} isCategoriesLoading={this.state.isLoading} /> // On passe des params au html
    );
  }
}

export default HomeContainer;