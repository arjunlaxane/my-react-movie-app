//1-06-22

//https://calm-sherbet-2362ef.netlify.app/

//https://wonderful-snyder-22e726.netlify.app/

//-------------------------------------------------------------

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

// function Message({ pic, name }) {
//   // console.log(props);
//   //   // const name = 'Tanmay';
//   //   // const name = props.name;

//   return (
//     <>
//       {/* <div> */}
//       {/* <div> */}
//       {/* <section> */}
//       <img className="profile-pic" src={pic} alt={name} />
//       <h1>Hello,{name}🎇🎈🎈🖼</h1>
//       {/* </section> */}
//       {/* </div> */}
//       {/* </div> */}
//     </>
//   );
// }

//--------------------------------TASK-----MOVIES--------//

// import './App.css';

// function App() {
//   //JS start

//   const time = 30;
//   //JS ends
//   //JSX start

//   const movies = [
//     {
//       name: 'RRR',
//       pic: 'https://cdn.celpox.com/blog/wp-content/uploads/2021/03/05122442/Alluri-Seetharamaraju-and-Komaram-Bheem-1024x632.jpg',
//       rate: '⭐ 8.8',
//       desc: 'RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.',
//     },
//     {
//       name: 'Kabali',
//       pic: 'https://akm-img-a-in.tosshub.com/sites/dailyo/fb_feed_images/story_image/201607/kabalifb_072516092417.jpg',

//       rate: '⭐ 8.9',
//       desc: 'Kabali is a 2016 Indian Tamil-language action drama film[5] written and directed by Pa. Ranjith and produced by Kalaipuli S. Thanu.[6] The film stars Rajinikanth in the titular role, with Radhika Apte, Sai Dhanshika, Winston Chao, Kishore, Dinesh, Kalaiyarasan and John Vijay in supporting roles. The film follows Kabali, an aged gangster who, once freed from prison, goes on to exact revenge upon his rivals while also looking for his wife Kumudhavalli and daughter Yogitha.',
//     },
//     {
//       name: 'KGF-2',
//       pic: 'https://bollywoodlatestforu.com/wp-content/uploads/2021/01/KGF-chapter-2-budget-poster-1068x1610.jpg',
//       rate: '⭐ 8.8',
//       desc: 'RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.',
//     },
//     {
//       name: 'KGF-1',
//       pic: 'https://histradar.com/wp-content/uploads/2020/12/kgf-1.jpg',

//       rate: '⭐ 8.5',
//       desc: 'K.G.F: Chapter 1 is a 2018 Indian Kannada-language period action film[5] written and directed by Prashanth Neel, and produced by Vijay Kiragandur under the banner of Hombale Films. It is the first of two installments in the series, followed by K.G.F: Chapter 2. The film features rol of Mumbai by his employer aiming to assassinate Garuda, the future heir of Kolar Gold Fields.',
//     },
//     {
//       name: '300',
//       pic: 'https://tse1.mm.bing.net/th?id=OIP.ac5L80MBmDNNp_aySOTHZQHaEK&pid=Api&P=0&w=294&h=165',

//       rate: '⭐ 8.6',
//       desc: '300 is a 2006 American epic historical action film[4][5] based on the 1998 comic series of the same name by Frank Miller and Lynn Varley. Both are fictionalized retellings of the Battle of Thermopylae in the Persian Wars. The film was co-written and directed by Zack Snyder, while Miller served as executive producer and consultant. It was filmed mostly with a superimposition chroma key technique to replicate the imagery of the original comic book.',
//     },
//     {
//       name: 'The pursuit of hapiness',
//       pic: 'https://miro.medium.com/max/548/1*Y8vXN1mJeEHyXWJtFICjiQ.jpeg',

//       rate: '⭐ 8.9',
//       desc: 'The Pursuit of Happyness is a 2006 American biographical drama film directed by Gabriele Muccino and starring Will Smith as Chris Gardner, a homeless salesman.',
//     },
//   ];

//   return (
//     <div className="App">
//       {/* component + loop */}
//       {movies.map(movie => (
//         <Message
//           name={movie.name}
//           pic={movie.pic}
//           rate={movie.rate}
//           desc={movie.desc}
//         />
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

// function Message({ pic, name, rate, desc }) {
//   // console.log(props);
//   //   // const name = 'Tanmay';
//   //   // const name = props.name;

