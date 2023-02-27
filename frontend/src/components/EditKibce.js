import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
 
const EditKibce = () => {
    const [kodebmd, setKodebmd] = useState("");
    const [nama, setNama] = useState("");
    const [konsruksi, setKonsruksi] = useState("");
    const [alamat, setAlamat] = useState("");
    const [lang, setLang] = useState("");
    const [lat, setLat] = useState("");
    const [panjang, setPanjang] = useState("");
    const [lebar, setLebar] = useState("");
    const [luas, setLuas] = useState("");
    const [kodetanah, setKodetanah] = useState("");
    const [nounik, setNounik] = useState("");
    const [harga, setHarga] = useState("");
    const [thnoleh, setThnoleh] = useState("");
    const [opd, setOpd] = useState("");
    const [guna, setGuna] = useState("");
    const [keterangan, setKeterangan] = useState("");
    const [historis, setHistoris] = useState("");
    const [file, setFile] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
 
  useEffect(() => {
    getKibceById();
  }, []);
 
  const getKibceById = async () => {
    const response = await axios.get(`http://localhost:5000/kibces/${id}`);
    setKodebmd(response.data.kodebmd);
    setNama(response.data.nama);
    setKonsruksi(response.data.konsruksi);
    setAlamat(response.data.alamat);
    setLang(response.data.lang);
    setLat(response.data.lat);
    setPanjang(response.data.panjang);
    setLebar(response.data.lebar);
    setLuas(response.data.luas);
    setKodetanah(response.data.kodetanah);
    setNounik(response.data.nounik);
    setHarga(response.data.harga);
    setThnoleh(response.data.thnoleh);
    setOpd(response.data.opd);
    setGuna(response.data.guna);
    setKeterangan(response.data.keterangan);
    setHistoris(response.data.historis);
    setFile(response.data.file);

    
  };
 
  const updateKibce = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/kibces/${id}`, {
        kodebmd,
        nama,
        konsruksi,
        alamat,
        lang,
        lat,
        panjang,
        lebar,
        luas,
        kodetanah,
        nounik,
        harga,
        thnoleh,
        opd,
        guna,             
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
        <form onSubmit={updateKibce}>

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
 
export default EditKibce;