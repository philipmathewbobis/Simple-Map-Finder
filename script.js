function findMap() {
    let input = document.getElementById("search").value;

    let newMap = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyAWTURhSrIafR5v0cYdm9kXOEkdg8A-fIs&q=' + input;

    document.getElementById("google-map").setAttribute('src', newMap);   
}