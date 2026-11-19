function hitungKurs(id) {
  var inputEl = document.getElementById(id);
  var targetNode = document.getElementById("hasil").firstChild;
  var nilaiIdr = parseFloat(inputEl.value);
  var hasilUsd = (nilaiIdr / 18246).toFixed(2);

  targetNode.data = hasilUsd;

  var liBaru = document.createElement("li");
  var teksRiwayat = document.createTextNode("Rp" + inputEl.value + " -> US$" + hasilUsd);
  liBaru.appendChild(teksRiwayat);

  var listRiwayat = document.getElementById("riwayat");
  listRiwayat.appendChild(liBaru);
}