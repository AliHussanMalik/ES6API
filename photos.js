async function fetchallphotos() {
    // e.preventDefault();
    try {
        const URL = `https://jsonplaceholder.typicode.com/photos/`;

        const output = await fetch(URL);
        var response = await output.json();


        const NewTable = document.createElement("TABLE");
        const TableRow1 = document.createElement("TR");
        const TableHead1 = document.createElement("TH");
        TableHead1.innerText = "Album Id";
        const TableHead2 = document.createElement("TH");
        TableHead2.innerText = "ID";
        const TableHead3 = document.createElement("TH");
        TableHead3.innerText = "Title";
        const TableHead4 = document.createElement("TH");
        TableHead4.innerText = "URL";
        const TableHead5 = document.createElement("TH");
        TableHead5.innerText = "Thumbnail URL";
        const TableHead6 = document.createElement("TH");
        TableHead6.innerText = "Edit";
        // const TableHead6 = document.createElement("TH");
        // TableHead6.innerText = "Edit";
        const Tablethere = document.getElementById("TableID3")
        TableRow1.append(TableHead1, TableHead2, TableHead3, TableHead4, TableHead5)
        NewTable.append(TableRow1)
        response.forEach((Element, index) => {
            // const ResponseByArray = document.getElementById("ResponseFromArray")
            // const TableByArray = document.getElementById("TableFromArray")
            // const NewDiv = document.createElement("div");

            // const Rowis = document.getElementById("TableRow")
            const TableRow2 = document.createElement("TR");
            TableRow2.className = "TableRow2Class"
            const TableData1 = document.createElement("TD");
            TableData1.append(Element.albumId);
            const TableData2 = document.createElement("TD");
            TableData2.append(Element.id);
            const TableData3 = document.createElement("TD");
            TableData3.append(Element.title);
            const TableData4 = document.createElement("TD");
            const imageurl =document.createElement("img")
            imageurl.src = Element.url
            TableData4.append(imageurl)
            const TableData5 = document.createElement("TD");
            const imageurl2 =document.createElement("img")
            imageurl2.src = Element.url
            TableData5.append(imageurl2)
            const EditButton = document.createElement("button")
            EditButton.innerHTML = "Edit"
            const DeleteButton = document.createElement("button")
            DeleteButton.innerHTML = "Delete"
            // TableRow2.append(Element.completed);
            TableRow2.append(TableData1, TableData2, TableData3, TableData4,TableData5, EditButton, DeleteButton)
            NewTable.append(TableRow2)
            // Rowis.append(TableRow)
            // console.log(`Here is Headings${TableHead1}${TableHead2}${TableHead3}${TableHead4} \n ${TableData1}${TableData2}${TableData3}${TableData4}`)

            // NewDiv.id = "NewDivID";
            // NewDiv.className = "NewDivClass";

            // NewDiv.innerHTML = `User ID {${Element.userId}}</t> ID {${Element.id}} </t>Title {${Element.title}} </t>Is Completed {${Element.completed}}<br><br>`;
            // NewTable.innerHTML = `User ID {${Element.userId}}</t> ID {${Element.id}} </t>Title {${Element.title}} </t>Is Completed {${Element.completed}}<br><br>`;
            // ResponseByArray.append(NewDiv)
            // TableByArray.append(NewTable)
        }
        );
        Tablethere.append(NewTable)

        localStorage.setItem("Mock API", JSON.stringify(response))
    } catch (err) {
        console.error(err);
    }
};

fetchallphotos()