import { Provider } from 'react-redux';
import { store } from '../state';
import ResultsList from './ResultsList';


const App = () => {
    return <Provider store={store}>
        <div>
            <h4 className="center-align">Translate from English to Braille</h4>

            <ResultsList />

        </div>
        </Provider>
}

export default App;