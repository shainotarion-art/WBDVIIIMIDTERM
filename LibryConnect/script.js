function searchBook(){
    let input = document.getElementById("searchBar").value.toLowerCase();

    if(input.includes("1")){
        window.location.href = "book1.html";
    } else if(input.includes("2")){
        window.location.href = "book2.html";
    } else if(input.includes("3")){
        window.location.href = "book3.html";
    } else {
        alert("Book not found");
    }
}

function showOverdue(){
    alert("Overdue Books: Book 2");
}