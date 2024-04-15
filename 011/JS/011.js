const Works = ["Ali Azimi", 'Erfan Soltani'];

function render(list) {

    const root = document.getElementById('root');
    const span = document.querySelector('span');
    root.innerHTML = ""

    for (const work of list) {

        const li = `<li class="list-item">${work} <button class="del-btn" onclick="removeWork('${work}')">Delete</button> </Li>`;
        // <input type="checkbox" id="check" onclick="done()">
        root.innerHTML += li

    }

    span.textContent = list.length;

}

function addWork() {

    const input = document.getElementById('add-in');
    Works.push(input.value);
    render(Works);
    input.value = "";
    input.focus();

}

function removeWork(workName) {

    const index = Works.indexOf(workName);
    Works.splice(index, 1);
    render(Works);

}

function searchWork(event) {

    const value = event.target.value;
    const filteredWork = Works.filter(function (job) {
        return job.search(value) > -1;
    });

    render(filteredWork);
}

// function done() {

//     const liItem = document.querySelector('li');
//     liItem.classList.toggle('tx-line');
// }

render(Works);
