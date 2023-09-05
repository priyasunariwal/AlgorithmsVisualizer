import React from "react";

import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';
  
const Home = ()=>{
    return(
        <>

        <div className="container row" style={{display:'flex'}}>
 
    <div style={{  padding: '10px' }}>
<Card border="danger" text="white" bg="dark" style={{ width: '400px',
    padding: '20px',
    border: '2px  solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Sorting Algorithm</Card.Title>
        <Card.Text>
           Enjoyyyyyy
        </Card.Text>
        <Link to="/sorting"><Button border="danger" variant="success" style={{border:'1px solid'}}><Link to="/sorting"></Link>Go somewhere</Button></Link>
      </Card.Body>
    </Card>
    </div>

    <div style={{  padding: '10px' }}>
    <Card border="danger" text="white" bg="dark" style={{ width: '400px',
    padding: '20px',
    border: '2px  solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>PathFinder</Card.Title>
        <Card.Text>
         playyyyyyy
        </Card.Text>
      <Link to='/pathfind'>  <Button  border="danger" variant="success" style={{border:'1px solid'}}>Go somewhere</Button></Link>
      </Card.Body>     
    </Card>
    </div>

    <div style={{  padding: '10px' }}>
    <Card border="danger" text="white" bg="dark" style={{ width: '400px',
    padding: '20px',
    border: '2px  solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button  border="danger" variant="success" style={{border:'1px solid'}}>Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    

    <div style={{  padding: '10px' }}>
    <Card border="danger" text="white" bg="dark" style={{ width: '400px',
    padding: '20px',
    border: '2px  solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button  border="danger" variant="success" style={{border:'1px solid'}}>Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    <div style={{  padding: '10px' }}>
    <Card border="danger" text="white" bg="dark" style={{ width: '400px',
    padding: '20px',
    border: '2px  solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button  border="danger" variant="success" style={{border:'1px solid'}}>Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>


</div> 
       
        
        </>
    );
}

export default Home;
