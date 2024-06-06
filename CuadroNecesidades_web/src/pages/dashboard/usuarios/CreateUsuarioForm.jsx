import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';
import { SERVER_HOST } from '../../../../serverHost';

const CreateUsuarioForm = ({ initialValues }) => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        ...initialValues, // Establecer los valores iniciales del usuario si se proporcionan
    });

    useEffect(() => {
        if (initialValues) {
            setFormData(initialValues);
        }
    }, [initialValues]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const response = await axios.post(`${SERVER_HOST}/api/auth/registerFirebase`, formData);
            console.log('Usuario registrado en MongoDB:', response.data);
            message.success('Usuario registrado exitosamente');
            // Lógica adicional después de registrar el usuario...
        } catch (error) {
            console.error('Error registrando usuario en MongoDB:', error);
            message.error('Error al registrar usuario');
        }
        setLoading(false);
    };

    return (
        <Form
            onFinish={handleSubmit}
            layout="vertical"
            initialValues={formData}
        >
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Por favor ingresa tu email' }]}
            >
                <Input onChange={handleChange} />
            </Form.Item>
            <Form.Item
                label="Nombre de usuario"
                name="username"
                rules={[{ required: true, message: 'Por favor ingresa tu nombre de usuario' }]}
            >
                <Input onChange={handleChange} />
            </Form.Item>
            <Form.Item
                label="Contraseña"
                name="password"
                rules={[{ required: true, message: 'Por favor ingresa tu contraseña' }]}
            >
                <Input.Password onChange={handleChange} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                    Registrarse
                </Button>
            </Form.Item>
        </Form>
    );
};

export default CreateUsuarioForm;
