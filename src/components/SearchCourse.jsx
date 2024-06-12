import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const SearchCourse = () => {
    const [data, setData] = useState(
        {
            "title": ""
        }
    )
    const [result, setResult] = useState(
      [
        
      ]
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
  
    axios.post("http://localhost:8080/search",data).then(
        (response)=>{
            setResult(response.data)
        }
    ).catch()
}
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="form-label">Course Title</label>
                                <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler} />
                            </div>
                            <center>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <button class="btn btn-success" onClick={readValue}>SEARCH</button>
                                </div>
                            </center>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">title</th>
                                        <th scope="col">description</th>
                                        <th scope="col">date</th>
                                        <th scope="col">duration</th>
                                        <th scope="col">venue</th>
                                        <th scope="col">trainername</th>
                                        

                                    </tr>
                                </thead>
                                <tbody>
                                  {result.map(
                                    (value,index)=>{
                                        return   <tr>
                                        <th scope="row">{value.title}</th>
                                        <td>{value.description}</td>
                                        <td>{value.date}</td>
                                        <td>{value.duration}</td>
                                        <td>{value.venue}</td>
                                        <td>{value.trainername}</td>
                                    </tr>
                                   
                                    }
                                )

                                  }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SearchCourse