//   return (
//     <div className="movie-container">
//       {/* <div> */}
//       {/* <section> */}
//       <img className="profile-pic" src={pic} alt={name} />
//       <img className="profile-pic" src={rate} alt={rate} />
//       <h3>{name}🎇🎈🎈🖼</h3>
//       <p>{desc}</p>
//       {/* </section> */}
//       {/* </div> */}
//     </div>
//   );
// }

//------------------2-06-22 class--------------------------------

//counter------//

// import { useState } from 'react';
// import './App.css';

// function App() {
//   //JS start

//   const time = 30;
//   //JS ends
//   //JSX start

//   return (
//     <div className="App">
//       <Counter />
//     </div>
//   );
// }
// //JSX ends
// export default App;

// function Counter() {
//   const [Like, setLike] = useState(0);
//   const [disLike, setdisLike] = useState(0);
//   return (
//     <div>
//       <button onClick={() => setLike(Like + 1)}>👍{Like}</button>
//       <button onClick={() => setdisLike(disLike + 1)}>👎{disLike}</button>
//     </div>
//   );
// }
// //callbaack fn: () => setLike(Like + 1)
//---------------------3-06-22---------------------------------------------

//developers have move towards function component from class component as function component easy+performance.. function introduced 5 yrs ago

//virtual dom brings in performance in react...only for performance purpose we have virtual dom

//Virtual dom is just a copy of real dom

//we access real dom by document.getelementbyid....
//document is a global object

//when u do 1 update/sec----ok
//when u do 1000+ update/sec----performance lag, gittering  system could get hang

//whenever u update then browser has to take care of other elemnts too. e.g. u took 1 book from library (surrounding elements also get update)then browser will automatically compute and will update the entire dom. so, how to deal with this problem. Thus comes virtual DOM

//In virtual DOM+u put copy of real dom. So when u update any element then there is no time lag..why? eg. u have a salary of 40K and u withdrew Rs.10 everyday with transaction cost of Rs.5.Thus, when u exhaust all 40K , u will have 20K in Hand sice every day u r losing 50% of money....how can u reduced this lose?-----ans: saving---and when u have 40K in account ..u will just withdraw it in one go. Thus u will have 39995 in hand

//This is what we do in virtual dom
//We first update on virtual dom maybe 10000+/sec updates(updating on virtual dom is free..it is like saving a money in bank with no loss..thus here we will have no performance loss).
//This when u update 10000+/sec..after updating it will compare updated version of virtual dom with real dom
//thus we have committed only 1 update on real dom wrt 10000+ updates on virtual dom. Thus, no hang, no load on system

//u might say why virtual dom is free- becoz virtual dom is just a big object{}. when u update it, it doesn't care about surrounding elements...it is just updating particular key value virtually and not actually.....so after updating when virtual dom sends it to browser....it is browser which compares and update entire document

//why u should not use document.sth in react bcoz u will then touching real dom directly thus not getting performance benifit of virtual dom
//so how to update virtual dom in react...how we update sth on screen in react is using setState...here we r actually interacting with virtual dom...so react does update virtual dom first....so use hooks

//why do we need unique key:The last steps is to compare virtual and real dom..so key is to identify and match the particular elements to be changed....if no key then react will go mad....This process is called reconciliation

//u doesn't pay performance cost pn virtual dom

//how do we access virtual dom: using react hooks....Thus we can access virtual dom using hooks setState

//browser brings in htmlparser and convert it to dom and same for css for cssom

//if we directly access dom then it could be costly as browser has to rework things surrounding it....e.g. there will be lag on dashboard if there is

//if u have given unique while comparing it will match those keys and color elements. Thus it will not go till end looking for element. If key 4 is to color, it will match color it and stop

//virtual dom updates in batching....
//in case of staic elements there is no need of key but u can give if u want to
//as react will identify that static elements

//but in case of dynamic elements where we r looping same types of elements again and again there we need kay to identify that particular elements.

//when we have twins born then only there is confusion so need key

//babeljs.io-here babel is doing React.createelement and not document.createelements. Bcoz if it uses documents then it will be directly targetting real dom and update real dom first which we do not want

//when we do react.createelement then it will be with virtual dom and after matching it would be reflected in real dom

