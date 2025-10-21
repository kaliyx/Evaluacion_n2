import { Typography, Row, Col } from 'antd';
import ProjectCard from '../molecules/ProjectCard';
import { portfolio } from '../../app/data/portfolio';
import { PortfolioStyles } from '../layouts/home/styles';

const { Title } = Typography;

// Datos desde módulo de portafolio
const projectsData = portfolio.projects;

const ProjectsSection = () => (
  <div id="proyectos" style={PortfolioStyles.projectsSection}>
    <Title level={2} style={PortfolioStyles.sectionTitle}>Experiencia Laboral</Title>
    <Row gutter={[32, 32]} justify="center">
      {projectsData.map((project) => (
        <Col key={project.title} xs={24} sm={24} md={12} lg={8}>
          <ProjectCard {...project} />
        </Col>
      ))}
    </Row>
  </div>
);

export default ProjectsSection;