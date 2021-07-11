import { Card, CardBody } from "reactstrap";
import Clock from './Clock';

//function Header(props) {
function Header({ name , title }) {
    return (
      <div>
        <Card className="my-2 bg-warning">
          <CardBody>
            <h1 className="text-center my-3">Welcome to React Application</h1>
            <p className="text-center"><Clock /></p>
          </CardBody>
        </Card>
      </div>

      /*<div style = { {background: 'grey' , padding: 10 , width: 800} }>
        <h1>Header Component {title}</h1>
        <p>{name}</p>
      </div>*/
    );
  }
  
  export default Header;
  