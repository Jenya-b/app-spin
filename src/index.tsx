import { createRoot } from 'react-dom/client';
import 'utils/i18n';

import { App } from './modules/components';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);
