import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
const AddKibbe = () => {
  const [kodebmd, setKodebmd] = useState("");
  const [nama, setNama] = useState("");
  const [merk, setMerk] = useState("");
  const [thnoleh, setThnoleh] = useState("");
  const [nounik, setNounik] = useState("");
  const [hargaoleh, setHargaoleh] = useState("");
  const [nobpkb, setNobpkb] = useState("");
  const [opd, setOpd] = useState("");
  const [pemegang, setPemegang] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [historis, setHistoris] = useState("");
  const [file, setFile] = useState("");  

   const navigate = useNavigate();
 
  const saveKibbe = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/kibaas", {
        kodebmd,
        nama,
        merk,
        thnoleh,
        nounik,
        hargaoleh,
        nobpkb,
        opd,
        pemegang,
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
        <form onSubmit={saveKibbe}>

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
            <label className="label">Merk</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={merk}
                onChange={(e) => setMerk(e.target.value)}
                placeholder="Merek Barang"
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
            <label className="label">No. Unik</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nounik}
                onChange={(e) => setNounik(e.target.value)}
                placeholder="Masukan No. Mesin, No. Rangka atau No Polisi "
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Harga Perolehan</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={hargaoleh}
                onChange={(e) => setHargaoleh(e.target.value)}
                placeholder="Harga Perolehan"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">No. BPKB</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nobpkb}
                onChange={(e) => setNobpkb(e.target.value)}
                placeholder="Masukkan No. BPKB"
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
            <label className="label">Pemegang</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={pemegang}
                onChange={(e) => setPemegang(e.target.value)}
                placeholder="Masukkan Pemegang Kendaraan"
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
 
export default AddKibbe;