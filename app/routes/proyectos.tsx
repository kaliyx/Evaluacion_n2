import type { Route } from "./+types/proyectos";
import { Layout, Typography, Row, Col } from 'antd';
import AppHeader from '../../components/organisms/AppHeader';
import AppFooter from '../../components/organisms/AppFooter';
import ProjectCard from '../../components/molecules/ProjectCard';
import { portfolio } from '../data/portfolio';
import { PortfolioStyles } from '../../components/layouts/home/styles';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

export function meta({}: Route.MetaArgs) {
  return [
    { title: `Proyectos - ${portfolio.name}` },
    { name: "description", content: "Una colección de mis trabajos más recientes." },
  ];
}

export default function Proyectos() {
  return (
    <Layout style={PortfolioStyles.layout}>
      <AppHeader />
      <Content style={{ paddingTop: 64 }}>
        <div style={PortfolioStyles.projectsSection}>
          <Title level={2} style={PortfolioStyles.sectionTitle}>Mis Proyectos</Title>
          <Paragraph style={{ textAlign: 'center', fontSize: '16px', maxWidth: '800px', margin: '0 auto 48px' }}>
            Una colección de mis trabajos más recientes. Haz clic en cualquiera de ellos para ver más detalles.
          </Paragraph>
          <Row gutter={[32, 32]} justify="center">
            {portfolio.projects.map((project) => (
              <Col key={project.title} xs={24} sm={24} md={12} lg={8}>
                <ProjectCard {...project} />
              </Col>
            ))}
          </Row>
        </div>
      </Content>
      <AppFooter />
    </Layout>
  );
}
