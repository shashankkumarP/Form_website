/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";

const ShowTable = () => {
  const [data, setData] = useState<any | never>([]);
  const [tabledata,setTabledata] = useState<any | never>([]);
  const [filterStartDate,setFilterStartDate] = useState<Date | null>(null)
  const [filterEndDate,setFilterEndDate] = useState<Date | null>(null)

  const handlefilter = ()=>{
    if(filterEndDate && filterStartDate){
        const filtered = tabledata.filter((item:any) => {
            const itemDate = new Date(item.date);
            return itemDate >= filterStartDate && itemDate <= filterEndDate;
          });
    }
  }

  const handleSort = (e:any)=>{
    console.log(e);
    const sortedData = data.sort((a:any, b:any) => a.date - b.date);
    setTabledata(sortedData);

  }

  useEffect(() => {


  }, []);
  return (
    <>
  <div className="flex justify-between mt-10 ml-10">
    <div className="flex justify-center space-x-8">
      <div className="text-center">
        <p className="text-gray-900 font-semibold">Filter By Date</p>
        <input
          type="date"
          className="w-40 p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="text-center">
        <p className="text-gray-900 font-semibold">Filter By Date</p>
        <input
          type="date"
          className="w-40 p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        onClick={handlefilter}
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold p-2 rounded"
      >
        Filter
      </button>
    </div>
    <div className="max-w-md w-full space-y-8">
      <div className="text-center">
        <p className="text-gray-900 font-semibold">Sort By Date</p>
        <select className="w-40 p-2 border border-gray-300 rounded">
          <option value={'inc'}>Inc</option>
          <option value={'dec'}>Dec</option>
        </select>
      </div>
    </div>
  </div>
  <div className="mt-8 ">
  <table className="min-w-full">
    <thead>
      <tr>
        <th className="text-left">Name</th>
        <th className="text-left">Email</th>
        <th className="text-left">Age</th>
        <th className="text-left">Date of Submission</th>
      </tr>
    </thead>
    <tbody>
      {/* Insert table rows here */}
      <tr>
        <td className="text-left">hello</td>
        <td className="text-left">hi</td>
        <td className="text-left">hel</td>
        <td className="text-left">dfdk</td>
      </tr>
    </tbody>
  </table>
</div>

</>

  );
};

export default ShowTable;
