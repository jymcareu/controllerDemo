import dva from 'dva';
import './index.css';
import createLoading from 'dva-loading';

// 1. Initialize
const app = dva();

// 2. Pluginsss
app.use(createLoading({namespace: 'loading', effects: true}));

// 3. Model
// app.model(require('./models/community'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');


