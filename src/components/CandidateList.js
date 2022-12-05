import React, { useState, useEffect } from "react";
import CandidateApi from "../services/api";
import CandidatehtmlForm from "./CandidateForm";
import { Link } from "react-router-dom";
const url = "http://localhost:5266/api/dcandidate";
const api = new CandidateApi();
const CandidateList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.GetAll(setData);
  }, []);

  const handleDelete = (id) => {
    api
      .Delete(id)
      .then((data) => {
        console.log(data);
        if (data.success) {
          api.GetAll(setData);
        }
      })
      .catch((error) => console.log(error));
  };

  console.log(data);
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Mobile</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Bloodgroup</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <>
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.mobile}</td>
                  <td>{item.email}</td>
                  <td>{item.age}</td>
                  <td>{item.bloodGroup}</td>
                  <td>
                    <Link to={"/update/" + item.id}>
                      <button
                        className="btn btn-primary btn-sm"
                        // onClick={() => (
                        //   <>
                        //     <CandidatehtmlForm Id={item.id} />
                        //   </>
                        // )}
                      >
                        Edit
                      </button>
                    </Link>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CandidateList;