//everytime we are updating/returning has to go through virtual dom first
//we use hook because only then react listen to events

//settimeout, setinterval all are part of webapi that is y if u console them u will see native code
//settimeout nd setinterval r not a part of js , it is a part of browser code which is specifically part of web api....thus both will not be in js source code but in browser code
//onclick is a part of webapi
//only asynchronous fn are callback as time delay is involved
//--------------------------------------------------------

//-----------------color game-------------------------------------------

// import { useState } from 'react';
// import './App.css';

// function App() {
//   //JS start

//   const time = 30;
//   //JS ends
//   //JSX start

//   const movies = [
//     {
//       name: 'RRR',
//       pic: 'https://cdn.celpox.com/blog/wp-content/uploads/2021/03/05122442/Alluri-Seetharamaraju-and-Komaram-Bheem-1024x632.jpg',
//       rate: '⭐ 8.8',
//       desc: 'RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.',
//     },
//     {
//       name: 'Kabali',
//       pic: 'https://akm-img-a-in.tosshub.com/sites/dailyo/fb_feed_images/story_image/201607/kabalifb_072516092417.jpg',

//       rate: '⭐ 8.9',
//       desc: 'Kabali is a 2016 Indian Tamil-language action drama film[5] written and directed by Pa. Ranjith and produced by Kalaipuli S. Thanu.[6] The film stars Rajinikanth in the titular role, with Radhika Apte, Sai Dhanshika, Winston Chao, Kishore, Dinesh, Kalaiyarasan and John Vijay in supporting roles. The film follows Kabali, an aged gangster who, once freed from prison, goes on to exact revenge upon his rivals while also looking for his wife Kumudhavalli and daughter Yogitha.',
//     },
//     {
//       name: 'KGF-2',
//       pic: 'https://bollywoodlatestforu.com/wp-content/uploads/2021/01/KGF-chapter-2-budget-poster-1068x1610.jpg',
//       rate: '⭐ 8.8',
//       desc: 'RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.',
//     },
//     {
//       name: 'KGF-1',
//       pic: 'https://histradar.com/wp-content/uploads/2020/12/kgf-1.jpg',

//       rate: '⭐ 8.5',
//       desc: 'K.G.F: Chapter 1 is a 2018 Indian Kannada-language period action film[5] written and directed by Prashanth Neel, and produced by Vijay Kiragandur under the banner of Hombale Films. It is the first of two installments in the series, followed by K.G.F: Chapter 2. The film features rol of Mumbai by his employer aiming to assassinate Garuda, the future heir of Kolar Gold Fields.',
//     },
//     {
//       name: '300',
//       pic: 'https://tse1.mm.bing.net/th?id=OIP.ac5L80MBmDNNp_aySOTHZQHaEK&pid=Api&P=0&w=294&h=165',

//       rate: '⭐ 8.6',
//       desc: '300 is a 2006 American epic historical action film[4][5] based on the 1998 comic series of the same name by Frank Miller and Lynn Varley. Both are fictionalized retellings of the Battle of Thermopylae in the Persian Wars. The film was co-written and directed by Zack Snyder, while Miller served as executive producer and consultant. It was filmed mostly with a superimposition chroma key technique to replicate the imagery of the original comic book.',
//     },
//     {
//       name: 'The pursuit of hapiness',
//       pic: 'https://miro.medium.com/max/548/1*Y8vXN1mJeEHyXWJtFICjiQ.jpeg',

//       rate: '⭐ 8.9',
//       desc: 'The Pursuit of Happyness is a 2006 American biographical drama film directed by Gabriele Muccino and starring Will Smith as Chris Gardner, a homeless salesman.',
//     },
//   ];

//   return (
//     <div className="App">
//       {/* component + loop */}
//       {/* {movies.map(movie => (
//         <Message
//           name={movie.name}
//           pic={movie.pic}
//           rate={movie.rate}
//           desc={movie.desc}
//         />
//       ))} */}
//       <AddColor />
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

// function AddColor() {
//   // const [color, setColor] = useState('deepskyblue');
//   const [color, setColor] = useState('color');

//   const styles = {
//     backgroundColor: color,
//   };

//   // const colorList = ['deepskyblue', 'orange', 'crimson'];

//   const initial_color = ['deepskyblue', 'blue', 'crimson'];
//   const [colorList, setColorList] = useState(initial_color);

