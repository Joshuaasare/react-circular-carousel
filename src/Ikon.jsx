import React from 'react';
import PropTypes from 'prop-types';
import iconPaths from './selection.json'; // the file exported from IcoMoon

export function getPath(iconName) {
  const Icon = iconPaths.icons.find(
    (icon) => icon.properties.name === iconName
  );

  if (Icon) {
    return Icon.icon.paths.join(' ');
  }
  return null;
  //   console.warn(`icon ${iconName} does not exist.`);
}

const Ikon = (props) => (
  <svg
    className={props.className}
    id={props.id}
    width={`${props.size}rem`}
    height={`${props.size}rem`}
    style={props.style}
    viewBox={props.viewBox || '0 0 1024 1024'}
    onClick={props.onClick}
  >
    <path d={getPath(props.name)} fill={props.color} />
  </svg>
);

Ikon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  viewBox: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func
};

Ikon.defaultProps = {
  viewBox: null,
  size: 1.375,
  color: '#000',
  style: {
    margin: 0,
    padding: 0
  },
  className: '',
  id: '',
  onClick: () => {}
};

export default Ikon;
