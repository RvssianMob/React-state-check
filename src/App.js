import React, { Component } from 'react';
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Gbolahan-Anthonio',
        bio: 'Best to ever do it, and currently finding my feet, see you on the other side ',
        profession: 'Music producer/Web developer.',},
      show: false,
      timeInterval: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeInterval } = this.state;

    return (
      <div className='App'>
        <button className='button' onClick={this.toggleShow}><span>Toggle Profile</span></button>
        {show && (
          <div>
            <h2>{fullName}</h2>
            <img src={imgSrc} alt="Profile" />
            <p>Bio: {bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Time Interval: {timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;