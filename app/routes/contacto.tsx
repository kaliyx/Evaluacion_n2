import type { Route } from "./+types/contacto";
import { Layout, Typography, Form, Input, Button, Space, Row, Col } from 'antd';
import { MailOutlined, GithubOutlined, LinkedinOutlined, WhatsAppOutlined } from '@ant-design/icons';
import AppHeader from '../../components/organisms/AppHeader';
import AppFooter from '../../components/organisms/AppFooter';
import { portfolio } from '../data/portfolio';
import { PortfolioStyles } from '../../components/layouts/home/styles';

const { Content } = Layout;
const { Title, Paragraph } = Typography;
const { TextArea } = Input;

export function meta({}: Route.MetaArgs) {
  return [
    { title: `Contacto - ${portfolio.name}` },
    { name: "description", content: "Contáctame para proyectos o consultas." },
  ];
}

export default function Contacto() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Form values:', values);
    // Aquí puedes integrar con un servicio de email o backend
    alert('Mensaje enviado (demo). Integra con tu backend.');
  };

  return (
    <Layout style={PortfolioStyles.layout}>
      <AppHeader />
      <Content style={{ paddingTop: 64 }}>
        <div style={{ ...PortfolioStyles.projectsSection, minHeight: '70vh' }}>
          <Title level={2} style={PortfolioStyles.sectionTitle}>Contáctame</Title>
          
          <Row justify="center">
            <Col xs={24} sm={20} md={16} lg={12}>
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                style={{ marginTop: '40px' }}
              >
                <Form.Item
                  label="Tu Nombre"
                  name="nombre"
                  rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}
                >
                  <Input placeholder="Nombre completo" size="large" />
                </Form.Item>

                <Form.Item
                  label="Tu Correo"
                  name="correo"
                  rules={[
                    { required: true, message: 'Por favor ingresa tu correo' },
                    { type: 'email', message: 'Ingresa un correo válido' }
                  ]}
                >
                  <Input placeholder="tu@correo.com" size="large" />
                </Form.Item>

                <Form.Item
                  label="Mensaje"
                  name="mensaje"
                  rules={[{ required: true, message: 'Por favor escribe un mensaje' }]}
                >
                  <TextArea rows={6} placeholder="Escribe tu mensaje aquí..." />
                </Form.Item>

                <Form.Item style={{ textAlign: 'right' }}>
                  <Button type="primary" htmlType="submit" size="large">
                    Enviar mensaje
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>

          <div style={{ textAlign: 'center', marginTop: '60px', paddingTop: '40px', borderTop: '1px solid #f0f0f0' }}>
            <Title level={4} style={{ marginBottom: '24px' }}>O contáctame por vía</Title>
            <Space size="large" wrap style={{ justifyContent: 'center' }}>
              <a 
                href="https://cl.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <LinkedinOutlined style={{ fontSize: '24px' }} /> LinkedIn
              </a>
              <a 
                href="https://github.com/kaliyx" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <GithubOutlined style={{ fontSize: '24px' }} /> GitHub
              </a>
              <a 
                href="https://wa.me/tunumero" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <WhatsAppOutlined style={{ fontSize: '24px' }} /> WhatsApp
              </a>
            </Space>
          </div>
        </div>
      </Content>
      <AppFooter />
    </Layout>
  );
}
