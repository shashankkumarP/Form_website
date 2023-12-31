/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

const ShowTable = () => {
  const [data, setData] = useState<any | never>([]);
  const [tabledata,setTabledata] = useState<any | never>([]);
  const [filterStartDate,setFilterStartDate] = useState<Date | null |string>(null)
  const [filterEndDate,setFilterEndDate] = useState<Date | null | string>(null)

  const handlefilter = ()=>{
    if(filterEndDate && filterStartDate){
        const filtered = tabledata.filter((item:any) => {
            const itemDate = new Date(item.date);
            return itemDate >= filterStartDate && itemDate <= filterEndDate;
          });
          setTabledata(filtered)
    }
  }

  const handleSort = (e:any)=>{
    console.log(e);
    let sortedData;
    if(e.target.value=="inc"){
      sortedData = data.sort((a:any, b:any) => a.date - b.date);

    }else if(e.target.value=='dec') {
       sortedData = data.sort((a:any, b:any) => b.date - a.date);
    }
   
    setTabledata(sortedData);

  }

  useEffect(() => {
    fetch("https://sparkling-bracelet-hen.cyclic.app/form").then((res)=>res.json())
    .then((res)=>{
      const data = res.data;
      setTabledata(data)
    setData(data);
    })

  }, []);
  return (
    <>
  <div className="flex justify-between mt-10 ml-10">
    <div className="flex justify-center space-x-8">
      <span className=" flex justify-center align-middle" >Filter</span>
      <div className="text-center">
        <p className="text-gray-900 font-semibold">Start Date</p>
        <input
          type="date"
          onChange={(e)=>setFilterStartDate(e.target.value)}
          className="w-40 p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="text-center">
        <p className="text-gray-900 font-semibold">End Date</p>
        <input
          type="date"
          onChange={(e)=>setFilterEndDate(e.target.value)}
          className="w-40 p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        onClick={()=>handlefilter()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold p-2 rounded"
      >
        Filter
      </button>
    </div>
    <div className="max-w-md w-full space-y-8">
      <div className="text-center">
        <p className="text-gray-900 font-semibold">Sort By Date</p>
        <select onChange={(e)=>handleSort(e)} className="w-40 p-2 border border-gray-300 rounded">
          <option value={'inc'}>Inc</option>
          <option value={'dec'}>Dec</option>
        </select>
      </div>
    </div>
  </div>
  <div className="mt-8 ml-40 pl-30">
  <table className="min-w-full">
    <thead>
      <tr>
        <th className="text-left">Name</th>
        <th className="text-left">Email</th>
        {/* <th className="text-left">Age</th> */}
        <th className="text-left">Date of Submission</th>
      </tr>
    </thead>
    <tbody>
      {/* Insert table rows here */}
      
     {tabledata.map((el:any,i:number)=>{
      return(<tr key={i} >
         
        <td className="text-left">{el.name}</td>
        <td className="text-left">{el.email}</td>
        {/* <td className="text-left">{el.Age}</td> */}
        <td className="text-left">{el.dateOfSubmission}</td>
     
      </tr>)
     })}
    </tbody>
  </table>
</div>

</>

  );
};

export default ShowTable;
