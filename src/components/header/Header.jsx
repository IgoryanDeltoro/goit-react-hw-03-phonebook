import PropTypes from 'prop-types';
import css from '../header/Header.module.css';

const Header = ({ title }) => {
  return (
    <div className={css.titleBox}>
      <h1 className={css.title}>{title}</h1>
    </div>
  );
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
