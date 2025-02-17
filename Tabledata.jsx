import React, { useState } from "react";

const Tabledata = () => {
    const data = [
        {id: 1, name: "udayasri", age: 30, dept: "Csm", place:"Hyderabad"},
        {id: 2, name:"srikha", age: 24, dept: "Cse", place: "Kochi"},
        {id: 3, name:"roshan", age: 35, dept:"Ece", place: "Mumbai"},
        {id: 4, name:"pavani", age:27, dept:"It", place: "Chennai"},
        {id: 5, name:"keerthi", age: 19, dept:"Civil", place: "Pune"},
        {id: 6, name:"surya", age: 39, dept: "Mech", place: "Banglore"},
        {id: 7, name:"rishi", age: 20, dept:"Cse", place: "Jaipur"},
        {id: 8, name:"ram", age: 37, dept:"Ai&Ds", place: "Chennai"},
        {id: 9, name:"charan", age: 40, dept:"Csd", place: "Bhopal"},
        {id: 10, name:"karan", age: 36, dept:"Eee", place:"Hyd"}
    ];
    const [searchdata, setsearchdata] = useState("");

    const handleChange = (event) => {
        setsearchdata(event.target.value);
    };

    const filtereddata = data.filter((item) => 
        item.name.toLowerCase().includes(searchdata.toLowerCase())
    );
    return (
        <>
        <div>
            <input type="text" id="search" 
            name="search"
            placeholder="Search By Name" 
            value={searchdata} 
            onChange={handleChange}/>
            <p> {searchdata}</p>
            <table border="2px">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Department</th>
                        <th>Place</th>
                    </tr>
                </thead>
                <tbody>
                    {filtereddata.map((data1) => (
                        <tr>
                            <td>{data1.id}</td>
                            <td>{data1.name}</td>
                            <td>{data1.age}</td>
                            <td>{data1.dept}</td>
                            <td>{data1.place}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Tabledata;