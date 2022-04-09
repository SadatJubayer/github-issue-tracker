import { Provider as ReduxProvider } from 'react-redux';
import { Router } from 'router';
import store from 'store';

const App = () => {
    return (
        <ReduxProvider store={store}>
            <div className="bg-background">
                <Router />
            </div>
        </ReduxProvider>
    );
};

export default App;
