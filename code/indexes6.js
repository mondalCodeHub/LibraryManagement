// ################################################################################################################
// ES6 VERSION
console.log("ES6 VERSION - 2021");
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}
// ################################################################################################################
class Display {


    // [01]-add method
    add(book) {
        console.log("ADDING ");
        let tableBody = document.getElementById('tableBody');
        // in html -doc

        let uiString = `<tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                        </tr>`;
        tableBody.innerHTML += uiString;
    }


    //[02]-clear method
    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    validate(book) {
        if (book.name.length < 3 || book.author.length < 3) {
            return false;
        }
        else {
            return true;
        }
    }


    //[03]-show method
    show(type, displayMsg) {
        let message = document.getElementById('message');
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>MESSAGE :</strong> ${displayMsg}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"> </button>
      </div>`;
        setTimeout(function () {
            message.innerHTML = ' '
        }, 3000);

    }
}


// ################################################################################################################
//Submit event listenter - 'addEventListner()'in form
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("You have submitted the form");

    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let science = document.getElementById('science');
    let ethics = document.getElementById('ethics');
    let history = document.getElementById('history');
    let programming = document.getElementById('programming');
    let maths = document.getElementById('maths');

    if (science.checked) {
        type = science.value;
    }
    else if (ethics.checked) {
        type = ethics.value;
    }
    else if (history.checked) {
        type = history.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (maths.checked) {
        type = maths.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

// ################################################################################################################
    //display();
    //in the prototype section we will build the add() and clear() function - after the display method
    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', ' YOUR BOOK HAS BEEN SUCCESSFULLY ADDED ');

    } else {
        display.show('danger', 'ERROR - LENGTH MUST BE 3 CHARACTER OF BOOK NAME AND AUTHOR')

    }



    // this will prevent from auto reload - everytime
    e.preventDefault();

};
//21ST JULY 2021 - UPDATED-VER X01
// ################################################################################################################