function toggleDesc() {
    if (window.innerWidth <= 950) {
        let elementArr = document.getElementsByClassName("desc");
        for (i = 0; i < elementArr.length; i++) {
            element = elementArr[i];
            if (element.style.display == "" || element.style.display == "block") {
                element.style.display = "none";
            }
        }
    } else {
        let elementArr = document.getElementsByClassName("desc");
        for (i = 0; i < elementArr.length; i++) {
            element = elementArr[i];
            if (element.style.display == "none") {
                element.style.display = "";
            }
        }
    }
}