import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
 
const KibdeList = () => {
  const [kibdes, setKibde] = useState([]);
 
  useEffect(() => {
    getKibdes();
  }, []);
 
  const getKibdes = async () => {
    const response = await axios.get("http://localhost:5000/kibdes");
    setKibde(response.data);
  };
 
  const deleteKibde = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/kibdes/${id}`);
      getKibdes();
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
              <th>Konstruksi</th>
              <th>Panjang</th>
              <th>Lebar</th>
              <th>Letak</th>
              <th>Lang</th>
              <th>Lat</th>
              <th>Status Tanah</th>
              <th>Kode Tanah</th>
              <th>Harga</th>
              <th>Tahun Perolehan</th>
              <th>OPD Pengampu</th>
              <th>Kegunaan</th>
              <th>No Unik</th>
              <th>Keterangan</th>
              <th>Historis</th>
              <th>File Pendukung</th>           

            </tr>
          </thead>
          <tbody>
            {kibdes.map((kibde, index) => (
              <tr key={kibde._id}>
                <td>{index + 1}</td>
                <td>{kibde.kodebmd}</td>
                <td>{kibde.nama}</td>
                <td>{kibde.luas}</td>
                <td>{kibde.opd}</td>
                <td>{kibde.guna}</td>

                <td>
                  <Link
                    to={`edit/${kibde._id}`}
                    className="button is-info is-small mr-1"
                  >
                    Edit
                  </Link>
                  
                  <button
                    onClick={() => deleteKibde(kibde._id)}
                    className="button is-danger is-small"
                  >
                    Delete
                  </button>

                  <Link
                    to={`edit/${kibde._id}`}
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
 
export default KibdeList;