import { Jumbotron, Button } from 'reactstrap';

const Home = () => {
    return (
        <div>
            <Jumbotron className="text-center">
                <h1 className="display-5">Learn with AJ</h1>
                <p className="lead">This is a simple react application, demonstrating basic features.</p>
                <hr className="my-2" />
                <p>A JavaScript library for building user interfaces.
                    ReactJS is a declarative, efficient, and flexible JS library for building reusable UI components.</p>
                <Button color="primary">Learn More</Button>
            </Jumbotron>
        </div>
    )
}


export default Home;