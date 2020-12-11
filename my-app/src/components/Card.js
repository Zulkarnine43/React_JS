import '../index.css';
import Home from '../components/home';
const todoTitle="hello familly";

const date=new Date();

const dateName=date.getDate();
const monthName=date.getMonth();
const currentYear=date.getFullYear();
// const headingStyle=
// {
//   color: "red", 
//   fontSize:"3rem",
//   backgroundColor:"purple",
//   color:"white",
//   padding:"15px",
//   textAlign:"center"
// }

const name=["dog","cat"];

const [dog,cat]=name;

function Card(props){
  const {titleText,description}=props;
  return <div className="card">
  <h3 className="cardTitle">{todoTitle}</h3>
  <h3 className="cardTitle">{props.titleText}</h3>
<p className="cardDesc">{description}</p>
 <p className="cardFooter">{ dateName +"/" +monthName +"/" +currentYear}</p>
 <Home title="what,s up home" />
  </div>
}
export default Card;