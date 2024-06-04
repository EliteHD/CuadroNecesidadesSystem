import React from 'react'
import { Layout, Table, Pagination, Dropdown, Col, Row, Form, DatePicker } from "antd";
import bannerCbtis from "@assets/images/logos/bannercbtis.png";
import { Select, Space } from 'antd';
import FormItemLabel from 'antd/es/form/FormItemLabel';



function MainUsuarios() {
    const { Content, Header } = Layout;


    return (
        <Layout className="flex-1 flex h-full bg-white">

            <div className="p-2.5  w-full bg-white"
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}>

                <Header
                    className=" w-full bg-cbtisbrow shadow-md rounded-2xl backdrop:blur-xl backdrop-filter bg-opacity-95"
                >
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
                                    title: 'Nombre',
                                    dataIndex: 'name',
                                    key: 'name',
                                },
                                {
                                    title: 'Edad',
                                    dataIndex: 'age',
                                    key: 'age',
                                },
                                {
                                    title: 'Dirección',
                                    dataIndex: 'address',
                                    key: 'address',
                                },
                                {
                                    title: 'Acciones',
                                    dataIndex: 'actions',
                                    key: 'actions',
                                    render: () => (
                                        <Space size="middle">
                                            <a href='#' className='bg-yellow-400 p-2 rounded-xl shadow-xl'>Editar</a>
                                            <a href='#' className='bg-red-400 text-white p-2 rounded-xl shadow-xl'>Eliminar</a>                                        </Space>
                                    ),
                                }
                            ]}
                            dataSource={[
                                {
                                    key: '1',
                                    name: 'John Brown',
                                    age: 32,
                                    address: 'New York No. 1 Lake Park',
                                },
                                {
                                    key: '2',
                                    name: 'Jim Green',
                                    age: 42,
                                    address: 'London No. 1 Lake Park',
                                },
                                {
                                    key: '3',
                                    name: 'Joe Black',
                                    age: 32,
                                    address: 'Sidney No. 1 Lake Park',
                                },
                            ]}
                        />
                    </Col>
                </Row>
            </Content >
        </Layout >
    )
}

export default MainUsuarios