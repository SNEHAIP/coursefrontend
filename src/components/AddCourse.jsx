import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddCourse = () => {
    const [data,setData] = useState(
        {
            "title":"",
            "description": "",
            "date": "",
            "duration": "",
            "venue":"",
            "trainername": ""
        }

    )
  const inputHandler=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }
  const readValue=()=>{
    console.log(data)
    
    axios.post("http://localhost:8080/add",data).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                alert("successfully added")
                
            }
             else { 
                alert("error")
                
            }
        }
    ).catch().finally()
  }
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="form-label">Course Title</label>
                                <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="form-label">Description</label>
                                <textarea name="description" id="" className="form-control" value={data.description} onChange={inputHandler}></textarea>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="form-label">Date</label>
                                <input type="date" name="date" id="" className="form-control" value={data.date} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="form-label">Duration </label>
                                <input type="text" className="form-control" name='duration' value={data.duration} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="form-label">Veneu</label>
                                <input type="text" className="form-control" name='venue' value={data.venue} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="form-label">Trainer Name</label>
                                <input type="text" className="form-control" name='trainername' value={data.trainername} onChange={inputHandler} />

                            </div>
                            <center>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <button class="btn btn-success" onClick={readValue}>Add Course</button>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCourse