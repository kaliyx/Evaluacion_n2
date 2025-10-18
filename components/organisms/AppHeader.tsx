import { Layout, Menu } from 'antd';
import { Link } from 'react-router';
import { PortfolioStyles } from '../layouts/home/styles';
import { portfolio } from '../../app/data/portfolio';

const { Header } = Layout;

const AppHeader = () => (
  <Header style={PortfolioStyles.header}>
    <Menu
      mode="horizontal"
      selectable={false}
      items={portfolio.nav.map((item) => ({ 
        key: item.key, 
        label: <Link to={item.href}>{item.label}</Link> 
      }))}
    />
  </Header>
);

export default AppHeader;