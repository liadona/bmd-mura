import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
 
const KibaaList = () => {
  const [kibaas, setKibaa] = useState([]);
 
  useEffect(() => {
    getKibaas();
  }, []);
 
  const getKibaas = async () => {
    const response = await axios.get("http://localhost:5000/kibaas");
    setKibaa(response.data);
  };
 
  const deleteKibaa = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/kibaas/${id}`);
      getKibaas();
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
              <th>panjang</th>
              <th>lebar</th>
              <th>luas</th>
              <th>Tahun Perolehan</th>
              <th>Alamat</th>
              <th>Lang</th>
              <th>Lat</th>
              <th>Nomor Sertifikat</th>
              <th>Tanggal Sertifikat</th>
              <th>Guna</th>
              <th>OPD Pengampu</th>
              <th>Sumber Dana</th>
              <th>Harga Perolehan</th>
              <th>Keterangan</th>
              <th>Historis</th>
              <th>File Pendukung</th>           

            </tr>
          </thead>
          <tbody>
            {kibaas.map((kibaa, index) => (
              <tr key={kibaa._id}>
                <td>{index + 1}</td>
                <td>{kibaa.kodebmd}</td>
                <td>{kibaa.nama}</td>
                <td>{kibaa.luas}</td>
                <td>{kibaa.opd}</td>
                <td>{kibaa.guna}</td>

                <td>
                  <Link
                    to={`edit/${kibaa._id}`}
                    className="button is-info is-small mr-1"
                  >
                    Edit
                  </Link>
                  
                  <button
                    onClick={() => deleteKibaa(kibaa._id)}
                    className="button is-danger is-small"
                  >
                    Delete
                  </button>

                  <Link
                    to={`edit/${kibaa._id}`}
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
 
export default KibaaList;