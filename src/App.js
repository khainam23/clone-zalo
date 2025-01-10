import Header from './components/Header';
import Content from './components/Content';
import classNames from 'classnames/bind';
import styles from './App.module.scss';

const className = classNames.bind(styles);

function App() {
  return (
    <div className={className('app')}>
      <Header></Header>
      <Content className={className('content')}></Content>
    </div>
  );
}

export default App;
