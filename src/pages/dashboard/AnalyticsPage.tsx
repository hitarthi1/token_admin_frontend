
import React,{ useState,useEffect } from "react";
import {
  useParams,
} from "react-router-dom";
type Props = {};
type size2 = {
size:number

};


const AnalyticsPage = (props: Props) => {
  const [tableData, setTableData] = useState([])
  const [drop, setDrop] = useState([])
  useEffect(() => {
    const url = "https://api.adviceslip.com/advice";
    const url2 = " http://localhost:5000/poolclient1";
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
    const dropdown=async()=>{  try {
      const response2 = await fetch(url2);
      const json2 = await response2.json();
      console.log(json2);
      setDrop(json2);
  } catch (error) {
      console.log("error", error);
  }}

    fetchData();
    dropdown();
}, []);
  return (
    <div>AnalyticsPage
      <div>
     
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
    <select>
    {
              drop.map((data:{id:string,s_no:number,s_name:string}, index:number)=>{
                  return(
                      // <tr key={index}>
                    
                      //     <td>{data.fullName}</td>
                      
                      // </tr>
<option value={data.s_no} key={index}>{data.s_name}</option>

                  )
              })
          }


</select>
{/* <input
          type="time"
          step="1"
          // value=time
          className="form-control"
          placeholder="Time"
          // onChange={((ev) => {this.setState({time:ev.target.value})}
        /> */}
    </div>
  );
};

export default AnalyticsPage;