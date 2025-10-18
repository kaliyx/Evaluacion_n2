import { Typography, Space, Avatar, Row, Col, Card, Tag, Divider, Tooltip, Dropdown, Button, Collapse } from 'antd';
import { MessageOutlined, TeamOutlined, SearchOutlined, CalendarOutlined, SyncOutlined, BulbOutlined, SafetyCertificateOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { GithubOutlined, LinkedinOutlined, GlobalOutlined, MailOutlined, TwitterOutlined } from '@ant-design/icons';
import SocialIconLink from '../atoms/SocialIconLink';
import { PortfolioStyles } from '../layouts/home/styles';
import { portfolio } from '../../app/data/portfolio';

const { Title, Paragraph, Text } = Typography;



const habilidades = [
  {
    categoria: 'Lenguajes',
    color: '#636363ff',
    items: ['HTML', 'CSS', 'JavaScript', 'Python', 'SQL', 'Kotlin'],
  },
  {
    categoria: 'IDE',
    color: '#636363ff',
    items: ['Visual Studio Code', 'IntelliJ IDEA', 'NetBeans', 'Android Studio', ],
  },
  {
    categoria: 'Control de versiones',
    color: '#636363ff',
    items: ['Git', 'GitHub'],
  },
  {
    categoria: 'Bases de datos',
    color: '#636363ff',
    items: ['MySQL', 'Oracle SQL Developer'],
  },
  {
    categoria: 'Desarrollo web',
    color: '#636363ff',
    items: ['NodeJS', 'Spring Boot'],
  },
];

const HeroSection = () => (
  <div id="inicio" style={PortfolioStyles.heroSection}>
    <Row gutter={[32, 32]} justify="center" align="middle">
      <Col xs={24} md={16}>
        <Space direction="vertical" size={24} align="center" style={{ width: '100%' }}>
          {portfolio.avatarUrl && (
            <Avatar size={120} src={portfolio.avatarUrl} alt={portfolio.name} />
          )}
          <div>
            <Title level={2} style={{ marginBottom: 0 }}>{portfolio.name}</Title>
            <Text type="secondary">{portfolio.role}</Text>
          </div>
          <Paragraph style={{ maxWidth: 720, margin: '0 auto' }}>{portfolio.bio}</Paragraph>
          <Space size="middle">
            {portfolio.socials.filter(s => s.icon !== 'mail').map((s) => {
              const icon =
                s.icon === 'github' ? <GithubOutlined /> :
                s.icon === 'linkedin' ? <LinkedinOutlined /> :
                s.icon === 'twitter' ? <TwitterOutlined /> :
                s.icon === 'web' ? <GlobalOutlined /> : undefined;
              return (
                <SocialIconLink key={s.label} href={s.href} icon={icon} aria-label={s.label} />
              );
            })}
            {/* Botón de correo como dropdown */}
            <Dropdown
              placement="bottom"
              arrow
              overlay={
                <Card style={{ minWidth: 220, textAlign: 'center', marginTop: 8 }} bodyStyle={{ padding: 16 }}>
                  <div style={{ fontWeight: 500, fontSize: 16, marginBottom: 8 }}>israel.poblete2019@gmail.com</div>
                  <div style={{ fontWeight: 500, fontSize: 16 }}>isra.poblete@duocuc.cl</div>
                </Card>
              }
            >
              <Button type="text" shape="circle" icon={<MailOutlined />} size="large" />
            </Dropdown>
          </Space>
        </Space>
      </Col>
      <Col xs={24} md={8} style={{ display: 'flex', justifyContent: 'flex-start' }}>
  <Card bordered style={{ minHeight: 260, boxShadow: '0 2px 8px #f0f1f2', borderRadius: 12, marginLeft: 16, width: 320 }}>
          <Divider orientation="center" style={{ fontWeight: 600, fontSize: 18, marginBottom: 24 }}>Habilidades</Divider>
          <Collapse
            accordion
            style={{ background: 'transparent' }}
            items={habilidades.map(grupo => ({
              key: grupo.categoria,
              label: <span style={{ color: grupo.color, fontWeight: 600, fontSize: 16 }}>{grupo.categoria}</span>,
              children: (
                <ul style={{ margin: '8px 0 0 16px', padding: 0 }}>
                  {grupo.items.map(item => (
                    <li key={item} style={{ fontSize: 15, lineHeight: '1.7', color: grupo.color }}>{item}</li>
                  ))}
                </ul>
              ),
              style: { background: grupo.color + '22', borderRadius: 8, marginBottom: 8 }
            }))}
          />
        </Card>
      </Col>
    </Row>
  </div>
);

export default HeroSection;