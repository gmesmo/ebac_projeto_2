const form = document.getElementById("form-add-contato");

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nomeContato = document.getElementById("nomeContato");
  const numeroContato = document.getElementById("numeroContato");
  const corpoTabela = document.getElementById("corpo-tabela");

  let linha = "<tr>";
  linha += `<td class="nome">${nomeContato.value}</td>`;
  linha += `<td class="fone">${numeroContato.value}</td>`;
  linha += "</tr>";

  linhas += linha;

  corpoTabela.innerHTML = linhas;

  nomeContato.value = "";
  numeroContato.value = "";
});
