import type { Route } from "./+types/sobre-mi";
import { Layout, Typography, Space, Avatar, Row, Col, Card, Button } from 'antd';
import { MailOutlined, GithubOutlined, LinkedinOutlined, DownloadOutlined } from '@ant-design/icons';
import AppHeader from '../../components/organisms/AppHeader';
import AppFooter from '../../components/organisms/AppFooter';
import { portfolio } from '../data/portfolio';
import { PortfolioStyles } from '../../components/layouts/home/styles';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

export function meta({}: Route.MetaArgs) {
  return [
    { title: `Sobre Mi - ${portfolio.name}` },
    { name: "description", content: portfolio.bio },
  ];
}

export default function SobreMi() {
  return (
    <Layout style={PortfolioStyles.layout}>
      <AppHeader />
      <Content style={{ paddingTop: 64 }}>
        <div style={{ ...PortfolioStyles.heroSection, paddingTop: '80px', paddingBottom: '80px' }}>
          <Space direction="vertical" size={32} align="center" style={{ width: '100%', maxWidth: '900px', margin: '0 auto' }}>
            {portfolio.avatarUrl && (
              <Avatar size={150} src={portfolio.avatarUrl} alt={portfolio.name} />
            )}
            
            <div style={{ textAlign: 'center' }}>
              <Title level={2} style={{ marginBottom: 8 }}>{portfolio.name}</Title>
              <Space direction="vertical" size={8}>
                <Text type="secondary" style={{ fontSize: '18px' }}>{portfolio.role}</Text>
                <Button 
                  type="primary" 
                  icon={<DownloadOutlined />} 
                  href="/cv/CurriculumVitae.pdf" 
                  download="CurriculumVitae.pdf"
                  size="middle"
                >
                  Descargar Curriculum
                </Button>
              </Space>
            </div>

            <div style={{ width: '100%' }}>
              <Title level={3} style={{ marginTop: 32, marginBottom: 16 }}>Información Personal</Title>
              <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
                Tengo 19 años y vivo en Santiago, comuna de San Miguel. Estudio Ingeniería en Informática en Duoc UC, sede San Joaquín. Me apasiona el desarrollo de software y la tecnología en general, y busco seguir aprendiendo para crear soluciones innovadoras y útiles.
              </Paragraph>
            </div>

            <div style={{ width: '100%' }}>
              <Title level={3} style={{ marginTop: 32, marginBottom: 16 }}>Formación y Certificaciones</Title>
              <Card>
                <Paragraph>
                  <strong>Técnico de Nivel Medio en Contabilidad</strong>
                </Paragraph>
                <Paragraph>
                  <strong>Ingeniería en Informática</strong> - DuocUC San Joaquín (En curso)
                </Paragraph>
                <Paragraph>
                  <strong>Fundamento en Python 1</strong> {' - '}
                  <Button
                    type="link"
                    icon={<DownloadOutlined />}
                    href="/cv/Python_Essentials_1_certificate_isra-poblete-duocuc-cl_b6f23125-4f34-44cf-bb28-b3f44e99d3a1.pdf"
                    download
                    size="small"
                  >
                    Descargar Certificado
                  </Button>
                </Paragraph>
              </Card>
            </div>

            <div style={{ width: '100%' }}>
              <Title level={3} style={{ marginTop: 32, marginBottom: 16 }}>Experiencia Laboral</Title>
              <Row gutter={[16, 16]}>
                {portfolio.workExperience.map((exp) => (
                  <Col key={exp.title} xs={24} md={12}>
                    <Card title={exp.title}>
                      <Paragraph>{exp.description}</Paragraph>
                      <Space wrap>
                        {exp.tags.map((tag: string) => (
                          <Text key={tag} type="secondary">{tag}</Text>
                        ))}
                      </Space>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>

            <div style={{ width: '100%' }}>
              <Title level={3} style={{ marginTop: 32, marginBottom: 16 }}>Contacto Profesional</Title>
              <Space size="large" wrap style={{ justifyContent: 'center' }}>
                {portfolio.socials.map((social) => {
                  const icon = social.icon === 'github' ? <GithubOutlined /> :
                               social.icon === 'mail' ? <MailOutlined /> :
                               social.icon === 'linkedin' ? <LinkedinOutlined /> : null;
                  return (
                    <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: '16px' }}>
                      {icon} {social.label}
                    </a>
                  );
                })}
              </Space>
            </div>
          </Space>
        </div>
      </Content>
      <AppFooter />
    </Layout>
  );
}
