import React from 'react'
import PCHead from './pc_header'
// import { Row, Col } from 'antd';

// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'
const center = {
  width: '80%',
  margin: '0 auto'
}
const PCindex = () => (
  //   <Router>
  //     <div>
  //       <Route exact path="/" component={Home}/>
  //       <Route path="/about" component={About}/>
  //       <Route path="/topics" component={Topics}/>
  //     </div>
  //   </Router>

  <div>
    {/* <Row type="flex" justify="center">
      <Col span={20}>
      </Col>
    </Row> */}
    <div style={center}>
      <PCHead />
    </div>
  </div>
)


// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// )

// const About = ({ match }) => (
//   <div>
//     <h2>About{match.url}</h2>
//   </div>
// )

// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>
//           Rendering with React{match.url}
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>
//           Components
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>
//           Props v. State
//         </Link>
//       </li>
//     </ul>

//     <Route path={`${match.url}/:topicId`} component={Topic} />
//     <Route exact path={match.url} render={() => (
//       <h3>Please select a topic.</h3>
//     )} />
//   </div>
// )

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// )

export default PCindex