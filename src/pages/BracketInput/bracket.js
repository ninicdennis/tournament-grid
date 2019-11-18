import React from 'react'
import './bracket.css'

class BracketInput extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         inputTemp: '',
         falseText: '',
         users: []
      }
   }

   componentDidMount() {
      fetch('http://localhost:5252/')
      .then(response => response.json()) 
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

      fetch('http://localhost:5252/adduser', {
         method:'POST',
         headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({username: this.state.inputTemp})
         })
         .then(response => {
            console.log(response)
            console.log('Adding user...')
            this.setState({inputTemp: ''})
            fetch('http://localhost:5252/')
               .then(response => response.json()) 
               .then(data => {
               console.log(data)
               this.setState({users: data, inputTemp: ''})
            })
      })
   }

   displayUsers = (users) => {
      var group = users.map(specificPerson => {
         return(
            <div>
               {specificPerson.username}
               <button onClick = {e => {this.deleteUser(e, specificPerson.user_id)}}>
                  Delete
               </button>
            </div>
         )
      })
      return group

   } 

   deleteUser = (event,id) => {
      event.preventDefault()
      console.log(`Deleting User #${id}`)
      fetch(`http://localhost:5252/deleteuser/${id}`,{
         method: 'DELETE',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify({user_id: id})
      })
      .then(response => response.json())
      .then(data => {
         console.log(data);
         fetch('http://localhost:5252/')
         .then(response => response.json()) 
         .then(data => {
            console.log(data)
            this.setState({users: data})
         })

      })
   }

   render() {
      return(
         <div className = 'mainForm'>

            Form 1: 
            <form onSubmit = {e => this.addUser(e)}>
               <p>Please insert the following information:</p>
               Player Username: <input required type = 'text' value = {this.state.inputTemp} onChange = {e => this.userInfo(e)} />
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