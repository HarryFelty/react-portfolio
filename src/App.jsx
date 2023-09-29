// Todo: Bring in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';


const styles = {
  header: {
    backgroundColor: 'rgb(79, 82, 104)',
    display: 'flex',
    justifyContent: 'space-between'
  },
  name: {
    color: "rgb(0, 133, 177)",
    fontSize: "60pt",
    padding: '15px',
  },
  main: {

  }
}

function App() {
  return (
    <>
      <header style={styles.header}>
        <h1 style={styles.name}>Harry Felty</h1>
        <Nav />
      </header >

      <main className="mx-3" style={styles.main}>
        <Outlet />
      </main>

      <footer>
        <a href="https://github.com/HarryFelty">
          <FontAwesomeIcon icon={faGithub} size="4x" />
        </a>
        <a href="https://www.linkedin.com/in/harry-felty-414683234">
          <FontAwesomeIcon icon={faLinkedin} size="4x" />
        </a>
        <a href="https://stackoverflow.com/users/22654771/harry-felty">
          <FontAwesomeIcon icon={faStackOverflow} size="4x" />
        </a>
      </footer>
    </>
  );
}

export default App;
