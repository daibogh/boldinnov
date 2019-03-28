import * as React from 'react'
import * as ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';
// class App extends React.Component {
//   render () {
//     return (
//       <h1>Django + React + Webpack + Babel = Awesome App</h1>
//     )
//   }
// }
import App from './containers/App';
ReactDOM.render(<App/>, document.getElementById('react-app'));
// serviceWorker.register();