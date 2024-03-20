let serverNameInput = document.getElementById('serverName');
let serverForm = document.getElementById('serverForm');

let serverTbody = document.querySelector('#serverTable tbody');

let allServers = {};
let serverId = 0;

serverForm.addEventListener('submit', submitServerInfo);

function submitServerInfo(evt) {
  if (evt) evt.preventDefault(); 

  let serverName = serverNameInput.value;

  if (serverName !== '') {
    serverId++;
    allServers['server' + serverId] = { serverName };

    updateServerTable();

    serverNameInput.value = '';
  }
}

function updateServerTable() {
  serverTbody.innerHTML = '';

  for (let key in allServers) {
    let curServer = allServers[key];

    let newTr = document.createElement('tr');
    newTr.setAttribute('id', key);

    let tipAverage = sumPaymentTotal('tipAmt') / Object.keys(allServers).length;
    
    appendTd(newTr, curServer.serverName);
    appendTd(newTr, '$' + tipAverage.toFixed(2));
    appendDeleteBtn(newTr);

    serverTbody.append(newTr);
  }
}

function appendDeleteBtn(tr) {
  const deleteTd = document.createElement('td');
  deleteTd.textContent = 'X';
  deleteTd.className = 'delete-btn';
  deleteTd.style.cursor = 'pointer'; 

  deleteTd.addEventListener('click', function(e) {
    tr.remove();
  });

  tr.appendChild(deleteTd);
}
