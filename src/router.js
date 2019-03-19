import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import IndexPage from './routes/IndexPage/index';
import FactorySafe from './routes/IndexPage/FactorySafe/index';
import EquipmentSafe from './routes/IndexPage/EquipmentSafe/index';
import RealPosition from './routes/IndexPage/RealPosition/index';
import EleControl from './routes/IndexPage/EleControl/index';
import SafeWarn from './routes/IndexPage/SafeWarn/index';
import ProductionSafe from './routes/IndexPage/ProductionSafe/index';

import SystemPage from './routes/SystemPage/index';
import MonitorWarn from './routes/SystemPage/MonitorWarn/index';
import Cockpit from "./routes/cockpit/Cockpit";
import mainPage from "./routes/mainPage/MainPage";

const RouterConfig = ({history}) => (
  <Router history={history}>
    <Switch>
      <Route path="/system" component={SystemPage} history={history}>
        {/* <Route path="/system/monitorWarn" exact component={MonitorWarn} />    */}
      </Route>
      <Route path="/index" component={IndexPage} history={history}>
        {/* <Route path="/index/factorySafe" exact component={FactorySafe} />
          <Route path="/index/equipmentSafe" exact component={EquipmentSafe} />
          <Route path="/index/realPosition" exact component={RealPosition} />
          <Route path="/index/eleControl" exact component={EleControl} />
          <Route path="/index/safeWarn" exact component={SafeWarn} />
          <Route path="/index/productionSafe" exact component={ProductionSafe} /> */}
      </Route>
      <Route path="/cockpit" component={Cockpit} history={history}> </Route>
      <Route path="/mainPage" component={mainPage} history={history}> </Route>
    </Switch>
  </Router>

);

export default RouterConfig;
