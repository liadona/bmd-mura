import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
const AddKibde = () => {
  const [kodebmd, setKodebmd] = useState("");
  const [nama, setNama] = useState("");
  const [konstruksi, setKonstruksi] = useState("");
  const [panjang, setPanjang] = useState("");
  const [lebar, setLebar] = useState("");
  const [letak, setLetak] = useState("");
  const [lat, setLat] = useState("");
  const [lang, setLang] = useState("");
  const [statustanah, setStatustanah] = useState("");
  const [kodetanah, setKodetanah] = useState("");
  const [harga, setHarga] = useState("");
  const [thnoleh, setThnoleh] = useState("");
  const [opd, setOpd] = useState("");
  const [guna, setGuna] = useState("");
  const [nounik, setNounik] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [historis, setHistoris] = useState("");
  const [file, setFile] = useState("");  

   const navigate = useNavigate();
 
  const saveKibde = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/kibdes", {
        kodebmd,
        nama,
        konstruksi,
        panjang,
        lebar,
        letak,
        lat,
        lang,
        statustanah,
        kodetanah,
        harga,
        thnoleh,
        opd,
        guna,
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
        <form onSubmit={saveKibde}>

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
                value={konstruksi}
                onChange={(e) => setKonstruksi(e.target.value)}
                placeholder="Jenis Konstruksi Bangunan"
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
                placeholder="Dalam meter"
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
                placeholder="Dalam meter"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Letak</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={letak}
                onChange={(e) => setLetak(e.target.value)}
                placeholder="Masukkan letak"
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
                placeholder="Masukkan Latitude dari GoogleMap"
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
                placeholder="Masukan Langitude dari GoogleMap"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Status Tanah</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={statustanah}
                onChange={(e) => setStatustanah(e.target.value)}
                placeholder="Masukan status tanah"
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
                placeholder="Masukan Kode Tanah dari KIB A"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Harga Perolehan</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
                placeholder="Dalam rupiah"
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
                placeholder="Masukan Tahun Perolehan"
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
                placeholder="Penggunaan BMD"
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
                placeholder="Masukan Nomor unik BMD"
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
 
export default AddKibde;