//   return (
//     <div>
//       {/* <input
//         onChange={event => setColor(console.log(event))}
//         style={styles}
//         placeholder="Enter color"
//       /> */}

//       <input
//         value={color}
//         onChange={event => setColor(event.target.value)}
//         style={styles}
//         placeholder="Enter color"
//       />
//       <button
//         onClick={() => {
//           setColorList([...colorList, color]);
//           // we r copying colorList---immutability...lets developer sleep
//         }}
//       >
//         Add color
//       </button>

//       {colorList.map((clr, index) => (
//         <ColorBox key={index} color={clr} />
//       ))}

//       {/* value of color is updated by react */}
//     </div>
//   );
// }

// function ColorBox({ color }) {
//   const styles = {
//     backgroundColor: color,
//     height: '25px',
//     width: '200px',
//     marginTop: '10px',
//   };

//   return <div style={styles}></div>;
// }

// function Message({ pic, name, rate, desc }) {
//   // console.log(props);
//   //   // const name = 'Tanmay';
//   //   // const name = props.name;

//   return (
//     <div className="movie-container">
//       {/* <div> */}

//       {/* <section> */}
//       <img className="profile-pic" src={pic} alt={name} />
//       <img className="profile-pic" src={rate} alt={rate} />
//       <h3>{name}🎇🎈🎈🖼</h3>
//       <p>{desc}</p>
//       {/* </section> */}
//       {/* </div> */}
//     </div>
//   );
// }

//1.named import /export-preffered-multiple
//2. default import/export-only 1 import/file

// import {Welcome,use,....} from './Welcome';
// export function welcome()
//export const double(n)=>n*2
//export {welcome,double,....}
//export default welcome----------------
//webpack will look after package like react in node modules
//https://observablehq.com/@d3/gallery

//---------------------------TASK------------------------------------

// import './App.css';

// function App() {
//   const title = ['FREE', 'PLUS', 'PRO'];
//   const cardValue = ['0', '9', '49'];
//   const free = [
//     'Single user',
//     '5GB Storage',
//     'Unlimited public project',
//     'Community Access',
//     'Unlimited private project',
//     'Dedicated phone support',
//     'Free subdomain',
//     'Monthly Status report',
//   ];
//   const plus = [
//     '5 Users',
//     '50GB Storage',
//     'Unlimited public project',
//     'Community Access',
//     'Unlimited private project',
//     'Dedicated phone support',
//     'Free subdomain',
//     'Monthly Status report',
//   ];
//   const pro = [
//     'Unlimited Users',
//     '150GB Storage',
//     'Unlimited public project',
//     'Community Access',
//     'Unlimited private project',
//     'Dedicated phone support',
//     'Unlimited Free subdomain',
//     'Monthly Status report',
//   ];
//   return (
//     <div className="App">
//       {title.map((t, index) => (
//         <Card key={index} heading={t} />
//       ))}
//       {cardValue.map((v, index) => (
//         <Card key={index} val={v} />
//       ))}
//       {/* {free.map((f, index) => ( */}
//       {/* <Card key={index} feature={f} /> */}
//       {/* ))} */}
//       {/* {plus.map((f, index) => ( */}
//       {/* <Card key={index} feature={f} /> */}
//       {/* ))} */}
//       {/* {pro.map((f, index) => ( */}
//       {/* <Card key={index} feature={f} /> */}
//       {/* ))} */}
//     </div>
//   );
// }

// export default App;

// function Card({ heading, val, feature }) {
//   return (
//     <div className="container">
//       <h6>{heading}</h6>
//       <h1>
//         ${val}
//         <sub>/month</sub>
//       </h1>
//       <div className="msg">
//         <p>{feature}</p>
//       </div>
//     </div>
//   );
// }

// -------------------------------------06-06-2022----

// //-----------------color game-------------------------------------------

// // import { useState } from 'react';
// // import './App.css';

// export default App;

// //create component
// //function-> component
// //1. First letter capital
// //2.It should be 1 JSX element

// //Define the component
// //props-properties--pas arguments to component

// function AddColor() {
//   // const [color, setColor] = useState('deepskyblue');
//   const [color, setColor] = useState('color');

//   const styles = {
//     backgroundColor: color,
//   };

//   // const colorList = ['deepskyblue', 'orange', 'crimson'];

