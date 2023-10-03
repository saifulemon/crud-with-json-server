import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Read = () => {
  const { id } = useParams();
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/users/" + id)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 py-3 rounded text-center">
        <h2>Detail of User</h2>
        <h5>User Id: {data.id}</h5>
        <h5>username: {data.username}</h5>
        <h5>Name: {data.name}</h5>
        <h5>Email: {data.email}</h5>
        <Link to="/" className="btn btn-info me-3">Back</Link>
        <Link to="/update/:id" className="btn btn-outline-success ">Edit</Link>
      </div>
    </div>
  );
};

export default Read;
