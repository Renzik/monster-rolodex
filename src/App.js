import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super(); // calls the cosntructor method on the Component class, giving us access to this.state
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }))
      .catch((promiseRejection) => console.error(promiseRejection));
  }

  handleChange = (e) => {
    // this.setState({ searchField: e.target.value });
    const target = e.target.value;
    this.setState(
      (prevState, prevProps) => {
        return { searchField: target };
      },
      () => console.log(this.state.searchField)
    );
  };

  render() {
    const { monsters, searchField } = this.state;
    const filtered = monsters.filter(({ name }) =>
      name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1 id='title'> Monster Rolodex </h1>
        <SearchBox handleChange={this.handleChange} placeholder='Search monsters' />
        <CardList monsters={filtered} />
      </div>
    );
  }
}

// const App = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>The Count is: {count}</p>
//         {/* <button onClick={() => this.setState({ ...this.state, string: "123" })}>Click me!</button> */}
//         <button onClick={() => setCount(count + 1)}> Click me! </button>
//       </header>
//     </div>
//   );
// };

export default App;
