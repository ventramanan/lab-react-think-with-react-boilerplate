// const container=document.getElementById("React-container")

// ReactDOM.render("Hello welcome guys",container)

// // Functional component
// const Container = () =>{
//     return React.createElement(`div`,null,`Hey Kalvians! Welcome to React Learning`,
//        React.createElement(`div`,null,`Let's rock and roll`)
//        );
// }
// // Render the Container
// const container = document.getElementById('React-container');
// ReactDOM.render(React.createElement(Container),container);


// class ReactContainer extends React.Component{
//     // constructor - to initialize the state 
  
//     // render method to render the react dom 
//       render(){
//           return React.createElement(`div`,null,`Hey Kalvians`,
//           React.createElement(`div`,null,`Let's rock and roll with classes`)
//           );
//       }
    
//   }
//   const container = document.getElementById('React-container');
//   ReactDOM.render(React.createElement(ReactContainer),container);


class ReactContainer extends React.Component{
    // JSX tags
    // JSX there should be one parent element
      render(){
          return (
          <div>Hello! Welcome to Kalvium   
             <div> Lets rock and roll-This is babel</div>
         </div> )
      };  
  }

const container = document.getElementById('React-container');
// Direclty pass the component to render
ReactDOM.render(<ReactContainer/>,container); 