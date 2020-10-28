import React, { Component } from 'react'
import axios from 'axios'

class IdeasContainer extends Component {
    constructor(props) {
    super(props)
    this.state = {
        ideas: []
    }
    }
      
    render() {
        return (
          <div>
            {this.state.ideas.map((idea) => {
              return(
                <div className="tile" key={idea.id} >
                  <h4>{idea.title}</h4>
                  <p>{idea.body}</p>
                </div>
              )       
            })}
          </div>
        );
      }
    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/ideas.json')
        .then(response => {
          console.log(response)
          this.setState({ideas: response.data})
        })
        .catch(error => console.log(error))
      }
}

export default IdeasContainer
