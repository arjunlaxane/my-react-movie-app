// import logo from './logo.svg';
// import './App.css';

// function App() {
//   //JS start
//   const name = 'ARJUN';
//   const time = 30;
//   //JS ends
//   //JSX
//   return (
//     <section>
//       <div className="App">
//         <h1>Hello, {name}🎄🎪</h1>
//         <p>Time to complete - {5 * time} mins</p>
//         {/* <h2>Start editing to see more magic happen!</h2> */}
//       </div>
//       <h2>Start editing to see more magic happen!</h2>
//     </section>
//   );
// }
// //JSX ends
// export default App;

//----------------------------------------------------------------//

// import './App.css';

// function App() {
//   //JS start

//   const time = 30;
//   //JS ends
//   //JSX start
//   return (
//     <div className="App">
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <p>Time to complete -{5 * time} mins</p>
//       <Message />
//     </div>
//   );
// }
// //JSX ends
// export default App;

// //create component
// //function-> component
// //1. First letter capital
// //2.It should be 1 JSX element

// //Define the component

// function Message() {
//   const name = 'Tanmay';
//   return <h1>Hello,{name}🎇🎈🎈</h1>;
// }

//------name----------------------------------------------

// import './App.css';

// function App() {
//   //JS start

//   const time = 30;
//   //JS ends
//   //JSX start
//   return (
//     <div className="App">
//       <Message name="Mayuri" />
//       <Message name="Abhay" />
//       <Message name="Netravati" />

//       <p>Time to complete -{5 * time} mins</p>
//     </div>
//   );
// }
// //JSX ends
// export default App;

// //create component
// //function-> component
// //1. First letter capital
// //2.It should be 1 JSX element

// //Define the component
// //props-properties--pas arguments to component
// function Message(props) {
//   console.log(props);
//   // const name = 'Tanmay';
//   const name = props.name;
//   return <h1>Hello,{name}🎇🎈🎈🖼</h1>;
// }

//-----------------------image and name-----

// import './App.css';

// function App() {
//   //JS start

//   const time = 30;
//   //JS ends
//   //JSX start
//   return (
//     <div className="App">
//       <Message name="Mayuri" />
//       <Message name="Abhay" />
//       <Message name="Netravati" />

//       <p>Time to complete -{5 * time} mins</p>
//     </div>
//   );
// }
// //JSX ends
// export default App;

// //create component
// //function-> component
// //1. First letter capital
// //2.It should be 1 JSX element

// //Define the component
// //props-properties--pas arguments to component
// function Message(props) {
//   console.log(props);
//   // const name = 'Tanmay';
//   // const name = props.name;

//   return (
//     <>
//       {/* <div> */}
//       {/* <div> */}
//       {/* <section> */}
//       <img
//         className="profile-pic"
//         src="https://www.easterneye.biz/wp-content/uploads/2020/08/Shah-Rukh-Khan-GI.jpg"
//       />
//       <h1>Hello,{props.name}🎇🎈🎈🖼</h1>
//       {/* </section> */}
//       {/* </div> */}
//       {/* </div> */}
//     </>
//   );
// }

//------------------same as above image name

// import './App.css';

// function App() {
//   //JS start

//   const time = 30;
//   //JS ends
//   //JSX start
//   return (
//     <div className="App">
//       <Message
//         name="Mayuri"
//         pic="https://www.easterneye.biz/wp-content/uploads/2020/08/Shah-Rukh-Khan-GI.jp"
//       />
//       <Message
//         name="Abhay"
//         pic="https://www.easterneye.biz/wp-content/uploads/2020/08/Shah-Rukh-Khan-GI.jpg"
//       />
//       <Message
//         name="Netravati"
//         pic="https://www.easterneye.biz/wp-content/uploads/2020/08/Shah-Rukh-Khan-GI.jpg"
//       />

//       <p>Time to complete -{5 * time} mins</p>
//     </div>
//   );
// }
// //JSX ends
// export default App;

// //create component
// //function-> component
// //1. First letter capital
// //2.It should be 1 JSX element

// //Define the component
// //props-properties--pas arguments to component
// function Message(props) {
//   console.log(props);
//   // const name = 'Tanmay';
//   // const name = props.name;

//   return (
//     <>
//       {/* <div> */}
//       {/* <div> */}
//       {/* <section> */}
//       <img className="profile-pic" src={props.pic} alt={props.name} />
//       <h1>Hello,{props.name}🎇🎈🎈🖼</h1>
//       {/* </section> */}
//       {/* </div> */}
//       {/* </div> */}
//     </>
//   );
// }

//---------------print  names---dry violate---

// import './App.css';

// function App() {
//   //JS start

//   const time = 30;
//   //JS ends
//   //JSX start

