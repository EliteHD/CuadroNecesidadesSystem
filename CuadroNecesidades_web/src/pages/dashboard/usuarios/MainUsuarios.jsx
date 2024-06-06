import React, { useState, useEffect } from 'react';
import { Layout, Table, Row, Col, Space, message, Modal } from 'antd';
import axios from 'axios';
import { SERVER_HOST } from '../../../../serverHost';
import CreateUsuarioForm from './CreateUsuarioForm'; // Importar el formulario de usuario

function MainUsuarios() {
    const { Content, Header } = Layout;
    const [usuarios, setUsuarios] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);
    
    useEffect(() => {
        obtenerUsuarios();
    }, []);

    const obtenerUsuarios = async () => {
        try {
            const response = await axios.get(`${SERVER_HOST}/api/auth/getAllUsers`);
            if (response.data) {
                setUsuarios(response.data);
            }
        } catch (error) {
            console.error('Error al obtener los usuarios:', error.message);
            message.error('Error al obtener los usuarios');
        }
    };

    const handleEdit = (id) => {
        setSelectedUserId(id);
        setModalVisible(true);
    };

    const handleDelete = async (id) => {
        try {
            // Lógica para eliminar usuario
        } catch (error) {
            console.error('Error al eliminar el usuario:', error.message);
            message.error('Error al eliminar el usuario');
        }
    };

    const handleSubmitUsuarioForm = async (values) => {
        if (selectedUserId) {
            // Lógica para editar usuario
        } else {
            // Lógica para crear usuario
        }
    };

    const handleCancel = () => {
        setSelectedUserId(null);
        setModalVisible(false);
    };

    return (
        <Layout className="flex-1 flex h-full bg-white">
            <div className="p-2.5 w-full bg-white"
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}>
                <Header className="w-full bg-cbtisbrow shadow-md rounded-2xl backdrop:blur-xl backdrop-filter bg-opacity-95">
                    <div>
                        <span className="text-white text-2xl font-bold">Usuarios registrados</span>
                    </div>
                </Header>
            </div>
            <Content className="bg-white h-full w-full flex flex-col items-center  px-8 py-4 space-y-8 overflow-auto">
                <Row className='w-full'>
                    <Col span={24}>
                        <label className="text-lg mb-6 font-bold">Cuadro de Necesidades</label>
                        <Table
                            columns={[
                                {
                                    title: 'ID',
                                    dataIndex: 'id',
                                    key: 'id',
                                },
                                {
                                    title: 'Email',
                                    dataIndex: 'email',
                                    key: 'email',
                                },
                                {
                                    title: 'username',
                                    dataIndex: 'username',
                                    key: 'username',
                                },
                                {
                                    title: 'Acciones',
                                    key: 'acciones',
                                    render: (text, record) => (
                                        <Space size="middle">
                                            <a onClick={() => handleEdit(record.id)} className='bg-yellow-400 p-2 rounded-xl shadow-xl'>Editar</a>
                                            <a onClick={() => handleDelete(record.id)} className='bg-red-400 text-white p-2 rounded-xl shadow-xl'>Eliminar</a>
                                        </Space>
                                    ),
                                }
                            ]}
                            dataSource={usuarios}
                        />
                    </Col>
                </Row>
                <Modal
                    title={selectedUserId ? 'Editar Usuario' : 'Agregar Usuario'}
                    visible={modalVisible}
                    onCancel={handleCancel}
                    footer={null}
                >
                    <CreateUsuarioForm
                        initialValues={selectedUserId ? usuarios.find(user => user.id === selectedUserId) : null}
                        onSubmit={handleSubmitUsuarioForm}
                    />
                </Modal>
            </Content>
        </Layout>
    );
}

export default MainUsuarios;