//   const initial_color = ['deepskyblue', 'blue', 'crimson'];
//   const [colorList, setColorList] = useState(initial_color);

//   return (
//     <div>
//       {/* <input
//         onChange={event => setColor(console.log(event))}
//         style={styles}
//         placeholder="Enter color"
//       /> */}

//       <input
//         value={color}
//         onChange={event => setColor(event.target.value)}
//         style={styles}
//         placeholder="Enter color"
//       />
//       <button
//         onClick={() => {
//           setColorList([...colorList, color]);
//           // we r copying colorList---immutability...let developer sleep
//         }}
//       >
//         Add color
//       </button>

//       {colorList.map((clr, index) => (
//         <ColorBox key={index} color={clr} />
//       ))}

//       {/* value of color is updated by react */}
//     </div>
//   );
// }

// function ColorBox({ color }) {
//   const styles = {
//     backgroundColor: color,
//     height: '25px',
//     width: '200px',
//     marginTop: '10px',
//   };

//   return <div style={styles}></div>;
// }

// function Message({ pic, name, rate, desc }) {
//   // console.log(props);
//   //   // const name = 'Tanmay';
//   //   // const name = props.name;

//   return (
//     <div className="movie-container">
//       {/* <div> */}

//       {/* <section> */}
//       <img className="profile-pic" src={pic} alt={name} />
//       <img className="profile-pic" src={rate} alt={rate} />
//       <h3>{name}🎇🎈🎈🖼</h3>
//       <p>{desc}</p>
//       {/* </section> */}
//       {/* </div> */}
//     </div>
//   );
// }

// function App() {
//   //JS start

//   //JS ends
//   //JSX start

//   const initial_movie_list = [
//     {
//       name: 'RRR',
//       poster:
//         'https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG',
//       rating: 8.8,
//       summary:
//         'RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.',
//     },
//     {
//       name: 'Iron man 2',
//       poster:
//         'https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg',
//       rating: 7,
//       summary:
//         'With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.',
//     },
//     {
//       name: 'No Country for Old Men',
//       poster:
//         'https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg',
//       rating: 8.1,
//       summary:
//         "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//     },
//     {
//       name: 'Jai Bhim',
//       poster:
//         'https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg',
//       summary:
//         'A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case',
//       rating: 8.8,
//     },
//     {
//       name: 'The Avengers',
//       rating: 8,
//       summary:
//         "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//       poster:
//         'https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg',
//     },
//     {
//       name: 'Interstellar',
//       poster: 'https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg',
//       rating: 8.6,
//       summary:
//         'When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.',
//     },
//     {
//       name: 'Baahubali',
//       poster: 'https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg',
//       rating: 8,
//       summary:
//         'In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.',
//     },
//     {
//       name: 'Ratatouille',
//       poster:
//         'https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=',
//       rating: 8,
//       summary:
//         'Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.',
//     },
//   ];

//   const [movieList, setMovieList] = useState(initial_movie_list);

//   // const [movieList, setMovieList] = useState([]); blank screen as empty array

//   return (
//     <div className="App">
//       {/* passing movielist here as prop */}

//       <MovieList movieList={movieList} setMovieList={setMovieList} />
//       {/* <AddColor /> */}
//     </div>
//   );
// }

// //JSX ends>
// // export default App;

// //create component
// //function-> component
// //1. First letter capital
// //2.It should be 1 JSX element

// //Define the component
// //props-properties--pas arguments to component
// //we can also pass function as prop
// //here we pass object as prop..we can pass any data type as prop
// function MovieList({ movieList, setMovieList }) {
//   const [name, setName] = useState('');
//   const [poster, setPoster] = useState('');
//   const [rating, setRating] = useState('');
//   const [summary, setSummary] = useState('');

//   const addMovie = () => {
//     // copy the movielist and add new movie to it

