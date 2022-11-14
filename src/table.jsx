import React from "react";
import "./table.css";
import { g6 } from "./data";

class Students extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: g6,
      name: "",
      age: "",
      job: "",
    };
  }
  render() {
    // delete function
    const onDelete = (id) => {
      let res = this.state.data.filter((v) => v.id !== id);
      this.setState({ data: res });
    };
    // edit function
    const onEdit = () => {};

    // search function
    const filter = ({ target: { value } }) => {
      let res = g6.filter((v) =>
        v.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );
      this.setState({ data: res });
    };
    const onChangeInput = ({ target: { value, name } }) => {
      this.setState({ [name]: value });
    };
    // add function
    const onAdd = () => {
      let users = [
        ...this.state.data,
        {
          id: this.state.data.length + 1,
          name: this.state.name,
          age: this.state.age,
          job: this.state.job,
        },
      ];
      return this.setState({ data: users });
    };
    return (
      <div>
        <div className="bigtable">
          <div className="inputs">
            <input
              onChange={onChangeInput}
              className="input"
              type="text"
              placeholder="name"
              name="name"
            />
            <input
              onChange={onChangeInput}
              type="number"
              placeholder="age"
              name="age"
            />
            <input
              onChange={onChangeInput}
              type="text"
              placeholder="job"
              name="job"
            />
            <button onClick={onAdd}>add</button>
            <input
              onChange={filter}
              className="inp"
              type="text"
              name="name"
              placeholder="search..."
            />
          </div>
          <table className="table" width={"90%"}>
            <thead className="fixed-tr">
              <tr className="fixed-tr">
                <th className="th">ID</th>
                <th className="th">NAME</th>
                <th className="th">AGE</th>
                <th className="th">JOb</th>
                <th className="th">Actions</th>
              </tr>
            </thead>
            <tbody className="tbody">
              {this.state.data.map((st, index) => {
                return (
                  <tr key={st.id}>
                    <td className="asd id-sticky">{st.id}</td>
                    <td className="qwe">{st.name}</td>
                    <td className="zxc">{st.age}</td>
                    <td className="rfv">{st.job}</td>
                    <td>
                      <button onClick={() => onDelete(st.id)} className="pli">
                        delete
                      </button>
                    </td>
                    <td>
                      <button onClick={onEdit(st.id)} className="edit_sticy">
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
