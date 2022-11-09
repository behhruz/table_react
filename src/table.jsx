import React from "react";
import "./table.css";

class Students extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      g6: [
        {
          id: 1,
          name: "Elyorbek",
          age: 16,
          job: "developer",
        },
        {
          id: 2,
          name: "Abdulaziz",
          age: 17,
          job: "developer",
        },
        {
          id: 3,
          name: "Begzod",
          age: 25,
          job: "developer",
        },

        {
          id: 4,
          name: "Munisa",
          age: 14,
          job: "developer",
        },

        {
          id: 5,
          name: "Dilshoda",
          age: 15,
          job: "developer",
        },

        {
          id: 6,
          name: "Javohir",
          age: 19,
          job: "developer",
        },

        {
          id: 7,
          name: "Kamoliddin",
          age: 22,
          job: "developer",
        },

        {
          id: 8,
          name: "Husniddin",
          age: 16,
          job: "developer",
        },
        {
          id: 9,
          name: "Husniddin",
          age: 16,
          job: "developer",
        },
        {
          id: 10,
          name: "Husniddin",
          age: 16,
          job: "developer",
        },
        {
          id: 11,
          name: "Husniddin",
          age: 16,
          job: "developer",
        },
        {
          id: 12,
          name: "Husniddin",
          age: 16,
          job: "developer",
        },
        {
          id: 13,
          name: "Husniddin",
          age: 16,
          job: "developer",
        },
      ],
    };
  }
  render() {
    const onDelete = (id) => {
      let res = this.state.g6.filter((v) => v.id !== id);
      this.setState({ g6: res });
    };
    const onEdit = () => {};
    const onAdd = () => {
      let user = {
        id: this.state.g6.length + 1,
        name: this.state.name,
        age: this.state.age,
        job: this.state.job,
      };
      this.setState({
        g6: [...this.state.g6, user],
        name: "",
        age: "",
        job: "",
      });
    };
    return (
      <div>
        <div className="bigtable">
        <div className="inputs">
     <input
          value={this.state.name}
          className="input"
          type="text"
          placeholder="name"
          name="name"
        />
        <input
          value={this.state.age}
          type="number"
          placeholder="age"
          name="age"
        />
        <input
          value={this.state.job}
          type="text"
          placeholder="job"
          name="job"
        />
        <button onClick={onAdd}>add</button>
     </div>
          <table className="table" width={"90%"}>
            <thead className="fixed-tr">
              <tr className="fixed-tr">
                <th className="th">ID</th>
                <th className="th">NAME</th>
                <th className="th">AGE</th>
                <th className="th">JOb</th>
                <th className="th">DELETE</th>
                <th className="th">EDIT</th>
              </tr>
            </thead>
            <tbody className="tbody">
              {this.state.g6.map(({ id, name, age, job }) => {
                return (
                  <tr key={id}>
                    <td className="asd id-sticky">{id}</td>
                    <td className="qwe">{name}</td>
                    <td className="zxc">{age}</td>
                    <td className="rfv">{job}</td>
                    <td>
                      <button onClick={() => onDelete(id)} className="pli">
                        delete
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => onEdit({ name, age, job })}
                        className="edit_sticy"
                      >
                        edit
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Students;
