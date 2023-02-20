import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
const AddKibce = () => {
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
 
  const saveKibce = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/kibces", {
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
        <form onSubmit={saveKibce}>

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
            <label className="label">Konstruksi</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={konsruksi}
                onChange={(e) => setKonsruksi(e.target.value)}
                placeholder="Jenis Konstruksi bangunan"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Lang</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                placeholder="input Lang dari GoogleMap"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Lat</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={lat}
                onChange={(e) => setLat(e.target.value)}
                placeholder="masukkan Latitude dari GoogleMap"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Panjang</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={panjang}
                onChange={(e) => setPanjang(e.target.value)}
                placeholder="Dalam Meter"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Lebar</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={lebar}
                onChange={(e) => setLebar(e.target.value)}
                placeholder="Dalam Meter"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Luas</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={luas}
                onChange={(e) => setLuas(e.target.value)}
                placeholder="Dalam Meter Persegi"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Kode Tanah</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={kodetanah}
                onChange={(e) => setKodetanah(e.target.value)}
                placeholder="Masukkan kode tanah dari KIB A"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Nomor Unik</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nounik}
                onChange={(e) => setNounik(e.target.value)}
                placeholder="Masukkan Kode/nomor unik dari BMD tersebut"
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
                placeholder="Tahun Perolehan BMD"
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
                placeholder="Organisasi Perangkat Daerah"
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
                placeholder="Organisasi Perangkat Daerah"
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
 
export default AddKibce;