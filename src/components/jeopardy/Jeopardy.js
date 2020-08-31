import React, { Component } from 'react';

//import our service
import JeopardyService from "../../jeopardyService";

class Jeopardy extends Component {

  //set our initial state and set up our service as this.client on this component
  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {
        id: "",
        answer: "",
        question: "",
        value: "",
        category: "",
      },
      score: 0
    }
  }

  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0],
        score: 0,
      })
    })
  }

  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }

  handleChange = (event) => {
    const { answer } = {...this.state}
    answer[event.target.value] = event.target.value
    this.setState({
      answer
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.updateScore({...this.state.score})
    this.setState({
      // data: result.data[0],
      score: this.state.score,
    })
  }

  //display the results on the screen
  render() {

    // THIS IS CONDITIONAL RENDERING
    // let category = "loading";
    // if(this.state.data.category) {
    //   category = this.state.data.category.title
    // }

    return (

      <div>
        <strong>Users Score: </strong> { this.state.score } <br />
        <strong>Question: </strong> { this.state.data.question } <br />

          <form className="Answer">
          <strong>Answer: </strong> 
            <input
            name="Answer"
            placeholder="Answer"
            type="text"
            value={this.state.answer}
            onChange={this.handleChange}
            />
          {/* <strong>Score: </strong> 
            <input
            name="score"
            placehoder="score"
            type="number"
            value={this.state.data.value}
            onChange={this.handleChange}
            /> */}
            <button>Submit Answer</button>
          </form>

        <strong>Value</strong> { this.state.data.value } <br />
        <strong>Category: </strong> { this.state.data.category.title }
        
        {/* {JSON.stringify(this.state.data.question)} */}
      </div>
    );
  }
}

export default Jeopardy;