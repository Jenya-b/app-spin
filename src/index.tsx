import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import 'utils/i18n';

import { App } from 'modules/components/App/App';
import { store } from 'store';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
