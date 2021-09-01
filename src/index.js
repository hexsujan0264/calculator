import ReactDOM from 'react-dom';

import './index.css';
import Calculator from './Components/Calculator/Calculator.component';

const App = () => {
    return (
        <div className='app-wrapper'>
            <Calculator />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
