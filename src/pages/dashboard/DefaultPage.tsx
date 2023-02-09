
import React,{ useState,useEffect } from "react";
import {
  useParams,
} from "react-router-dom";
type Props = {};
type size2 = {
size:number

};

const DefaultPage = ({  size}:size2) => {
  const { ip } = useParams();
  const [tableData, setTableData] = useState([])
  useEffect(() => {
    const url = "https://api.adviceslip.com/advice";
  
    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
            setTableData(json);
        } catch (error) {
            console.log("error", error);
        }
    };

    fetchData();
}, []);
  
  return (

    <div>
      defalut page
      <table className="table">
          <thead>
              <tr>
                  <th>S.N</th>
                  <th>Full Name</th>
                  <th>Email Address</th>
                  <th>Salary</th>
              </tr>
          </thead>
          {/* <tbody>
          {
              tableData.map((data:{fullName:string,
                salary:string,emailAddress:string
              }, index:number)=>{
                  return(
                      <tr key={index}>
                          <td>{index+1}</td>
                          <td>{data.fullName}</td>
                          <td>{data.emailAddress}</td>
                          <td>{data.salary}</td>
                      </tr>

                  )
              })
          }
          </tbody> */}
      </table>
      

    </div>
   
  );
};

export default DefaultPage;