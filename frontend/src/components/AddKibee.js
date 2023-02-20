import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
const AddKibee = () => {
  const [kodebmd, setKodebmd] = useState("");
  const [nama, setNama] = useState("");
  const [jenis, setJenis] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [opd, setOpd] = useState("");
  const [guna, setGuna] = useState("");
  const [thnoleh, setThnoleh] = useState("");
  const [harga, setHarga] = useState("");
  const [nounik, setNounik] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [historis, setHistoris] = useState("");
  const [file, setFile] = useState("");  

   const navigate = useNavigate();
 
  const saveKibee = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/kibees", {
        kodebmd,
        nama,
        jenis,
        jumlah,
        opd,
        guna,
        thnoleh,
        harga,
        nounik,
        keterangan,
        historis,
        file

      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={saveKibee}>

        <div className="field">
            <label className="label">Kode Barang</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={kodebmd}
                onChange={(e) => setKodebmd(e.target.value)}
                placeholder="Masukan kode barang"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Nama</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Nama"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Jenis</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={jenis}
                onChange={(e) => setJenis(e.target.value)}
                placeholder="Jenis BMD"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Jumlah</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={jumlah}
                onChange={(e) => setJumlah(e.target.value)}
                placeholder="Jumlah barang"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">OPD</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={opd}
                onChange={(e) => setOpd(e.target.value)}
                placeholder="OPD Pengampu"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Kegunaan</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={guna}
                onChange={(e) => setGuna(e.target.value)}
                placeholder="Pengunaan Barang"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Tahun Perolehan</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={thnoleh}
                onChange={(e) => setThnoleh(e.target.value)}
                placeholder="Tahun Perolehan"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Harga</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
                placeholder="Harga Perolehan"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">No. Unik</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nounik}
                onChange={(e) => setNounik(e.target.value)}
                placeholder="Masukan no unik barang"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Keterangan</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={keterangan}
                onChange={(e) => setKeterangan(e.target.value)}
                placeholder="Masukkan deskripsi, catatan dan/atau keterangan tentang Objek BMD"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Historis</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={historis}
                onChange={(e) => setHistoris(e.target.value)}
                placeholder="Tulis Hitoris perubahan BMD mulai dari pengadaan sampai sekarang"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">File Pendukung</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={file}
                onChange={(e) => setFile(e.target.value)}
                placeholder="File yang medukung BMD"
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default AddKibee;