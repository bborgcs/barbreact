import Team from "./team";

function read(endpoint) {

    let load = []

    Client.get(endpoint).then(res => {
        load = res.data
        console.log(load)
    })
    .catch(function(error) {
        console.log(error)
    });
}

async function create(endpoint, data) {
    return Team.post(endpoint, data);
}

export {
    read,
    create,
}