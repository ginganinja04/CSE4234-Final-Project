import { createUseStyles } from 'react-jss';
import style from './Style';
import Header from './Header';

function App() {
  const classes = createUseStyles(style)();
    return (
        <div className={classes.mainBody}>
            <Header/>
            <h1>Hello world!</h1>
        </div>
    );
}

export default App;