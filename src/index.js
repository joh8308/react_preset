import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import './css/style.js';
import registerServiceWorker from './registerServiceWorker';
import App from './routes.js';

/* Component */
import Home from './routes/home';
import About from './routes/about';
import Contact from './routes/contact';
import RoadMap from './routes/roadMap';
import SovereignIntro from './routes/sovereignIntro';
import SovereignRegister from './routes/sovereignRegister';
import Team from './routes/team';
import FAQ from './routes/faq';
import NotFound from './routes/notFound';

const routes = (
  <Route component={App}>
    <Route path="about" component={About} />
    <Route path="contact" component={Contact} />
    <Route path="roadmap" component={RoadMap} />
    <Route path="sovereignintro" component={SovereignIntro} />
    <Route path="sovereignregister" component={SovereignRegister} />
    <Route path="team" component={Team} />
    <Route path="faq" component={FAQ} />
    <Route path="notfound" component={NotFound} />
  </Route>
);

ReactDOM.render(<Router history = {browserHistory}>
  <Route path = "/" component = {Home}>
    <IndexRoute component = {Home} />
    <Route path='/'>
      {routes}
    </Route>
  </Route>
</Router>, document.getElementById('root'));

registerServiceWorker();