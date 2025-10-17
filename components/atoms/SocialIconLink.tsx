import React from 'react';
import { Button } from 'antd';
import type { ButtonProps } from 'antd';

interface SocialIconLinkProps extends ButtonProps {
  href: string;
  icon: React.ReactNode;
}

const SocialIconLink: React.FC<SocialIconLinkProps> = ({ href, icon, ...props }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Button type="text" shape="circle" icon={icon} size="large" {...props} />
    </a>
  );
};

export default SocialIconLink;