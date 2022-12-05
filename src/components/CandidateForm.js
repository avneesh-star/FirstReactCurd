import React, { useState, useEffect } from "react";
import CandidateApi from "../services/api";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import { useParams } from "react-router-dom";

const candidateApi = new CandidateApi();
/*
{
    "id": 10,
    "name": "prem",
    "mobile": "8990909090",
    "email": "prem_00@yopmail.com",
    "age": 23,
    "bloodGroup": "a-",
    "address": null
}
*/

const CandidatehtmlForm = () => {
  const { Id } = useParams();
  const [htmlFormData, sethtmlFormData] = useState({
    id: 0,
    name: "",
    mobile: "",
    email: "",
    age: "",
    bloodGroup: "#",
    address: null,
  });

  useEffect(() => {
    if (Id) {
      candidateApi
        .detail(Id)
        .then((data) => {
          console.log(data);
          if (data.success) {
            sethtmlFormData(data.result);
          }
        })
        .catch((error) => console.log(error));
    }
  }, []);

  const history = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (Id) {
      await candidateApi
        .update(Id, htmlFormData)
        .then((data) => {
          console.log(data);
          if (data.success) {
            history("/list");
          }
        })
        .catch((error) => console.log(error));
    } else {
      await candidateApi
        .Create(htmlFormData)
        .then((data) => {
          console.log(data);
          if (data.success) {
            history("/list");
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <form className="row g-3" onSubmit={onSubmit}>
        <div className="col-md-6">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="cname"
            id="txt_name"
            value={htmlFormData.name}
            onChange={(e) =>
              sethtmlFormData({ ...htmlFormData, name: e.target.value })
            }
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="txt_mobile" className="form-label">
            Mobile
          </label>
          <input
            type="text"
            className="form-control"
            name="mobile"
            value={htmlFormData.mobile}
            onChange={(e) =>
              sethtmlFormData({ ...htmlFormData, mobile: e.target.value })
            }
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="txt_email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="txt_email"
            value={htmlFormData.email}
            onChange={(e) =>
              sethtmlFormData({ ...htmlFormData, email: e.target.value })
            }
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="txt_age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            name="age"
            id="txt_age"
            value={htmlFormData.age}
            onChange={(e) =>
              sethtmlFormData({ ...htmlFormData, age: e.target.value })
            }
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            BloodGroup
          </label>
          <select
            id="ddl_bloodgroup"
            className="htmlForm-select"
            name="bloodgroup"
            value={htmlFormData.bloodGroup}
            onChange={(e) =>
              sethtmlFormData({ ...htmlFormData, bloodGroup: e.target.value })
            }
          >
            <option value="#">Choose BloodGroup.</option>
            <option value="a+">A+</option>
            <option value="a-">A-</option>
            <option value="b+">B+</option>
            <option value="b-">B-</option>
            <option value="ab+">AB+</option>
            <option value="ab-">AB-</option>
            <option value="o+">O+</option>
            <option value="o-">O-</option>
          </select>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            {Id ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
};

export default CandidatehtmlForm;
