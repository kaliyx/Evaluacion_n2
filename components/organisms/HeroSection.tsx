import { Typography, Space, Avatar } from 'antd';
import SocialIconLink from '../atoms/SocialIconLink';
import { PortfolioStyles } from '../layouts/home/styles';
import { portfolio } from '../../app/data/portfolio';

const { Title, Paragraph, Text } = Typography;

const HeroSection = () => (
  <div id="inicio" style={PortfolioStyles.heroSection}>
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
        {portfolio.socials.map((s) => (
          <SocialIconLink key={s.label} href={s.href} icon={undefined} aria-label={s.label} />
        ))}
      </Space>
    </Space>
  </div>
);

export default HeroSection;