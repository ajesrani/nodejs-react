import React from 'react';
import axios from 'axios';
import BASE_URL from './../server/bootapi';
import { toast } from 'react-toastify';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
  } from 'reactstrap';

const Course = ( {course, update} ) => {
    
    const deleteCourse = (id) => {
        axios.delete(`${BASE_URL}/courses/${id}`).then(
            (response) => {
                console.log(response);
                toast.success("Course has been deleted");
                update(id);
            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong");
            }
        )
    }

    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger" onClick={()=> {deleteCourse(course.id)}}>Delete</Button>
                    <Button color="warning ml-3">Update</Button>
                </Container>
            </CardBody>
        </Card>
    )
}


export default Course;