//     const newMovie = {
//       name: name,
//       poster: poster,
//       rating: rating,
//       summary: summary,
//     };
//     setMovieList([...movieList, newMovie]);
//     console.log(newMovie);
//   };
//   return (
//     <div>
//       <div className="add-movie-form">
//         {/* we need 4 inputs */}
//         <input
//           placeholder="name"
//           onChange={event => setName(event.target.value)}
//         />
//         <input
//           placeholder="poster"
//           onChange={event => setPoster(event.target.value)}
//         />
//         <input
//           placeholder="rating"
//           onChange={event => setRating(event.target.value)}
//         />
//         <input
//           placeholder="summary"
//           onChange={event => setSummary(event.target.value)}
//         />
//         {/* <p> name:{name}</p> */}
//         {/* <p> poster:{poster}</p> */}
//         {/* <p> rating:{rating}</p> */}
//         {/* <p> summary:{summary}</p> */}
//         <button
//           //never add such long syntax 1094-1105, create addMovie variable
//           // onClick={() => {
//           //   // copy the movielist and add new movie to it

//           //   const newMovie = {
//           //     name: name,
//           //     poster: poster,
//           //     rating: rating,
//           //     summary: summary,
//           //   };
//           //   setMovieList([...movieList, newMovie]);
//           //   console.log(newMovie);
//           // }}

//           onClick={addMovie}
//         >
//           Add Movie
//         </button>
//       </div>
//       <div className="movie-list">
//         {movieList.map((movie, index) => (
//           <Movie key={index} movie={movie} />
//         ))}
//       </div>
//     </div>
//   );
// }

// function Movie({ movie }) {
//   // console.log(props);
//   //   // const name = 'Tanmay';
//   //   // const name = props.name;

//   //conditional styling
//   const styles = {
//     color: movie.rating > 8 ? 'green' : 'red',
//   };
//   //conditional styling

//   const [show, setShow] = useState(true);

//   const parastyles = {
//     display: show ? 'block' : 'none',
//   };

//   return (
//     <div className="movie-container">
//       <img className="movie-poster" src={movie.poster} alt={movie.name} />
//       <div className="movie-specs">
//         <h2 className="movie-name">{movie.name}🎇🎈🎈🖼</h2>
//         <p style={styles} className="movie-rating">
//           {movie.rating}
//         </p>
//       </div>
//       <button onClick={() => setShow(!show)}>summary</button>
//       <p style={parastyles} className="movie-summary">
//         {movie.summary}
//       </p>

//       {/* conditional rendering */}

//       {/* {show ? <p className="movie-summary">{movie.summary}</p> : null} */}

//       <Counter />
//     </div>
//   );
// }

// // import { useState } from 'react'; should be at top
// //hook- it is a function, that make react listen to change. This function uses prefix use e.g useState

// //const [state,setState]=useState(InitialValue)
// //state-current value or current scenario-state of the art tech
// //setState-It is a function-It update state-It informs react that state is changed
// function Counter() {
//   const [Like, setLike] = useState(0);
//   const [disLike, setdisLike] = useState(0);
//   return (
//     <div>
//       <button onClick={() => setLike(Like + 1)}>👍{Like}</button>
//       <button onClick={() => setdisLike(disLike + 1)}>👎{disLike}</button>
//     </div>
//   );
// }

// //react routing

// //why do we've different pages-home,about...
// //if we have different pages it is routing
// //we want our user to keep engaged so if there is no routing ....and u have home page ....by mistake u click refresh...then everything is gone....u r lost
// //when no routing then u cant bookmark individual pages

// //adv of routing
// //pages r organised
// //ease of access
// //u can share individual pages
// //secure route-login then only u can access ex netflix

// //our react app is spa means there is only 1 page....so do i bring rounting in 1 page application

// //in old apps routing is waiting waiting....nothiing happens

// //so this is reason we use spa
// //challenge is we want best of both words.--smooth like spa+mpa should've routing
// //this is reason we are going to use new package called react router dom. with react router dom we can have smooth loading like water

// //routing setup
// //we will use react-router-dom version 6
// //https://reactrouter.com/

// //in routing we have 2 routers:1.browser router 2. hash router
// //  / vs /#/

// //browser router will not work in old browser but only in new browser...so we will use # browser as it works in both

// //# browser has limitation and less feature so we will use browser router here
// //react router dom is a third party package-trustable people
// //job of route is to match links to particular component
// //nav link to change url

// --------------------------routing-----

//-----------------color game-------------------------------------------

import { useState } from 'react';
import './App.css';
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';

export default App;

//create component
//function-> component
//1. First letter capital
//2.It should be 1 JSX element

//Define the component
//props-properties--pas arguments to component

