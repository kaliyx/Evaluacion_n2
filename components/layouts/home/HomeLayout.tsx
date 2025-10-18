import { Layout, Typography, Row, Col } from 'antd';
import ProjectCard from '../../molecules/ProjectCard';
import { portfolio } from '../../../app/data/portfolio';
import AppHeader from '../../organisms/AppHeader';
import HeroSection from '../../organisms/HeroSection';
import AppFooter from '../../organisms/AppFooter';
import { PortfolioStyles } from './styles';

const { Content } = Layout;

const HomeLayout = () => {
  return (
    <Layout style={PortfolioStyles.layout}>
      <AppHeader />
      <Content style={{ paddingTop: 64 }}>
        <HeroSection />
        <div style={{ ...PortfolioStyles.projectsSection, marginTop: 32 }}>
          <Typography.Title level={2} style={PortfolioStyles.sectionTitle}>Proyectos Destacados</Typography.Title>
          <Row gutter={[32, 32]} justify="center">
            {portfolio.projects.slice(0, 3).map((project) => (
              <Col key={project.title} xs={24} sm={12} md={8}>
                <ProjectCard {...project} />
              </Col>
            ))}
          </Row>
        </div>
      </Content>
      <AppFooter />
    </Layout>
  );
};

export default HomeLayout;