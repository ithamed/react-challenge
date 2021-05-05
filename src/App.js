import { Component } from 'react';
import axios from 'axios';
import Image from './Component/Image';
import Input from './Component/Input';
import InformationDev from './Component/InformationDev';
import Repositories from './Component/Repositories';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input:"aboudmourad",
      user:"",
      repos:[]
    }
  }
  componentDidMount = () => {
    this.onClick()
  }
  onClick = (e) => {
    e && e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.input}?client_id=63556e401dc13c96f5b7&client_secret=d34a246c3268f5b887f9b2dbd3113b0e8240206b&sort=created`)
      .then(res => {
        console.log(res)
        this.setState({user: res.data})
        axios.get(this.state.user.repos_url)
        .then(res => {
          console.log(res)
          this.setState({repos: res.data})
        })
        .catch(err => {
          console.log(err)
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  onChange = (e) => this.setState({[e.target.name]: e.target.value})
  render(){
    console.log(this.state.repos)
    const name = "Fullname:" + this.state.user.name;
    const userName = "Username:" + this.state.user.login;
    const location = "Location:" + this.state.user.location;
    const email = "Email Adress:" + this.state.user.email;
    return (
      <div className="container">
        <div className="row">
          <Image className="col" user={this.state.user}/>
          <div className="col-8">
            <Input input={this.state.input} onChange={this.onChange} onClick={this.onClick}/>
            <div>
              <InformationDev value={name}/>
              <InformationDev value={userName}/>
              <InformationDev value={location}/>
              <InformationDev value={email}/>
            </div>
          </div>
        </div>
          <Repositories repos={this.state.repos}/>
      </div>
    );
  }
}

export default App;
