// Todo: Bring in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

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
        <p></p>
      </footer>
    </>
  );
}

export default App;
