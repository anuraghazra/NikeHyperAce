const size = {
  mobile: '425px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px'
}

const media = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
};

export default media;