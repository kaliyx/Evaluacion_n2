import { Layout, Typography } from 'antd';
import { PortfolioStyles } from '../layouts/home/styles';
import { portfolio } from '../../app/data/portfolio';

const { Footer } = Layout;
const { Text } = Typography;

const AppFooter = () => (
  <Footer style={PortfolioStyles.footer}>
    <Text style={{ color: 'inherit' }}>
      Portafolio - {portfolio.name} ©{new Date().getFullYear()}
    </Text>
  </Footer>
);

export default AppFooter;