import React, { useState, useEffect } from 'react';
import { Layout, Table, Pagination, Dropdown, Col, Row, Form, DatePicker } from 'antd';
import bannerCbtis from '@assets/images/logos/bannercbtis.png';
import { Select, Space } from 'antd';
import FormItemLabel from 'antd/es/form/FormItemLabel';
import axios from 'axios'; // Importa axios
import { SERVER_HOST } from '../../../../serverHost';
import { Link } from 'react-router-dom';

function MainInventario() {
    const { Content, Header } = Layout;
    const [articulos, setArticulos] = useState([]);

    useEffect(() => {
        obtenerArticulos();
    }, []);

    const obtenerArticulos = async () => {
        try {
            const response = await axios.get(`${SERVER_HOST}/api/articulos/articulos`);
            if (response.data) {
                setArticulos(response.data);
            }
        } catch (error) {
            console.error('Error al obtener los artículos:', error.message);
        }
    };

    const redirectToCreateArticuloForm = () => {
        history.push('/AddArticulo'); // Reemplaza con la ruta real de tu formulario de creación de artículo
    };

    return (
        <Layout className="flex-1 flex h-full bg-white">
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
                        <span className="text-white text-2xl font-bold">Proyección semestral de necesidades</span>
                    </div>
                </Header>



            </div>
            <div className="flex justify-end w-full p-4">
                <Link to='/Dashboard/addArticulo' className="bg-cbtisbrow text-white px-4 py-2 rounded-md" >
                    Agregar Articulo
                </Link>
            </div>


            <Content className="bg-white h-full w-full flex flex-col items-center  px-8 py-4 space-y-8 overflow-auto">
                <Row
                    gutter={[16, 16]}
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 12 }}
                    lg={{ span: 12 }}
                    xl={{ span: 12 }}
                    className="w-full"
                ></Row>

                <Row className="w-full">
                    <Col span={24}>
                        <label className="text-lg mb-6 font-bold">Cuadro de Necesidades</label>
                        <Table
                            columns={[
                                {
                                    title: 'Nombre',
                                    dataIndex: 'nombre_articulo',
                                    key: 'nombre_articulo',
                                },

                                {
                                    title: 'Articulo',
                                    dataIndex: 'descripcion_articulo',
                                    key: 'descripcion_articulo',
                                },

                            ]}
                            dataSource={articulos}
                        />
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
}

export default MainInventario;
