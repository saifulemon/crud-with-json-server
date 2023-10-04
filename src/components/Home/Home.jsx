import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {

    const [data, setData] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:3001/users')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, []);

    const handleDelete = (id) => {
        const confirm = window.confirm("Do you like to Delete?");
        if(confirm) {
            axios.delete('http://localhost:3001/users/'+id)
            .then(res => {
                console.log(res.data);
                window.location.reload(true);
            })
        }
      }

  return (
    <div className="container ">
      <h2>Crud App with JSON Server</h2>
      <Link to="/create" className="btn btn-success my-3">
        Create +
      </Link>
      <table className="table table-responsive-md table-responsive table-responsive-sm">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>
                <Link
                  className="text-decoration-none btn btn-sm btn-success mx-2"
                  to={`/update/${d.id}`}
                >
                  Update
                </Link>
                <button
                  className="text-decoration-none btn btn-sm btn-danger mx-2"
                  onClick={() => handleDelete(d.id)}
                >
                  Delete
                </button>
                <Link
                  className="text-decoration-none btn btn-sm btn-primary mx-2"
                  to={`/read/${d.id}`}
                >
                  Read
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
