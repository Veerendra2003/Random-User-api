function showDetails() {
    fetch("https://randomuser.me/api").then((response) => {
        if (response.status !== 200) {
            throw new Error(response.statusText) + ":" + response.status;
        }
        return response.json();
    }).then((user) => {
        let fName = user.results[0].name.first;
        let LName = user.results[0].name.last;
        let gender = user.results[0].gender;
        let phone = user.results[0].phone;
        let img = user.results[0].picture.large;
        let div = document.querySelector("#details");
        div.innerHTML="";
        let userImg = document.createElement('img');
        div.innerHTML += "<br><br>";
        userImg.src = img;
        userImg.style.width = "10em";
        div.appendChild(userImg);
        let p1 = document.createElement('p');
        p1.innerHTML = "<br><strong>Name:</strong>" + fName + " " + LName;
        div.appendChild(p1);
        let p2 = document.createElement('p');
        p2.innerHTML = "<strong>Gender:</strong>" + gender;
        div.appendChild(p2);
        let p3 = document.createElement('p');
        p3.innerHTML = "<strong>Phone:</strong>" + phone;
        div.appendChild(p3);

    }).catch((error) => {
        alert(error);
    })
}