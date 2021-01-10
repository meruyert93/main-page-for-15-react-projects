import logo from './logo.svg';
import './App.css';
import data from '../src/data';
import Projects from '../src/projects'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* // eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="App-link">
          <h1>React Basic Projects</h1>
        </a>
      </header>
        <main>
            <section className="section">
                <h2 className="section-title">
                    developed by Meruyert Karim
                </h2>
                <div className="cocktails-center">
                    {data.map((item) => {
                        return (
                            <Projects key={item.id} {...item}/>
                        )
                    })}
                </div>
            </section>
        </main>
    </div>
  );
}

export default App;
