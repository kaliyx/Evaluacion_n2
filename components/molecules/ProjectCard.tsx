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

  return (
    <Card
      hoverable
  cover={<img alt={title} src={imageUrl} style={{ height: 200, objectFit: 'cover' }} />}
      onClick={(e) => {
        if (!repoUrl) return;
        try {
          const target = e.target as HTMLElement | null;
          // If the click originated on an interactive element (a or button), don't handle here
          if (target && target.closest && target.closest('a,button')) return;
        } catch (_) {}
        window.open(repoUrl, '_blank', 'noopener noreferrer');
      }}
      style={repoUrl ? { cursor: 'pointer' } : undefined}
      role={repoUrl ? 'link' : undefined}
      tabIndex={repoUrl ? 0 : undefined}
      onKeyDown={(e) => {
        if (!repoUrl) return;
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          window.open(repoUrl, '_blank', 'noopener noreferrer');
        }
      }}
    >
      <Card.Meta title={title} description={description} />
      <div style={{ marginTop: '16px' }}>
        <Space wrap>
          {tags.map((tag) => <Tag key={tag} color="blue">{tag}</Tag>)}
        </Space>
        {/* Botón específico para abrir el repositorio del proyecto (p. ej. HUERTOHOGAR) */}
        {repoUrl && (
          <div style={{ marginTop: 12 }}>
            <Button
              type="primary"
              onClick={(e) => { e.stopPropagation(); window.open(repoUrl, '_blank', 'noopener noreferrer'); }}
              icon={<GithubOutlined />}
            >
              Ver proyecto
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;