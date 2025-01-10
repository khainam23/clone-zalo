import Header from './components/Header';
import Content from './components/Content';
import classNames from 'classnames/bind';
import styles from './App.module.scss';

const cx = classNames.bind(styles);

function App() {
  return (
    <div className={cx('app')}>
      <Header></Header>
      <Content className={cx('content')}></Content>
    </div>
  );
}

export default App;
