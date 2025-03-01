import Header from './container/Header';
import Content from './container/Content';
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
