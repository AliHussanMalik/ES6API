async function fetchallusers() {
    // e.preventDefault();
    try {
        const URL = `https://jsonplaceholder.typicode.com/users/`;

        const output = await fetch(URL);
        var response = await output.json();


        const NewTable = document.createElement("TABLE");
        const TableRow1 = document.createElement("TR");
        const TableHead1 = document.createElement("TH");
        TableHead1.innerText = "ID";
        const TableHead2 = document.createElement("TH");
        TableHead2.innerText = "Name";
        const TableHead3 = document.createElement("TH");
        TableHead3.innerText = "User";
        const TableHead4 = document.createElement("TH");
        TableHead4.innerText = "Email ";
        const TableHead5 = document.createElement("TH");
        TableHead5.innerText = "Adress";
        const TableHead6 = document.createElement("TH");
        TableHead6.innerText = "Phone";
        const TableHead7 = document.createElement("TH");
        TableHead7.innerText = "Website";
        const TableHead8 = document.createElement("TH");
        TableHead8.innerText = "Company";
        const TableHead9 = document.createElement("TH");
        TableHead9.innerText = "Edit";
        const TableHead10 = document.createElement("TH");
        TableHead10.innerText = "Delete";
        const Tablethere = document.getElementById("TableID5")
        TableRow1.append(TableHead1, TableHead2, TableHead3, TableHead4, TableHead5, TableHead6, TableHead7, TableHead8, TableHead9,TableHead10)
        NewTable.append(TableRow1)
        response.forEach((Element, index) => {
            // const ResponseByArray = document.getElementById("ResponseFromArray")
            // const TableByArray = document.getElementById("TableFromArray")
            // const NewDiv = document.createElement("div");

            // const Rowis = document.getElementById("TableRow")
            const TableRow2 = document.createElement("TR");
            TableRow2.className = "TableRow2Class"
            const TableData1 = document.createElement("TD");
            TableData1.append(Element.id);
            const TableData2 = document.createElement("TD");
            TableData2.append(Element.name);
            const TableData3 = document.createElement("TD");
            TableData3.append(Element.username);
            const TableData4 = document.createElement("TD");
            TableData4.append(Element.email)
            const TableData5 = document.createElement("TD");
            TableData5.append(Element.address.street,Element.address.suite,Element.address.city,Element.address.zipcode,Element.address.geo.lat,Element.address.geo.lng)
            const TableData6 = document.createElement("TD");
            TableData6.append(Element.phone)
            const TableData7 = document.createElement("TD");
            TableData7.append(Element.website)
            const TableData8 = document.createElement("TD");
            TableData8.append(Element.company.name,Element.company.catchPhrase,Element.company.bs)
            const TableData9 = document.createElement("TD");
            const EditButton = document.createElement("button")
            EditButton.innerHTML = "Edit"
            TableData9.append(EditButton)
            const TableData10 = document.createElement("TD");
            const DeleteButton = document.createElement("button")
            DeleteButton.innerHTML = "Delete"
            TableData10.append(DeleteButton)
            TableRow2.append(TableData1, TableData2, TableData3, TableData4,TableData5,TableData6,TableData7,TableData8,TableData9,TableData10)
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

fetchallusers()

console.log("Is it working")