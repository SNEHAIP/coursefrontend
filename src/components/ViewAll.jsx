import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const [data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("http://localhost:8080/view").then(
            (response)=>{
               
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">course</th>
                                    <th scope="col">description</th>
                                    <th scope="col">date</th>
                                    <th scope="col">Duration</th>
                                    <th scope="col">venue</th>
                                    <th scope="col">Trainer Name

                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                               {data.map(
                                (value,index)=>{
                                    return  <tr>
                                    <td>{value.title}</td>
                                    <td>{value.description}</td>
                                    <td>{value.date}</td>
                                    <td>{value.duration}</td>
                                    <td>{value.venue}</td>
                                    <td>{value.trainername}</td>
                                </tr>
                                }
                               )}
                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAll