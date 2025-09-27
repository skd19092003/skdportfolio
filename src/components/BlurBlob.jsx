// components/BlurBlob.jsx
//this is a reusable component for a blurred blob effect
//this is used to add a decorative blurred blob to the background of a section
import PropTypes from 'prop-types';

const BlurBlob = ({ position, size }) => {
  // Destructure position and size with default values
  const { top, left } = position
  const { width, height } = size 

  return (
    <div
      className="absolute"
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className="w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob"
      ></div>
    </div>
  );
};

// Define prop types
BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default BlurBlob;

//npm prop types is used here to define the types of props that the component expects install it using npm i prop-types

// Usage Example:
// <BlurBlob position={{ top: '20%', left: '80%' }} size={{ width: '300px', height: '300px' }} />
// This will create a blurred blob at 20% from the top and 80% from the left of its parent container with a size of 300x300 pixels.
//gslat value dene par console mai error aayega