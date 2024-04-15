import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Home from './pages/Home';
import Historia from './pages/Historia';
import MapaAlbergues from './pages/MapaAlbergues';
import MedidasPreventivas from './pages/MedidasPreventivas';
import Miembros from './pages/Miembros';
import QuieroVoluntario from './pages/QuieroVoluntario';
import Videos from './pages/Videos';
import Albergues from './pages/Albergues';
import Noticias from './pages/Noticias';
import Servicios from './pages/Servicios';
import Noticia from './pages/subpages/Noticia';
import Medida from './pages/subpages/Medida';
import Albergue from './pages/subpages/Albergue';
import Acercade from './pages/Acercade';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Home />
            </Route>
            <Route path="/Historia" exact={true}>
              <Historia />
            </Route>
            <Route path="/Servicios" exact={true}>
              <Servicios />
            </Route>
            <Route path="/Noticias" exact={true}>
              <Noticias />
            </Route>
            <Route path="/Noticias/noticia" exact={true}>
              <Noticia />
            </Route>
            <Route path="/Videos" exact={true}>
              <Videos />
            </Route>
            <Route path="/Albergues" exact={true}>
              <Albergues />
            </Route>
            <Route path="/Albergues/Albergue" exact={true}>
              <Albergue />
            </Route>
            <Route path="/Mapa" exact={true}>
              <MapaAlbergues />
            </Route>
            <Route path="/Medidas" exact={true}>
              <MedidasPreventivas />
            </Route>
            <Route path="/Medidas/Medida" exact={true}>
              <Medida />
            </Route>
            <Route path="/Miembros" exact={true}>
              <Miembros />
            </Route>
            <Route path="/Voluntario" exact={true}>
              <QuieroVoluntario />
            </Route>
            <Route path="/Acercade" exact={true}>
              <Acercade />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
