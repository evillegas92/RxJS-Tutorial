import { Observable, of, from, fromEvent, concat } from "rxjs";
import { ajax, AjaxError, AjaxResponse } from "rxjs/ajax";
import { allBooks, allReaders } from "./data";

// let sourceOne$ = of("hello", 10, true, allReaders[0].name);
// let sourceTwo$ = from(allBooks);

// concat will return a new Observable, that first produces all the values from
// the first observable, and then all the values from the second observable.
// concat(sourceOne$, sourceTwo$)
//     .subscribe(val => console.log(val));

const button = document.getElementById("readersButton");
fromEvent(button, 'click')
    .subscribe(event => {
        const readersDiv = document.getElementById("readersList");
        ajax("/api/readers")
            .subscribe((ajaxResponse: AjaxResponse<any>) => {
                console.log(ajaxResponse);
            })
        for (let reader of allReaders) {
            readersDiv.innerHTML += reader.name + '<br>';
        }
    });
