import React from 'react'
import './bracket.css'

class BracketInput extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         inputTemp: '',
         users: []
      }
   }

   componentDidMount() {
      // get current users in bracket, this will have to be implemented and rendered later...
      fetch('http://localhost:5252/')
      .then(response => response.json()) //Dont need this until backend is established.
      .then(data => {
         console.log(data)
         this.setState({users: data})
      })

   }


   userInfo = (event) => {
      event.preventDefault()
      console.log(event.target.value)
      this.setState({inputTemp: event.target.value})
   }

   addUser = (event) => {
      event.preventDefault()
      console.log(`Adding user:${this.state.inputTemp}`)
      this.state.users.push(this.state.inputTemp)
      // Here you will require the backend to actually update the data.
   }

   displayUsers = (users) => {
      var group = users.map(specificPerson => {
         return(
            <div>
               {specificPerson.username}
            </div>
         )
      })
      return group

   } 

   render() {
      return(
         <div className = 'mainForm'>

            Form 1: 
            <form onSubmit = {e => this.addUser(e)}>
               <p>Please insert the following information:</p>
               Player Username: <input required type = 'text' onChange = {e => this.userInfo(e)} />
               <button>Add user</button>
            </form>

            Form 2:
            <form>
               <p>Generate random pool</p>
            </form>
            Users: {this.displayUsers(this.state.users)}

            <button onClick = {e => console.log(this.state.inputTemp)}>Input Temp</button>
            <button onClick = {e => console.log(this.state.users)}>Users currently in game</button>

         </div>
      )
   }
}

export default BracketInput