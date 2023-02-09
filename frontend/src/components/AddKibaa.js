import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
const AddKibaa = () => {
  const [kodebmd, setKodebmd] = useState("");
  const [nama, setNama] = useState("");
  const [panjang, setPanjang] = useState("");
  const [lebar, setLebar] = useState("");
  const [luas, setLuas] = useState("");
  const [thnoleh, setThnoleh] = useState("");
  const [alamat, setAlamat] = useState("");
  const [lang, setLang] = useState("");
  const [lat, setLat] = useState("");
  const [nosertifikat, setNosertifikat] = useState("");
  const [tglsertifikat, setTglsertifikat] = useState("");
  const [guna, setGuna] = useState("");
  const [opd, setOpd] = useState("");
  const [sumber, setSumber] = useState("");
  const [harga, setHarga] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [historis, setHistoris] = useState("");
  const [file, setFile] = useState("");  

   const navigate = useNavigate();
 
  const saveKibaa = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/kibaas", {
        kodebmd,
        nama,
        panjang,
        lebar,
        luas,
        thnoleh,
        alamat,
        lang,
        lat,
        nosertifikat,
        tglsertifikat,
        guna,
        opd,
        sumber,
        harga,
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
        <form onSubmit={saveKibaa}>

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
            <label className="label">Luas</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={luas}
                onChange={(e) => setLuas(e.target.value)}
                placeholder="Dalam Meter persegi"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Tahun</label>
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
            <label className="label">Alamat Objek</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                placeholder="Alamat Objek BMD"
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
                placeholder="Masukkan nilai lang dari GoogleMap"
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
                placeholder="Masukkan nilai lat dari GoogleMap"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Nomor Sertifikat</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nosertifikat}
                onChange={(e) => setNosertifikat(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Tanggal Sertifikat</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={tglsertifikat}
                onChange={(e) => setTglsertifikat(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Penggunaan</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={guna}
                onChange={(e) => setGuna(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Name</label>
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
            <label className="label">Sumber Dana</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={sumber}
                onChange={(e) => setSumber(e.target.value)}
                placeholder="Sumber Dana Perolehan"
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
 
export default AddKibaa;