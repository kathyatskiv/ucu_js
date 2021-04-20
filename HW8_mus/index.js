let departments;

async function getDepartments(){
    const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/departments');
    departments = (await response.json())["departments"];

    //console.log(departments);

    departments.forEach(element => {
        console.log(element["departmentId"] + " " + element["displayName"]);
    });
}

getDepartments().then(() => {
    const dropdown = document.getElementById("dropdown-menu");

    dropdown.innerHTML = "";

    departments.forEach(element => {
        dropdown.innerHTML += `<li><button onclick = "departmentBtn(this)" id="${element["departmentId"]}-depart" class="dropdown-item" href="#">${element["displayName"]}</button></li>`
    });
});

async function departmentBtn(element){
    let title = document.getElementById("dropdown-value");
    title.textContent = element.textContent;

    let id = element.id[0];

    const request  = await fetch(` https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${id}`);
    const objects  = (await request.json())["objectIDs"];

    const top10obj =objects.slice(0, 10);
    console.log(top10obj);

    // const r  = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${top10obj[0]}`);
    // const o  = (await r.json());

    // console.log(o);


    const requests = top10obj.map(objId => fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objId}`));

    document.getElementById("row0").innerHTML = "";
    document.getElementById("row1").innerHTML = "";
    
    Promise.all(requests)
    .then(responses => {

        for(let i = 0; i < responses.length; i++) {
            getInfo(responses[i], i);
          }
    })
}

async function getInfo(promise, i){
    const container = document.getElementById("container");

    const row = (i<5) ? document.getElementById("row0") : document.getElementById("row1");

    let ans = await promise.json();
    row.innerHTML += `<div class="col-sm elem">
    <img src="${ans["primaryImage"]}" alt="${ans["title"]}" class="elem-image">
    ${ans["title"]}
    </div>`

    console.log(ans);
    

}
