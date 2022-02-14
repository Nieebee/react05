import React, { Component } from "react";

export default class App extends Component {
  state = {
    students: [
      {
        name: "Pedro",
      },
      {
        name: "Thiago",
      },
      {
        name: "João",
      },
      {
        name: "Miguel",
      },
      {
        name: "Paulo",
      },
      {
        name: "Renan",
      },
    ],
  };
  render() {
    return (
      <div>
        <p>Lista de alunos:</p>
        {this.state.students.map((name) => (
          <div>
            <p>{name.name}</p>
          </div>
        ))}
      </div>
    );
  }
}