function AddColor() {
  // const [color, setColor] = useState('deepskyblue');
  const [color, setColor] = useState('color');

  const styles = {
    backgroundColor: color,
  };

  // const colorList = ['deepskyblue', 'orange', 'crimson'];

  const initial_color = ['deepskyblue', 'blue', 'crimson'];
  const [colorList, setColorList] = useState(initial_color);

  return (
    <div>
      {/* <input
        onChange={event => setColor(console.log(event))}
        style={styles}
        placeholder="Enter color"
      /> */}

      <input
        value={color}
        onChange={event => setColor(event.target.value)}
        style={styles}
        placeholder="Enter color"
      />
      <button
        onClick={() => {
          setColorList([...colorList, color]);
          // we r copying colorList---immutability...let developer sleep
        }}
      >
        Add color
      </button>

      {colorList.map((clr, index) => (
        <ColorBox key={index} color={clr} />
      ))}

      {/* value of color is updated by react */}
    </div>
  );
}

function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: '25px',
    width: '200px',
    marginTop: '10px',
  };

  return <div style={styles}></div>;
}

function Message({ pic, name, rate, desc }) {
  // console.log(props);
  //   // const name = 'Tanmay';
  //   // const name = props.name;

  return (
    <div className="movie-container">
      {/* <div> */}

      {/* <section> */}
      <img className="profile-pic" src={pic} alt={name} />
      <img className="profile-pic" src={rate} alt={rate} />
      <h3>{name}🎇🎈🎈🖼</h3>
      <p>{desc}</p>
      {/* </section> */}
      {/* </div> */}
    </div>
  );
}

function App() {
  //JS start

  //JS ends
  //JSX start

  const initial_movie_list = [
    {
      name: 'RRR',
      poster:
        'https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG',
      rating: 8.8,
      summary:
        'RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.',
    },
    {
      name: 'Iron man 2',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg',
      rating: 7,
      summary:
        'With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.',
    },
    {
      name: 'No Country for Old Men',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg',
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    },
    {
      name: 'Jai Bhim',
      poster:
        'https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg',
      summary:
        'A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case',
      rating: 8.8,
    },
    {
      name: 'The Avengers',
      rating: 8,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster:
        'https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg',
    },
    {
      name: 'Interstellar',
      poster: 'https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg',
      rating: 8.6,
      summary:
        'When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.',
    },
    {
      name: 'Baahubali',
      poster: 'https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg',
      rating: 8,
      summary:
        'In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.',
    },
    {
      name: 'Ratatouille',
      poster:
        'https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=',
      rating: 8,
      summary:
        'Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.',
    },
  ];

  const [movieList, setMovieList] = useState(initial_movie_list);

  // const [movieList, setMovieList] = useState([]); blank screen as empty array

  return (
    <div className="App">
      {/* passing movielist here as prop */}

      {/* bcoz of anchor tag whole page is loading/refreshing so use link */}
      {/* <nav>
        <ul>
          <li>
            <a href="/"></a> Home
          </li>
          <li>
            <a href="/color-game"></a>color
          </li>
        </ul>
      </nav> */}

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/color-game">color</Link>
          </li>
          <li>
            <Link to="/movies">add movie</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        {/* here we r trying to match path */}
        <Route path="/" element={<Home />} />
        <Route path="/color-game" element={<AddColor />} />
        <Route
          path="/movies"
          element={
            <MovieList movieList={movieList} setMovieList={setMovieList} />
          }
        />
        <Route path="/movies/:id" element={<movieList />} />

        <Route path="/films" element={<Navigate replace to="/movies" />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      {/* this * will match any link other than mention above un routes */}
      {/* <MovieList movieList={movieList} setMovieList={setMovieList} /> */}
      {/* <AddColor /> */}
    </div>
  );
}

function NotFound() {
  // u can put img here
  return <h1>404 not found</h1>;
}
//in js to learn abt regex: https://regexone.com/
function Home() {
  return <h1>Welcome to the movie app</h1>;
}
//JSX ends>
// export default App;

//create component
//function-> component
//1. First letter capital
//2.It should be 1 JSX element

//Define the component
//props-properties--pas arguments to component
//we can also pass function as prop
//here we pass object as prop..we can pass any data type as prop
function MovieList({ movieList, setMovieList }) {
  const [name, setName] = useState('');
  const [poster, setPoster] = useState('');
  const [rating, setRating] = useState('');
  const [summary, setSummary] = useState('');

  const addMovie = () => {
    // copy the movielist and add new movie to it

    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
    };
    setMovieList([...movieList, newMovie]);
    console.log(newMovie);
  };
  return (
    <div>
      <div className="add-movie-form">
        {/* we need 4 inputs */}
        <input
          placeholder="name"
          onChange={event => setName(event.target.value)}
        />
        <input
          placeholder="poster"
          onChange={event => setPoster(event.target.value)}
        />
        <input
          placeholder="rating"
          onChange={event => setRating(event.target.value)}
        />
        <input
          placeholder="summary"
          onChange={event => setSummary(event.target.value)}
        />
        {/* <p> name:{name}</p> */}
        {/* <p> poster:{poster}</p> */}
        {/* <p> rating:{rating}</p> */}
        {/* <p> summary:{summary}</p> */}
        <button
          //never add such long syntax 1094-1105, create addMovie variable
          // onClick={() => {
          //   // copy the movielist and add new movie to it

          //   const newMovie = {
          //     name: name,
          //     poster: poster,
          //     rating: rating,
          //     summary: summary,
          //   };
          //   setMovieList([...movieList, newMovie]);
          //   console.log(newMovie);
          // }}

          onClick={addMovie}
        >
          Add Movie
        </button>
      </div>
      <div className="movie-list">
        {movieList.map((movie, index) => (
          <Movie key={index} movie={movie} id={index} />
        ))}
      </div>
    </div>
  );
}

