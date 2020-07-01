import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      thingList : []
    }

    this.thingCreatedHandler = this.thingCreatedHandler.bind(this);
  }

  thingCreatedHandler(item) {
    const updatedThing = this.state.thingList

    updatedThing.push({
      name: item.name
    })

    this.setState({
      thingList : updatedThing
    })
  }


  render() {
    return (
      <>
      <div className="App">
      <Header count={this.state.thingList.length} />
      <hr></hr>
      <main>
        <ThingList list={this.state.thingList} onThingCreate={this.thingCreatedHandler} />
      </main>
      <Footer author="Joseph Zabaleta" />
      </div>


      </>
    )
  }
}

class ThingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name : '',
      }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    const newName = event.target.value
    this.setState({
      name: newName
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onThingCreate(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <hr></hr>
        <label>
          Name of Thing to Add::
          <input type="text" value={this.state.name} onChange={this.handleChange}>
          </input>
        </label>
        <button type="submit"> Submit </button>
      </form>
    )
  }
}


function Header(props) {
  return (
    <header>
      <h1>Home Page</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <p>The current count of our list of things: <b>{props.count}</b></p>
    </header>
  )
}

function ThingList(props) {
  return (
    <>
    <h4>List of Things :</h4>
    <ul>
      {props.list.map(item => <ThingItem list={item} key={props.list.indexOf(item)} />)}
    </ul>

    <ThingForm onThingCreate={props.onThingCreate} />
    </>
  )
}

function ThingItem(props) {
  return (
    <li>{props.list.name}</li>
  )
}


function Footer(props) {
  return (
    <footer>
      <h4>
        React App by: {props.author}
      </h4>
    </footer>
  )
}


export default App;
