import React, { useState, useEffect } from 'react';
import Course from './Course';
import BASE_URL from './../server/bootapi';
import axios from 'axios';
import { toast } from 'react-toastify';
import ReactLoading from 'react-loading';
import { Spinner } from 'reactstrap';

/*
React class lifecycle methods --
componentDidMount
componentDidUpdate
componentWillUnmount
*/

const AllCourses = () => {

    useEffect( () => {
        document.title = "View Courses";
        //alert("Testing");
    }, [])

    const getAllCoursesFromServer = () => {
        axios.get(`${BASE_URL}/courses`).then(
            (response) => {
                console.log(response.data);
                setCourses(response.data);
                toast.success("Courses has been loaded" , {
                    position: "bottom-center",
                });
                setLoaded(true);

                /*setTimeout(() => {
                    setLoaded(true);
                }, 2000)*/
            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong");
                setLoaded(true);
            }
        )
    }

    const updateCourses = (id) => {
        setCourses(courses.filter((c) => c.id != id))
    }

    useEffect( () => {
        getAllCoursesFromServer();
    }, [])
    
    const [courses, setCourses] = useState([
        /*{title:"Java",description:"Java Web application"},
        {title:"Docker",description:"Docker Web application"},
        {title:"Jenkins",description:"Jenkins Web application"}*/
    ])
    const [loaded, setLoaded] = useState(undefined);

    return (
        <div>
            {
                loaded ?
                courses.map((item) => <Course course={item} update={updateCourses} key={item.id} />) :
                <ReactLoading type={"bubbles"} color={"blue"} height={'20%'} width={'20%'} />
                //<Spinner animation="border" />
            }
        </div>
        /*<div>
            {
                courses.map(item => (<li key={item.title}>{item.title}</li>))
            }
        </div>*/
    )
}

export default AllCourses;