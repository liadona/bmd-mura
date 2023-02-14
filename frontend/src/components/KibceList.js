import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
 
const KibceList = () => {
  const [kibces, setKibce] = useState([]);
 
  useEffect(() => {
    getKibces();
  }, []);
 
  const getKibces = async () => {
    const response = await axios.get("http://localhost:5000/kibces");
    setKibce(response.data);
  };
 
  const deleteKibce = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/kibces/${id}`);
      getKibces();
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <Link to="add" className="button is-success">
          Tambah Data
        </Link>
        <table className="table is-striped is-fullwidth mt-2">
          <thead>
            <tr>
              <th>Kode BMD</th>
              <th>Nama </th>
              <th>Konstruksi</th>
              <th>Alamat</th>
              <th>lang</th>
              <th>Lat</th>
              <th>Panjang</th>
              <th>Lebar</th>
              <th>Luas</th>
              <th>Kode Tanah</th>
              <th>No. Unik</th>
              <th>Harga</th>
              <th>Tahun Perolehan</th>
              <th>OPD Pengampu</th>
              <th>Guna</th>
              <th>Keterangan</th>
              <th>Historis</th>
              <th>File Pendukung</th>           

            </tr>
          </thead>
          <tbody>
            {kibces.map((kibce, index) => (
              <tr key={kibce._id}>
                <td>{index + 1}</td>
                <td>{kibce.kodebmd}</td>
                <td>{kibce.nama}</td>
                <td>{kibce.luas}</td>
                <td>{kibce.opd}</td>
                <td>{kibce.guna}</td>

                <td>
                  <Link
                    to={`edit/${kibce._id}`}
                    className="button is-info is-small mr-1"
                  >
                    Edit
                  </Link>
                  
                  <button
                    onClick={() => deleteKibce(kibce._id)}
                    className="button is-danger is-small"
                  >
                    Delete
                  </button>

                  <Link
                    to={`edit/${kibce._id}`}
                    className="button is-info is-small mr-1"
                  >
                    Selengkapnya...
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
 
export default KibceList;