//   return (
//     <div className="App">
//       <Welcome name="Mayuri" />
//       <Welcome name="Abhay" />
//       <Welcome name="Netravati" />
//     </div>
//   );
// }
// //JSX ends
// export default App;

// //create component
// //function-> component
// //1. First letter capital
// //2.It should be 1 JSX element

// //Define the component
// //props-properties--pas arguments to component
// function Welcome(props) {
//   console.log(props);

//   return (
//     <>
//       {/* <div> */}
//       {/* <div> */}
//       {/* <section> */}

//       <h1>Hello,{props.name}🎇🎈🎈🖼</h1>
//       {/* </section> */}
//       {/* </div> */}
//       {/* </div> */}
//     </>
//   );
// }
//--------------------print array name----use map---

// import './App.css';

// function App() {
//   //JS start

//   const time = 30;
//   //JS ends
//   //JSX start
//   const names = ['Arjun', 'Tanmay', 'Ashish', 'Nupur'];
//   return (
//     <div className="App">
//       {names.map(nm => (
//         <Welcome name={nm} />
//       ))}
//     </div>
//   );
// }
// //JSX ends
// export default App;

// //create component
// //function-> component
// //1. First letter capital
// //2.It should be 1 JSX element

// //Define the component
// //props-properties--pas arguments to component
// function Welcome(props) {
//   console.log(props);

//   return (
//     <>
//       {/* <div> */}
//       {/* <div> */}
//       {/* <section> */}

//       <h1>Hello,{props.name}🎇🎈🎈🖼</h1>
//       {/* </section> */}
//       {/* </div> */}
//       {/* </div> */}
//     </>
//   );
// }

//---------------------json-----

// import './App.css';

// function App() {
//   //JS start

//   const time = 30;
//   //JS ends
//   //JSX start

//   const students = [
//     {
//       name: 'Arjun',
//       pic: 'https://tse1.mm.bing.net/th?id=OIP.qgzox7dzgJV0Kc2BMCCmsgHaEK&pid=Api&P=0&w=323&h=181',
//     },
//     {
//       name: 'Madhuri',
//       pic: 'https://static.toiimg.com/photo/imgsize-19677,msid-76185580/76185580.jpg',
//     },
//     {
//       name: 'Dilip',
//       pic: 'https://tse2.mm.bing.net/th?id=OIP.UQQj-7PCQwRO4O4JsbNO0gHaE4&pid=Api&P=0&w=254&h=167',
//     },
//   ];

//   return (
//     <div className="App">
//       {/* component + loop */}
//       {students.map(student => (
//         <Message name={student.name} pic={student.pic} />
//       ))}
//     </div>
//   );
// }
// //JSX ends
// export default App;

// //create component
// //function-> component
// //1. First letter capital
// //2.It should be 1 JSX element

// //Define the component
// //props-properties--pas arguments to component

// function Message(props) {
//   console.log(props);
//   //   // const name = 'Tanmay';
//   //   // const name = props.name;

//   return (
//     <>
//       {/* <div> */}
//       {/* <div> */}
//       {/* <section> */}
//       <img className="profile-pic" src={props.pic} alt={props.name} />
//       <h1>Hello,{props.name}🎇🎈🎈🖼</h1>
//       {/* </section> */}
//       {/* </div> */}
//       {/* </div> */}
//     </>
//   );
// }

//----------------same using destructuring----

import './App.css';

function App() {
  //JS start

  const time = 30;
  //JS ends
  //JSX start

  const students = [
    {
      name: 'Arjun',
      pic: 'https://tse1.mm.bing.net/th?id=OIP.qgzox7dzgJV0Kc2BMCCmsgHaEK&pid=Api&P=0&w=323&h=181',
    },
    {
      name: 'Madhuri',
      pic: 'https://static.toiimg.com/photo/imgsize-19677,msid-76185580/76185580.jpg',
    },
    {
      name: 'Dilip',
      pic: 'https://tse2.mm.bing.net/th?id=OIP.UQQj-7PCQwRO4O4JsbNO0gHaE4&pid=Api&P=0&w=254&h=167',
    },
  ];

  return (
    <div className="App">
      {/* component + loop */}
      {students.map(student => (
        <Message name={student.name} pic={student.pic} />
      ))}
    </div>
  );
}
//JSX ends
export default App;

//create component
//function-> component
//1. First letter capital
//2.It should be 1 JSX element

//Define the component
//props-properties--pas arguments to component

function Message({ pic, name }) {
  // console.log(props);
  //   // const name = 'Tanmay';
  //   // const name = props.name;

  return (
    <>
      {/* <div> */}
      {/* <div> */}
      {/* <section> */}
      <img className="profile-pic" src={pic} alt={name} />
      <h1>Hello,{name}🎇🎈🎈🖼</h1>
      {/* </section> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
}
