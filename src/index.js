import dva from 'dva';
import { createBrowserHistory } from 'history';
import message from 'antd/lib/message';
import Router from './router';
import '@babel/polyfill';
import './assets/css/common.less';
// 导入编辑器的样式
import './assets/css/md.css';

window.router = createBrowserHistory();

const app = dva({
  history: createBrowserHistory(),
  onError(e) {
    message.error(e.message, 3);
  },
});

// app.model(home)

app.router(Router);

app.start('#app');
