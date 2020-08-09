import React from 'react';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import { Destructuring_props } from './components/Destructuring_props';
import { FunctionClick } from './components/FunctionClick';
import ClassClick from './components/ClassCick';
import EventBinding from './components/EventBinding';
import ParentComponent from './components/ParentComponent';
import ConditionalRendering from './components/ConditionalRendering';
import { List1 } from './components/List1';
import { List2 } from './components/List2';
import { List3 } from './components/List3';
import { ListParent } from './components/ListParent';
import StyleSheet from './components/StyleSheet';
import InlineStyling from './components/InlineStyling';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import HttpGet from './components/HttpGet';
import HttpPost from './components/HttpPost';


class App extends React.Component{
  render(){
    return(
      <div style={{textAlign:"center"}}>
        {/* <Counter/> */}
        {/* <Message/> */}
        {/* <Greet name={"Sahil"} sirName="Garg"/>
        <Greet name="Aman" sirName="Singh"/>
        
        <Greet name="Abhishek" sirName="Kumar">
          This Is MY Child
        </Greet>

        <Welcome name="Aman" sirName="Singh"/>
        <Welcome name="ABi" sirName="Singh"/>
        <Welcome name="ASsss" sirName="Singh"/> */}

        {/* <Destructuring_props name="Kumar" sirName ="Sas"/> */}

        {/* <FunctionClick/> */}
        {/* <ClassClick/> */}

        {/* <EventBinding/> */}

        {/* <ParentComponent/> */}

        {/* <ConditionalRendering/> */}
        {/* <List1/> */}

        {/* <List2/> */}
        {/* <List3/> */}

        {/* <ListParent/> */}

        {/* <StyleSheet/> */}
      {/* <InlineStyling/> */}

      {/* <Form/> */}
      {/* <LifecycleA/> */}
      
      {/* <HttpGet/> */}
      <HttpPost/>
     
      

      </div>
      
    );
  }
}

export default App;