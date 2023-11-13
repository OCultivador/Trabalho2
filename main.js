document.addEventListener('DOMContentLoaded', function () {
  const cepInput = document.querySelector("#cep");
  const ruaInput = document.querySelector("#address");
  const cidadeInput = document.querySelector("#city");
  const bairroInput = document.querySelector("#neighborhood");
  const estadoInput = document.querySelector("#region");

  // Validar CEP
  cepInput.addEventListener("keypress", (e) => {
      const onlyNumbers = /[0-9]/;
      const key = String.fromCharCode(e.keyCode);

      // Permitir somente números
      if (!onlyNumbers.test(key)) {
          e.preventDefault();
          return;
      }
  });

  // Obter endereço ao digitar o CEP
  cepInput.addEventListener("keyup", (e) => {
      const inputValue = e.target.value;

      // Verificar se possui a quantidade correta de números
      if (inputValue.length === 8) {
          getAdress(inputValue);
      }
  });

  const getAdress = async (cep) => {
      const apiURL = `https://viacep.com.br/ws/${cep}/json`;

      try {
          const response = await fetch(apiURL);
          const data = await response.json();

          ruaInput.value = data.logradouro || "";
          cidadeInput.value = data.localidade || "";
          bairroInput.value = data.bairro || "";
          estadoInput.value = data.uf || "";
      } catch (error) {
          console.error('Erro ao obter dados do CEP:', error);
      }
  };

  // Pagamentos
  const creditoInput = document.getElementById('credito-input');
  const pixInput = document.getElementById('pix-input');
  const creditoOpc = document.getElementById('credito-opc');
  const pixOpc = document.getElementById('pix-opc');

  creditoInput.addEventListener('change', function () {
      if (creditoInput.checked) {
          creditoOpc.style.display = 'block'; // Mostra o conteúdo do Crédito
          pixOpc.style.display = 'none'; // Oculta o conteúdo do Pix
      }
  });

  pixInput.addEventListener('change', function () {
      if (pixInput.checked) {
          pixOpc.style.display = 'block'; // Mostra o conteúdo do Pix
          creditoOpc.style.display = 'none'; // Oculta o conteúdo do Crédito
      }
  });
});
