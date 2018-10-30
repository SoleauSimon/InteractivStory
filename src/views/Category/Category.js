import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ categoryName, category }) => (
  <section>
    <h1>Category page: {category && category.title}</h1>
    <h1>{category && category.clues[0].question} ?</h1>
    <h1>{category && category.clues[0].answer}.</h1>
  </section>
);

Category.propTypes = {
  categoryName: PropTypes.string.isRequired,
};

export default Category;