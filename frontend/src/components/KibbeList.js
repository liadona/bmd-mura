import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
 
const KibbeList = () => {
  const [kibbes, setKibbe] = useState([]);
 
  useEffect(() => {
    getKibbes();
  }, []);
 
  const getKibbes = async () => {
    const response = await axios.get("http://localhost:5000/kibbes");
    setKibbe(response.data);
  };
 
  const deleteKibbe = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/kibbes/${id}`);
      getKibbes();
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
              <th>Merk</th>              
              <th>Tahun Perolehan</th>
              <th>Kode Unik</th>
              <th>Harga Perolehan</th>
              <th>Nomor BPKB </th>
              <th>OPD Pengampu</th>
              <th>Pemegang</th>             
              <th>Keterangan</th>
              <th>Historis</th>
              <th>File Pendukung</th>           

            </tr>
          </thead>
          <tbody>
            {kibbes.map((kibbe, index) => (
              <tr key={kibbe._id}>
                <td>{index + 1}</td>
                <td>{kibaa.kodebmd}</td>
                <td>{kibaa.nama}</td>
                <td>{kibaa.merk}</td>
                <td>{kibaa.opd}</td>
                <td>{kibaa.nounik}</td>

                <td>
                  <Link
                    to={`edit/${kibbe._id}`}
                    className="button is-info is-small mr-1"
                  >
                    Edit
                  </Link>
                  
                  <button
                    onClick={() => deleteKibbe(kibaa._id)}
                    className="button is-danger is-small"
                  >
                    Delete
                  </button>

                  <Link
                    to={`edit/${kibbe._id}`}
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
 
export default KibbeList;