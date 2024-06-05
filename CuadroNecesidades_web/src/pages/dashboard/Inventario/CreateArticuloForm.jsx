import React, { useState } from 'react';
import { Form, Input, Button, message, Layout } from 'antd';
import axios from 'axios';
import { SERVER_HOST } from '../../../../serverHost';

function CreateArticuloForm() {
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        try {
            await axios.post(`${SERVER_HOST}/api/articulos/articulos`, values);
            message.success('Artículo creado exitosamente');
        } catch (error) {
            console.error('Error al crear el artículo:', error.message);
            message.error('Error al crear el artículo');
        }
        setLoading(false);
    };

    const onFinishFailed = (errorInfo) => {
        console.error('Failed:', errorInfo);
    };

    const { Content, Header } = Layout;


    return (
        <Layout className="flex-1 flex h-full bg-white ">
            <div
                className="p-2.5  w-full bg-white"
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Header className=" w-full bg-cbtisbrow shadow-md rounded-2xl backdrop:blur-xl backdrop-filter bg-opacity-95">
                    <div>
                        <span className="text-white text-2xl font-bold">Agregar un articulo al inventario </span>
                    </div>
                </Header>
            </div>

            <div className='p-8'>

                <Form
                    name="createArticuloForm"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical"
                >
                    <Form.Item
                        label="Nombre del artículo"
                        name="nombre_articulo"
                        rules={[{ required: true, message: 'Por favor ingresa el nombre del artículo' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Descripción del artículo"
                        name="descripcion_articulo"
                        rules={[{ required: true, message: 'Por favor ingresa la descripción del artículo' }]}
                    >
                        <Input.TextArea />
                    </Form.Item>

                    <Form.Item
                        label="Precio Unitario"
                        name="precioUnitario"
                        rules={[{ required: true, message: 'Por favor ingresa el precio unitario del artículo' }]}
                    >
                        <Input type="number" step="0.01" />
                    </Form.Item>

                    <Form.Item
                        label="Unidad de medida"
                        name="unidadMedida"
                        rules={[{ required: true, message: 'Por favor ingresa la unidad de medida del artículo' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={loading}>
                            Crear Artículo
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </Layout>
    );
}

export default CreateArticuloForm;
