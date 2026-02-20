import React, { useState, useEffect } from 'react';
import { Layout, Card, Form, Input, Button, List, Spin, Row, Col } from 'antd';
import { DeleteOutlined, SendOutlined, SearchOutlined } from '@ant-design/icons';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { Header, Content } = Layout;

const PostForm = ({ onAdd, loading }) => {
  const [form] = Form.useForm();
  return (
    <Card title="Создать пост" bordered={false}>
      <Form form={form} onFinish={(values) => onAdd(values, () => form.resetFields())} layout="vertical">
        <Form.Item name="title" rules={[{ required: true, message: 'Заполните поле' }]}>
          <Input placeholder="Заголовок" disabled={loading} />
        </Form.Item>
        <Form.Item name="body" rules={[{ required: true, message: 'Заполните поле' }]}>
          <Input.TextArea rows={4} placeholder="Текст поста" disabled={loading} />
        </Form.Item>
        <Button type="primary" htmlType="submit" icon={<SendOutlined />} loading={loading} block>
          Отправить
        </Button>
      </Form>
    </Card>
  );
};

const PostList = ({ posts, loading, onSearch, onDelete }) => (
  <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <Input 
      placeholder="Поиск..." 
      prefix={<SearchOutlined />}
      onChange={e => onSearch(e.target.value)} 
      style={{ marginBottom: '20px' }} 
      allowClear
    />
    <div style={{ flex: 1, overflowY: 'auto', paddingRight: '10px' }}>
      {loading ? <Spin size="large" style={{ display: 'block', marginTop: '50px' }} /> : (
        <List
          dataSource={posts}
          renderItem={item => (
            <Card 
              size="small" 
              title={item.title} 
              style={{ marginBottom: '16px' }}
              extra={<Button type="link" danger icon={<DeleteOutlined />} onClick={() => onDelete(item.id)} />}
            >
              {item.body}
            </Card>
          )}
        />
      )}
    </div>
  </div>
);

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setLoading(true);
    axios.get('https://dummyjson.com/posts')
      .then(res => setPosts(res.data.posts))
      .catch(err => {
        console.error(err);
        toast.error('Ошибка загрузки');
      })
      .finally(() => setLoading(false));
  }, []);

  const handleAddPost = async (values, callback) => {
    setSubmitting(true);
    try {
      const res = await axios.post('https://dummyjson.com/posts/add', { ...values, userId: 1 });
      setPosts([res.data, ...posts]);
      toast.success('Пост добавлен!');
      callback();
    } catch (err) {
      console.error(err);
      toast.error('Ошибка при отправке');
    } finally {
      setSubmitting(false);
    }
  };

  const filtered = posts.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Layout style={{ height: '100vh', overflow: 'hidden' }}>
      <Header style={{ color: 'white', textAlign: 'center' }}>Post Dashboard</Header>
      <Content style={{ padding: '24px', height: 'calc(100vh - 64px)' }}>
        <Row gutter={24} style={{ height: '100%' }}>
          <Col xs={24} md={8}>
            <PostForm onAdd={handleAddPost} loading={submitting} />
          </Col>
          <Col xs={24} md={16} style={{ height: '100%' }}>
            <PostList 
              posts={filtered} 
              loading={loading} 
              onSearch={setSearchTerm} 
              onDelete={(id) => {
                setPosts(prev => prev.filter(p => p.id !== id));
                toast.info('Пост удален');
              }} 
            />
          </Col>
        </Row>
      </Content>
      <ToastContainer position="bottom-right" theme="colored" />
    </Layout>
  );
}