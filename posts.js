async function fetchallposts() {
    // e.preventDefault();
    try {

        function EditButtonFunction() {
            console.log("Edit Button Place")

        }

        async function DeleteButtonFunction() {
            try {
                const URL = `https://jsonplaceholder.typicode.com/posts/100`;

                const output = await fetch(URL, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                // if (!response.ok) {
                //     alert("Object is not Deleted")
                // }
                // else{
                //     alert("Object is deleted")
                // }
                var response = await output.json();

            }
            catch (e) {
                console.log(e)
            }

        }
        //  document.getElementById("EditButton")
        // EditButtonFunction.onclick(console.log("Is it working?"))

        const URL = `https://jsonplaceholder.typicode.com/posts/`;

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
        TableHead4.innerText = "Body";
        const TableHead5 = document.createElement("TH");
        TableHead5.innerText = "Edit";
        const TableHead6 = document.createElement("TH");
        TableHead6.innerText = "Delete";
        const Tablethere = document.getElementById("TableID")
        TableRow1.append(TableHead1, TableHead2, TableHead3, TableHead4, TableHead5, TableHead6)
        NewTable.append(TableRow1)
        response.forEach((Element, index) => {
            // const ResponseByArray = document.getElementById("ResponseFromArray")
            // const TableByArray = document.getElementById("TableFromArray")
            // const NewDiv = document.createElement("div");

            // const Rowis = document.getElementById("TableRow")
            const TableRow2 = document.createElement("TR");
            TableRow2.className = "TableRow2Class"
            const TableData1 = document.createElement("TD");
            TableData1.append(Element.userId);
            const TableData2 = document.createElement("TD");
            TableData2.append(Element.id);
            const TableData3 = document.createElement("TD");
            TableData3.append(Element.title);
            const TableData4 = document.createElement("TD");
            TableData4.append(Element.body)
            const TableData5 = document.createElement("TD");
            const EditButton = document.createElement("button")
            EditButton.id = "EditButton"
            EditButton.innerHTML = "Edit"
            EditButton.onclick = EditButtonFunction()
            TableData5.append(EditButton)
            const TableData6 = document.createElement("TD");
            const DeleteButton = document.createElement("button")
            DeleteButton.id = "DeleteButton"
            DeleteButton.innerHTML = "Delete"
            DeleteButton.onclick = DeleteButtonFunction()
            TableData6.append(DeleteButton)
            // TableRow2.append(Element.completed);
            TableRow2.append(TableData1, TableData2, TableData3, TableData4, TableData5, TableData6)
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

fetchallposts()

