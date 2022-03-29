import React from 'react';
import PropTypes from 'prop-types';
import { Switch, routerRedux, Route } from 'dva/router';
import dynamic from 'dva/dynamic';
import { ConfigProvider } from 'antd';
import 'moment/locale/zh-cn';
import locale from 'antd/lib/locale/zh_CN';

const { ConnectedRouter } = routerRedux;
const RouterWrapper = ({ history, app }) => {
  const Home = dynamic({
    app,
    component: () => import('./pages/Home'),
  });

  return (
    <ConnectedRouter history={history}>
      <ConfigProvider locale={locale}>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </ConfigProvider>
    </ConnectedRouter>
  );
};
RouterWrapper.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
};
RouterWrapper.defaultProps = {
  history: {},
  app: {},
};
export default RouterWrapper;
