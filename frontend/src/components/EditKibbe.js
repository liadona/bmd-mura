import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
 
const EditKibbe = () => {
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
  const { id } = useParams();
 
  useEffect(() => {
    getKibbeById();
  }, []);
 
  const getKibbeById = async () => {
    const response = await axios.get(`http://localhost:5000/kibbes/${id}`);
    setKodebmd(response.data.kodebmd);
    setNama(response.data.nama);
    setMerk(response.data.merk);
    setThnoleh(response.data.thnoleh);
    setNounik(response.data.nounik);
    setHargaoleh(response.data.hargaoleh);
    setNobpkb(response.data.nobpkb);
    setOpd(response.data.opd);
    setPemegang(response.data.pemegang);
    setKeterangan(response.data.keterangan);
    setHistoris(response.data.historis);
    setFile(response.data.file);

    
  };
 
  const updateKibbe = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/kibbes/${id}`, {
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
        <form onSubmit={updateKibbe}>

          <div className="field">
            <label className="label">Kode Barang</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={kodebmd}
                onChange={(e) => setKodebmd(e.target.value)}
                placeholder="Maukkan Kode Barang"
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
                placeholder="Masukkan Nama"
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
                placeholder="Masukkan Merk"
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
                placeholder="Masukkan Tahun Perolehan"
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
                placeholder="Masukkan Nomor Unik"
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
                placeholder="Masukkan Harga Perolehan"
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
                placeholder="Masukkan Nomor BPKB"
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
                placeholder="a.n. Pemegang Kendaraan"
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
                placeholder="Keterangan BMD"
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
                placeholder="Tulis Catatan, mulai pengadaan hingga saat ini"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">File</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={file}
                onChange={(e) => setFile(e.target.value)}
                placeholder="File Pendukung BMD"
              />
            </div>
          </div>

                   
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default EditKibbe;