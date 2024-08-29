function sendPostRequest() {
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    const name3 = document.getElementById("name3").value;
    const name4 = document.getElementById("name4").value;
    const name5 = document.getElementById("name5").value;
    const history = document.getElementById("history").value;

    const data = {
        "names": [
        ],
        "message": history
    }

    data["names"].push(name1,name2,name3,name4,name5)
    const xhr = new XMLHttpRequest();
    
    
    xhr.open("POST", "https://fsdt-contact.onrender.com/contact", true);
    
    
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 201) {
            console.log("Resposta da API:", xhr.responseText);
        } else if (xhr.readyState === 4) {
            console.error("Erro na requisição:", xhr.status, xhr.statusText);
        }
    };
    
    xhr.send(JSON.stringify(data));
}