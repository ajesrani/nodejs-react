import { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Container } from "reactstrap";
import BASE_URL from './../server/bootapi';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddCourse = () => {

    const [course, setCourse] = useState({})

    const handleForm = (e) => {
        console.log(course);
        postDataToServer(course);
        e.preventDefault();
    }

    const postDataToServer = (data) => {
        axios.post(`${BASE_URL}/courses`, data).then(
            (response) => {
                console.log(response);
                toast.success("Course has been added" , {
                    position: "bottom-center",
                });
            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong");
            }
        )
    }

    return (
        <div>
            <h1 className="text-center my-3">Fill Course Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="courseID">Course ID</Label>
                    <Input type="text" name="courseID" id="courseID" placeholder="Enter id here" 
                            onChange={ (e) => { setCourse({...course, id: e.target.value})}} />
                </FormGroup>
                <FormGroup>
                    <Label for="title">Course Title</Label>
                    <Input type="text" id="title" placeholder="Enter title here" 
                            onChange={ (e) => { setCourse({...course, title: e.target.value})}} />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Course Description</Label>
                    <Input type="textarea" id="description" placeholder="Enter description here" style={{height: 150}} 
                            onChange={ (e) => { setCourse({...course, description: e.target.value})}} />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Add Course</Button>
                    <Button type="reset" color="warning ml-2">Clear</Button>
                </Container>
            </Form>
        </div>
    )
}


export default AddCourse;