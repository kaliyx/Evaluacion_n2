import { Card, Tag, Button, Space } from 'antd';
import { GithubOutlined, LinkOutlined } from '@ant-design/icons';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  imageUrl,
  liveUrl,
  repoUrl,
}) => {
  const actions = [];
  if (liveUrl) {
    actions.push(
      <a href={liveUrl} target="_blank" rel="noopener noreferrer">
        <Button type="text" icon={<LinkOutlined />}>Demo</Button>
      </a>
    );
  }
  if (repoUrl) {
    actions.push(
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">
        <Button type="text" icon={<GithubOutlined />}>Código</Button>
      </a>
    );
  }

  return (
    <Card
      hoverable
      cover={<img alt={title} src={imageUrl} style={{ height: 200, objectFit: 'cover' }} />}
      actions={actions}
    >
      <Card.Meta title={title} description={description} />
      <div style={{ marginTop: '16px' }}>
        <Space wrap>
          {tags.map((tag) => <Tag key={tag} color="blue">{tag}</Tag>)}
        </Space>
      </div>
    </Card>
  );
};

export default ProjectCard;