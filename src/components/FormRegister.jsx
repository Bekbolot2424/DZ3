import React from "react";
import { Form, Input, Button, Card } from "antd";

export const FormRegister = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div className="flex justify-center items-center">
      <Card 
        title="Регистрация" 
        className="w-[400px] rounded-xl">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}>
          <Form.Item
            label="Имя"
            name="name"
            rules={[
              { required: true, message: "Введите имя" }
            ]}
          >
            <Input placeholder="Введите имя" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Введите email" },
              { type: "email", message: "Введите корректный email" }
            ]}
          >
            <Input placeholder="Введите email" />
          </Form.Item>

          <Form.Item
            label="Пароль"
            name="password"
            rules={[
              { required: true, message: "Введите пароль" },
              { min: 6, message: "Минимум 6 символов" }
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Введите пароль" />
          </Form.Item>
          <Form.Item
            label="Подтверждение пароля"
            name="confirmPassword"
            dependencies={["password"]}
            hasFeedback
            rules={[
              { required: true, message: "Подтвердите пароль" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Пароли не совпадают")
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="Повторите пароль" />
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              block
              style={{ borderRadius: 8 }}
            >
              Зарегистрироваться
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};


