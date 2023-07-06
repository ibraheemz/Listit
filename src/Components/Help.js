import React from 'react'
import { motion } from "framer-motion/dist/framer-motion";
import { Link } from 'react-router-dom';

function Help() {
    const containerVariants = {
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1,
          transition: { delay: 0.5, duration: 0.5 }
        },
        exit: {
          x: '-100vw',
          transition: { ease: 'easeInOut' }
        }
    }
      function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
    }
  return (
        <motion.div
            className="help"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <section data-testid="welcome-sect">
                <h1>Welcome to the Help Page</h1>
                <p>
                This help page is designed to help you get the most out of our website. Here, you will find information on how to use the website, as well as troubleshooting tips for common problems.
                </p>
            </section>
            <section data-testid="howto-sect">
                <h2>How to Use the Website</h2>
                <ul>
                    The website is designed to be easy to use. However, if you are having trouble, please refer to the following sections:
                    <li><a className="nav-links" onClick={() => scrollToSection("getting-started-sect")}>Getting Started</a></li>
                    <li><a className="nav-links" onClick={() => scrollToSection("using-website-sect")}>Using the Website</a></li>
                    <li><a className="nav-links" onClick={() => scrollToSection("troubleshooting-sect")}>Troubleshooting</a></li>
                </ul>
            </section>
            <section data-testid="getting-started-sect" id="getting-started-sect">
                <h3>Getting Started</h3>
                <p>
                    To get started with the website, you will need to log in with your Spotify account. Once you have logged in, you will be able to use the website to convert your YouTube playlists to Spotify playlists.
                </p>
            </section>
            <section data-testid="using-website-sect" id="using-website-sect">
                <h3>Using the Website</h3>
                <ol>
                    To transere a YouTube playlist to a Spotify playlist, simply follow these steps:
                    <li>Enter the URL of your YouTube playlist.</li>
                    <li>Name your playlist, note that if you leave it empty, the playlist name will be LISTIT</li>
                    <li>Click the "Convert" button.</li>
                    <li>Open your Spotify account, go to your library, you'll find your playlist under the name you chose or the default name LISTIT</li>
                </ol>
            </section>
            <section data-testid="troubleshooting-sect" id="troubleshooting-sect">
                <h3>Troubleshooting</h3>
                <p>If you are having trouble using the website, please refer to the following section:</p>
                <h4>This section provides troubleshooting tips for common problems. If you are still having trouble, please contact us for help.</h4>
                <ul>
                    <li>Make sure that you are logged in to your Spotify account. If you are not logged in, the website will not be able to create a new Spotify playlist for you.</li>
                    <li>Make sure that the URL of your YouTube playlist is correct. If the URL is incorrect, the website will not be able to find your playlist.</li>
                    <li>Make sure that your YouTube playlist is public. If your playlist is private, the website will not be able to access it.</li>
                </ul>
            </section>
            <section data-testid="common-problems-sect">
                <h3>Common Problems</h3>
                <ul>
                    <li>The website is not loading. This may be due to a problem with your internet connection. Try refreshing the page or restarting your browser.</li>
                    <li>The website is not creating a new Spotify playlist. This may be due to a problem with your Spotify account. Try logging out and logging back in.</li>
                    <li>The website is not finding my YouTube playlist. This may be due to a problem with the URL of your playlist. Try copying and pasting the URL again.</li>
                    <li>Some of the songs may not be the same, Spotify's search could get confused with a similar song name or artist</li>
                </ul>
            </section>
            <section data-testid="contact-sect">
                <h3>Contacting Us</h3>
                <p>If you have any questions or problems, please contact us. You can contact us by email or by opening a support ticket.</p>
            </section>
            <footer>We hope you enjoy using our website! If you have any feedback or suggestions, please feel free to <Link className="nav-links" to="/ContactUs">contact us.</Link></footer>
        </motion.div>
    )
}

export default Help