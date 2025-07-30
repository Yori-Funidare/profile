const text = "Ini bukan informasi pribadi saya! namun saya melampirkan beberapa bahasa yang saya kuasai dan saya gunakan untuk membangun halaman ini serta beberapa akun sosial media saya.";
let index = 0;

function ketik(){
  if (index < text.length){
    document.getElementById("type").innerHTML += text.charAt(index);
    index++;
    setTimeout(ketik, 20);
  }
}
ketik()
