function submitData (name, email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({name, email})
    })
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        const newId = data.id;
        document.body.innerHTML += `<p>New ID: ${newId}</p>`;
    })
    .catch(function (error){
        alert(error.message);
        document.body.innerHTML += `<p>Error: ${error}</p>`;
    })
}