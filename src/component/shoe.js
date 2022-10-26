import React,{useEffect,useState}from 'react';
import axios from "axios"; 
const Shoe= (props) => {
     const [data,setData] = useState([]);
     //calling api
    useEffect(()=>{
        axios.get("https://ecom-dhiksha.herokuapp.com/items/3")
        .then((res) => {
         setData(res.data);
         console.log(data)

         },[])
        
    });
     
    
      return(
        <>
        <div>
            <table>
                <thead>
                    Table
                </thead>
                <tbody>
 
               {data.map((item,index) =>{
                return (
                    <>
                    <tr key="{index}" data-testid={`user-${index}`}>
                         <td>{item.brand_name}</td>
                         <td>{item.item_name}</td>
                        <img src={item.img} alt="pic" style={{height:"100px"}}/>
                        <td>{item.cost}</td>
                         
                    </tr>
                    </>
                )
            })}
                </tbody>
            </table>
            
        </div>
        </>
    )
    
}   

export default Shoe;