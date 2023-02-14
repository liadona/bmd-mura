import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
 
const KibeeList = () => {
  const [kibees, setKibee] = useState([]);
 
  useEffect(() => {
    getKibees();
  }, []);
 
  const getKibees = async () => {
    const response = await axios.get("http://localhost:5000/kibees");
    setKibee(response.data);
  };
 
  const deleteKibee = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/kibees/${id}`);
      getKibees();
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
              <th>Nama Barang</th>
              <th>Jenis</th>
              <th>Jumlah</th>
              <th>OPD Pengampu</th>
              <th>Kegunaan</th>
              <th>Tahun Perolehan</th>
              <th>Harga</th>
              <th>Keterangan</th>
              <th>Historis</th>
              <th>File Pendukung</th>           

            </tr>
          </thead>
          <tbody>
            {kibees.map((kibee, index) => (
              <tr key={kibee._id}>
                <td>{index + 1}</td>
                <td>{kibee.kodebmd}</td>
                <td>{kibee.nama}</td>
                <td>{kibee.jumlah}</td>
                <td>{kibee.opd}</td>
                <td>{kibee.guna}</td>

                <td>
                  <Link
                    to={`edit/${kibee._id}`}
                    className="button is-info is-small mr-1"
                  >
                    Edit
                  </Link>
                  
                  <button
                    onClick={() => deleteKibee(kibee._id)}
                    className="button is-danger is-small"
                  >
                    Delete
                  </button>

                  <Link
                    to={`edit/${kibee._id}`}
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
 
export default KibeeList;