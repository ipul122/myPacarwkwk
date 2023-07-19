function validateForm() {
  var inputDate = document.getElementById("tanggal").value;
  var targetDate = "2021-11-13";
  if (inputDate === targetDate) {
    window.location.href = "./ririn.html";
    return false; // Menghentikan proses submit form
  } else {
    alert("Kamu lupa tanggal jadian kita ?? !!");
    return false; // Menghentikan proses submit form
  }
}
