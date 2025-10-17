import { Layout, Typography } from 'antd';
import { PortfolioStyles } from '../layouts/home/styles';

const { Footer } = Layout;
const { Text } = Typography;

const AppFooter = () => (
  <Footer style={PortfolioStyles.footer}>
    <Text style={{ color: 'inherit' }}>
      Diseñado por [Tu Nombre] ©{new Date().getFullYear()}
    </Text>
  </Footer>
);

export default AppFooter;