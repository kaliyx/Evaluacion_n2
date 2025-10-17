import { Layout, Typography } from 'antd';
import AppHeader from '../../organisms/AppHeader';
import HeroSection from '../../organisms/HeroSection';
import ProjectsSection from '../../organisms/ProjectsSection';
import AppFooter from '../../organisms/AppFooter';
import { PortfolioStyles } from './styles';

const { Content } = Layout;
const { Title } = Typography;
// ... (projectsData se mantiene igual)

const HomeLayout = () => {
  return (
    <Layout style={PortfolioStyles.layout}>
      <AppHeader />
      <Content style={{ paddingTop: 64 }}>
        <HeroSection />
        <ProjectsSection />
      </Content>
      <AppFooter />
    </Layout>
  );
};

export default HomeLayout;