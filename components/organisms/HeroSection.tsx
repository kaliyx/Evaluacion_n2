import { Typography, Space, Avatar, Row, Col, Card, Tag, Divider, Tooltip, Dropdown, Button } from 'antd';
import { MessageOutlined, TeamOutlined, SearchOutlined, CalendarOutlined, SyncOutlined, BulbOutlined, SafetyCertificateOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { GithubOutlined, LinkedinOutlined, GlobalOutlined, MailOutlined, TwitterOutlined } from '@ant-design/icons';
import SocialIconLink from '../atoms/SocialIconLink';
import { PortfolioStyles } from '../layouts/home/styles';
import { portfolio } from '../../app/data/portfolio';

const { Title, Paragraph, Text } = Typography;



const skills = [
  { label: 'Comunicación', icon: <MessageOutlined />, color: 'geekblue' },
  { label: 'Colaboración', icon: <TeamOutlined />, color: 'cyan' },
  { label: 'Análisis', icon: <SearchOutlined />, color: 'purple' },
  { label: 'Organización', icon: <CalendarOutlined />, color: 'magenta' },
  { label: 'Adaptabilidad', icon: <SyncOutlined />, color: 'gold' },
  { label: 'Creatividad', icon: <BulbOutlined />, color: 'lime' },
  { label: 'Responsabilidad', icon: <SafetyCertificateOutlined />, color: 'volcano' },
  { label: 'Proactividad', icon: <ThunderboltOutlined />, color: 'orange' },
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
      <Col xs={24} md={8}>
        <Card bordered style={{ minHeight: 260, boxShadow: '0 2px 8px #f0f1f2', borderRadius: 12 }}>
          <Divider orientation="center" style={{ fontWeight: 600, fontSize: 18, marginBottom: 24 }}>Skills</Divider>
          <div style={{ width: '100%', textAlign: 'center', paddingBottom: 8 }}>
            <Space
              direction="horizontal"
              size={16}
              style={{ justifyContent: 'center', flexWrap: 'wrap', width: '100%' }}
              className="skills-list"
            >
              {[...new Map(skills.map(s => [s.icon.type.displayName || s.icon.type.name, s])).values()].map(skill => (
                <Tag
                  key={skill.label}
                  color={skill.color}
                  style={{ fontSize: 16, padding: '6px 18px', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}
                  icon={skill.icon}
                >
                  {skill.label}
                </Tag>
              ))}
            </Space>
          </div>
        </Card>
      </Col>
    </Row>
  </div>
);

export default HeroSection;