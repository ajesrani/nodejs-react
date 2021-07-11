import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from "react-router-dom";

const Menus = () => {
    return (
        <div>
            <ListGroup>
                {/*<ListGroupItem tag="a" href="/">Home</ListGroupItem>*/}
                <Link className="list-group-item list-group-item-action" tag="a" to="/">Home</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/add-course">Add Course</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/view-courses">View Courses</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="#">About</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="#">Contact Us</Link>
            </ListGroup>
        </div>
    )
}

export default Menus;