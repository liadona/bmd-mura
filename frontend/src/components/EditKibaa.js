import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
 
const EditKibaa = () => {
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
  const { id } = useParams();
 
  useEffect(() => {
    getKibaaById();
  }, []);
 
  const getKibaaById = async () => {
    const response = await axios.get(`http://localhost:5000/kibaas/${id}`);
    setKodebmd(response.data.kodebmd);
    setNama(response.data.nama);
    setPanjang(response.data.panjangl);
    setLebar(response.data.lebar);
    setLuas(response.data.luas);
    setThnoleh(response.data.thnoleh);
    setAlamat(response.data.alamat);
    setLang(response.data.lang);
    setLat(response.data.lat);
    setNosertifikat(response.data.nosertifikat);
    setTglsertifikat(response.data.tglsertifikat);
    setGuna(response.data.guna);
    setOpd(response.data.opd);
    setSumber(response.data.sumber);
    setHarga(response.data.harga);
    setKeterangan(response.data.keterangan);
    setHistoris(response.data.historis);
    setFile(response.data.file);

    
  };
 
  const updateKibaa = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/kibaas/${id}`, {
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
        <form onSubmit={updateKibaa}>

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
                placeholder="Dalam meter persegi"
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
            <label className="label">Alamat</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                placeholder="Masukkan Alamat BMD"
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
                placeholder="Masukkan nilai Lang dari GoogleMap"
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
                placeholder="Masukkan Nilai Lat dari GoogleMap"
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
                placeholder="Nomor Sertifikat"
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
                placeholder="tanggal sertifikat"
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
                placeholder="Kegunaan BMD"
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
            <label className="label">Sumber Dana</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={sumber}
                onChange={(e) => setSumber(e.target.value)}
                placeholder="Sumber dana perolehan BMD"
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
 
export default EditKibaa;