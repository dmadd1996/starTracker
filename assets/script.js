
let xmlhttp = new XMLHttpRequest ();

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200){
        let data = JSON.parse(this.responseText);

        let copyright = data['copyright'];
        let date = data['date']
        let explanation = data['explanation']
        let hdurl = data['hdurl']
        let media_type = data['media_type']
        let title = data['title']
        let url = data['url']

        document.getElementById("wrapper-url").src = url;
        document.getElementById("wrapper-title").innerHTML = title;
        document.getElementById('wrapper-copyright').innerHTML = copyright
        document.getElementById('wrapper-explanation').innerHTML = explanation
        document.getElementById('wrapper-hdurl').href = hdurl
    }
}

let queryUrl = "https://api.nasa.gov/planetary/apod?";
let queryKey = "api_key=hgYbSzucAKEBVirb5pBcqp6I2boGGesw2D0GRhaZ";

let queryFull = queryUrl + queryKey;

xmlhttp.open('GET', queryFull, true);
xmlhttp.send();
