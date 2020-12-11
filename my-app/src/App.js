import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import './index.css';
import State from './state';
import Data from './data.json';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import Conditional_rendering from './CONDITIONAL_RENDERING/index'
import Event_handler_class from './EVENT_HANDLER_CLASS/index';
import EVENT_HANDLER from './EVENT_BINDING/index'
import HOOKS_USESTATE from './HOOKS_USESTATE/index'
import HOOKS_USESTATE2 from './HOOKS_USESTATE/index2'
function App(){

    // let items =[];
    // for(let x=0; x<Data.length;x++){
    //     items.push(<Card titleText={Data[x].title} description={Data[x].desc}/>)
    // }
    

    return <div>
<h1>Todo App</h1>
{/* <Card titleText="Call Mother" description="This is description"/> */}
{/* <Card titleText={Data[0].title} description={Data[0].desc}/>
<Card titleText={Data[1].title} description={Data[1].desc}/>
<Card titleText={Data[2].title} description={Data[2].desc}/> */}
{/* {Data.map((item)=><Card titleText={item.title} description={item.desc}/>)} */}
{Data.map((item,index)=><Card key={index} titleText={item.title} description={item.desc}/>)}
<Card2 name="this is card1"/>
<Card3/>
<State count="0"/>
<Conditional_rendering/>
<Event_handler_class/>
<EVENT_HANDLER/>
<HOOKS_USESTATE/>
<HOOKS_USESTATE2/>
</div>

}
 export default App;