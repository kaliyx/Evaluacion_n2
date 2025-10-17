import { Layout, Menu } from 'antd';
import { PortfolioStyles } from '../layouts/home/styles';
import { portfolio } from '../../app/data/portfolio';

const { Header } = Layout;

const AppHeader = () => (
  <Header style={PortfolioStyles.header}>
    <Menu
      mode="horizontal"
      selectable={false}
      items={portfolio.nav.map((item) => ({ key: item.key, label: <a href={item.href}>{item.label}</a> }))}
    />
  </Header>
);

export default AppHeader;