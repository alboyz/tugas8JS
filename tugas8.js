panggilMethod = () => {
  //nama mahasiswa adalah adit
  let mahasiswa = {
    nama: "adit",
    jurusan: "matematika",
    angakatan: 2012
  };
  mahasiswa.nama = "budi"; //setelah dirubah nama mahasiswa menjadi budi
  console.log(mahasiswa);
  console.log(mahasiswa.nama);
};
panggilMethod();
