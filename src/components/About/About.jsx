import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import skdPhoto from '../../assets/skdPhoto.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-4 md:mt-14 lg:mt-16"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Sandeep Kumar Das
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            {/* react-typing-effect is used here for typing animation using linear interpolation */}
            <ReactTypingEffect
              text={[
                'Fullstack Developer',
                'Unity-Xr Developer',
                'UI/UX Designer',
                'Competitive Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a Software developer with strong foundation in Data structures & Algorithms
             and practical experience in Full-stack Web Development (MERN, Next.js) and
              Unity-based XR/VR Development.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/13iBxmOY1Z7zKAcrvMTIY0Iw1l_37iP8j/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end ">
          <Tilt
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-[20rem] md:h-[20rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={skdPhoto}
              alt="Sandeep Kumar Das"
              loading="lazy"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
