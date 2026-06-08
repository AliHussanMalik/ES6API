async function fetchalldata() {
    // e.preventDefault();
    try {
        const URL = `https://jsonplaceholder.typicode.com/todos/`;

        const output = await fetch(URL);
        var response = await output.json();


        const NewTable = document.createElement("TABLE");
        const TableRow1 = document.createElement("TR");
        const TableHead1 = document.createElement("TH");
        TableHead1.innerText = "User Id";
        const TableHead2 = document.createElement("TH");
        TableHead2.innerText = "ID";
        const TableHead3 = document.createElement("TH");
        TableHead3.innerText = "Title";
        const TableHead4 = document.createElement("TH");
        TableHead4.innerText = "Is Completed";
        const Tablethere = document.getElementById("TableID")
        TableRow1.append(TableHead1,TableHead2,TableHead3,TableHead4)
        NewTable.append(TableRow1)
        response.forEach((Element, index) => {
            // const ResponseByArray = document.getElementById("ResponseFromArray")
            // const TableByArray = document.getElementById("TableFromArray")
            // const NewDiv = document.createElement("div");
            
            // const Rowis = document.getElementById("TableRow")
            const TableRow2 = document.createElement("TR");
            const TableData1 = document.createElement("TD");
            TableData1.append(Element.userId);
            const TableData2 = document.createElement("TD");
            TableData2.append(Element.id);
            const TableData3 = document.createElement("TD");
            TableData3.append(Element.title);
            const TableData4 = document.createElement("TD");
            TableData4.append(Element.completed)
            // TableRow2.append(Element.completed);
            TableRow2.append(TableData1 , TableData2 , TableData3, TableData4)
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

fetchalldata();
async function fetchdata(e) {
    e.preventDefault();
    try {
        const number = document.getElementById("number")
        const convertedID = Number(number.value);
        const URL = `https://jsonplaceholder.typicode.com/todos/${convertedID}`;

        const output = await fetch(URL);
        var response = await output.json();

        // const NewDiv = document.createElement("div");
        // NewDiv.id = "NewDivID";
        // NewDiv.className = "NewDivClass";
        alert(`User ID :${response.userId }\n ID : ${response.id } \n Title : ${response.title} \n Is Completed :${response.completed}`)


        localStorage.setItem("Mock API", JSON.stringify(response))
    } catch (err) {
        console.error(err);
    }
};