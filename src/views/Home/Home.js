import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Home = ({ categories, isCategoriesLoading }) => (
  <section>
    <h1>Homepage</h1>
      {isCategoriesLoading && (
          <div>Loader</div>
      )}
    {!isCategoriesLoading && (
      <section>
        {categories.map(category => (
          <Link to={`/categories/${category.id}`} key={category.id}>
            {category.title}
          </Link>
        ))}
      </section>
    )}
  </section>
);

Home.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      clues_count: PropTypes.number
    }),
  ),
    isCategoriesLoading: PropTypes.bool.isRequired,
}

export default Home;