function Movie({ movie, id }) {
  // console.log(props);
  //   // const name = 'Tanmay';
  //   // const name = props.name;

  //conditional styling
  const styles = {
    color: movie.rating > 8 ? 'green' : 'red',
  };
  //conditional styling

  const [show, setShow] = useState(true);

  const parastyles = {
    display: show ? 'block' : 'none',
  };
  const navigate = useNavigate();
  return (
    <div className="movie-container">
      <img className="movie-poster" src={movie.poster} alt={movie.name} />
      <div className="movie-specs">
        <h2 className="movie-name">{movie.name}🎇🎈🎈🖼</h2>
        <p style={styles} className="movie-rating">
          {movie.rating}
        </p>
      </div>
      <button onClick={() => setShow(!show)}>summary</button>
      <button onClick={() => navigate('/movies/${id}  ')}>info</button>

      <p style={parastyles} className="movie-summary">
        {movie.summary}
      </p>

      {/* conditional rendering */}

      {/* {show ? <p className="movie-summary">{movie.summary}</p> : null} */}

      <Counter />
    </div>
  );
}

//counter------//

// import { useState } from 'react'; should be at top
//hook- it is a function, that make react listen to change. This function uses prefix use e.g useState

//const [state,setState]=useState(InitialValue)
//state-current value or current scenario-state of the art tech
//setState-It is a function-It update state-It informs react that state is changed
function Counter() {
  const [Like, setLike] = useState(0);
  const [disLike, setdisLike] = useState(0);
  return (
    <div>
      <button onClick={() => setLike(Like + 1)}>👍{Like}</button>
      <button onClick={() => setdisLike(disLike + 1)}>👎{disLike}</button>
    </div>
  );
}

//react routing

//why do we've different pages-home,about...
//if we have different pages it is routing
//we want our user to keep engaged so if there is no routing ....and u have home page ....by mistake u click refresh...then everything is gone....u r lost
//when no routing then u cant bookmark individual pages

//adv of routing
//pages r organised
//ease of access
//u can share individual pages
//secure route-login then only u can access ex netflix

//our react app is spa means there is only 1 page....so do i bring rounting in 1 page application

//in old apps routing is waiting waiting....nothiing happens

//so this is reason we use spa
//challenge is we want best of both words.--smooth like spa+mpa should've routing
//this is reason we are going to use new package called react router dom. with react router dom we can have smooth loading like water

//routing setup
//we will use react-router-dom version 6
//https://reactrouter.com/

//in routing we have 2 routers:1.browser router 2. hash router
//  / vs /#/

//browser router will not work in old browser but only in new browser...so we will use # browser as it works in both

//# browser has limitation and less feature so we will use browser router here
//react router dom is a third party package-trustable people
//job of route is to match links to particular component
//nav link to change url

//-----------------------------8-06-22-----------------------------
