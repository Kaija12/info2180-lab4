document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("search");

    button.addEventListener("click", function () {
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert(xhr.responseText);   // shows raw HTML tags like in your image
            }
        };

        xhr.open("GET", "superheroes.php", true);
        xhr.send();
    });
}); 




