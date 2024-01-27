function titles() {

  fetch('data.json')
  .then((response) => response.json())
  .then((data) => { data.results.forEach(element => {
    console.log(element.title);
      });
  })

  .catch (error => {
    console.error('Hay un error', (error));
  });
  
}
titles();

const printTitles = async () => { 
  const respuesta = await fetch('data.json');
  const data = await respuesta.json();


  const titles = data.results.map(result => result.title);
  console.log(titles);

}
printTitles();

// Asincronía y Promesas 2

function fetchData() {
  return new Promise((resolve, reject) => {
    const data = {
      results: [
        {
          title: "Estudiar Js",
          priority: "alta",
          isDone: false,
        },
        {
          title: "Estudiar CSS",
          priority: "alta",
          isDone: true,
        },
        {
          title: "Estudiar OOP",
          priority: "media",
          isDone: false,
        },
        {
          title: "Estudiar IA",
          priority: "baja",
          isDone: false,
        },
      ],
    };
    resolve(data);
  });
}

function createTable(data) {
  const table = document.createElement("table");
  const headerRow = table.insertRow(0);

  for (let key in data.results[0]) {
    
    let th = document.createElement("th");
    th.textContent = key;
    headerRow.appendChild(th);
  }

  for (let i = 0; i < data.results.length; i++) {
    let row = table.insertRow(i + 1);

    for (let key in data.results[i]) {
      let cell = row.insertCell();
      cell.textContent = data.results[i][key];
    }
  }

  document.body.appendChild(table);
}

fetchData()
  .then((data) => {
    createTable(data);
  })
  .catch((error) => {
    console.error("Hay un error:", error);
  });