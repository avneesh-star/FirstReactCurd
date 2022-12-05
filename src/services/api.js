import axios from "axios";

const url = "http://localhost:5266/api/dcandidate/";

class CandidateApi {
  Create = async (formData) => {
    let res = await axios.post(url, formData);
    return await res.data;
  };

  Delete = async (Id) => {
    let res = await axios.delete(url + Id);
    return await res.data;
  };

  detail = async (Id) => {
    let res = await axios.get(url + Id);
    return await res.data;
  };

  // GetDetail = async (Id, sethtmlFormData) => {
  //   axios
  //     .get(url + Id)
  //     .then((res) => {
  //       if (res.data.success) {
  //         console.log("detail api respone");
  //         console.log(res.data.result);
  //         sethtmlFormData(res.data.result);
  //       } else {
  //         console.log(res.data.message);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };

  update = async (Id, updatedData) => {
    let res = await axios.put(url + Id, updatedData);
    return await res.data;
  };

  GetAll = (setData) => {
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          setData(res.data.result);
        } else {
          console.log(res.data.message);
        }
      })
      .catch((err) => console.log(err));
  };
}

export default CandidateApi;
