import React, { Component } from 'react';

//import our service
import JeopardyService from "../../jeopardyService";

class Jeopardy extends Component {

  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {
        "id": null,
        "answer": "",
        "question": "",
        "value": null,
        "airdate": "",
        "created_at": "",
        "updated_at": "",
        "category_id": null,
        "game_id": null,
        "invalid_count": null,
        "category": {
          "id": null,
          "title": "",
          "created_at": "",
          "updated_at": "",
          "clues_count": null
        }
      },
      score: 0
    }
  }

  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0],
      })
      //show the data you want, like the answer, in console log to test
      console.log(this.state.data.answer)
    })
  }
  //when the component mounts (after the first render), get the first question
  componentDidMount() {
    this.getNewQuestion()
  }

  handleChange = (event) => {
    const newAnswer = event.target.value;
    this.setState({
      answer: newAnswer
    })
  }


  // handleChange = (event) => {
  //   const formData = { ...this.state.formData };
  //   formData[event.target.name] = event.target.value;

  //   this.setState({ formData });
  // }


  // handleChange = (event) => {
  //   const formData = { newAnswer };
  //   if newAnswer === { this.state.data.answer }
  //   const { newAnswer } = { ...this.state.answer };
  //   if (formData[""]) == event.target.answer()
  //   // answer[event.target.value] = event.target.value
  //   this.setState({ answer: newAnswer });
  // }

  handleSubmit = (event) => {
    let newScore = event.target.value
    event.preventDefault()
    this.props.updateScore({ ...this.state.score })
    this.setState({ score: newScore })
    this.getNewQuestion()
  }

  //display the results on the screen
  render() {

    return (

      <div>
        <form className="Answer">

          <strong>Question: </strong> {this.state.data.question}
          <br />

          <strong>Value: </strong> {this.state.data.value} <strong> points!</strong>
          <br />

          <strong>Answer: </strong>
          <input
            name="Answer"
            placeholder="Answer"
            type="text"
            value={this.state.answer}
            onChange={this.handleChange}
          />
          <br />

          <button>Submit Answer</button>

          <strong>Category: </strong> {this.state.data.category.title}
          <br />

          <strong>Users Score: </strong> {this.state.score}

        </form>
      </div>
    );
  }
}

export default Jeopardy;