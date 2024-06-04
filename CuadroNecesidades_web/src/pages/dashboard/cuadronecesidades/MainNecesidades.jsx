import React from 'react'
import { Layout, Table, Pagination, Dropdown, Col, Row, Form, DatePicker } from "antd";
import bannerCbtis from "@assets/images/logos/bannercbtis.png";
import { Select, Space } from 'antd';
import FormItemLabel from 'antd/es/form/FormItemLabel';



function MainNecesidades() {
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
                        <span className="text-white text-2xl font-bold">Proyección semestral de necesidades</span>
                    </div>
                </Header>
            </div>


            <Content className="bg-white h-full w-full flex flex-col items-center  px-8 py-4 space-y-8 overflow-auto">





                <Row
                    gutter={[16, 16]}
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 12 }}
                    lg={{ span: 12 }}
                    xl={{ span: 12 }}
                    className='w-full '
                >

                    <Col span={12}>

                        <label className="text-md font-bold">Departamento</label>
                        <Select
                            showSearch
                            style={{ width: '100%' }}
                            optionFilterProp="children"
                            size='large'
                            allowClear
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={[
                                {
                                    value: '1',
                                    label: 'Not Identified',
                                },
                                {
                                    value: '2',
                                    label: 'Closed',
                                },

                            ]}
                        />
                    </Col>

                    <Col span={12}>
                        <label className="text-md font-bold">Área / Oficina</label>
                        <Select
                            showSearch
                            style={{ width: '100%' }}
                            optionFilterProp="children"
                            allowClear
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            size='large'
                            options={[
                                {
                                    value: '1',
                                    label: 'Not Identified',
                                },
                                {
                                    value: '2',
                                    label: 'Closed',
                                },

                            ]}
                        />

                    </Col>

                    <Col span={12}>
                        <label className="text-md font-bold">Periodo Semestral</label>
                        <Select
                            showSearch
                            style={{ width: '100%' }}
                            optionFilterProp="children"
                            allowClear
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            size='large'
                            options={[
                                {
                                    value: '1',
                                    label: 'Not Identified',
                                },
                                {
                                    value: '2',
                                    label: 'Closed',
                                },

                            ]}
                        />

                    </Col>

                    <Col span={12}>
                        <label className="text-md font-bold">Fecha de Elaboración</label>
                        <DatePicker style={{ width: '100%' }} picker="date" size='large' placeholder='' />

                    </Col>

                    {/*   <Col span={12}>

                        <label className="text-md font-bold">Departamento</label>
                        <Space direction="vertical">
                            <Form.Item

                                name="date-picker"
                                label="DatePicker"
                                rules={[{ required: true, message: 'Please select time!' }]}
                            >
                                <DatePicker showTime />
                            </Form.Item>
                        </Space>
                    </Col> */}
                </Row>

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
                                    title: 'Departamento',
                                    dataIndex: 'departament',
                                    key: 'departament',
                                },
                                {
                                    title: 'Articulo',
                                    dataIndex: 'articulo',
                                    key: 'articulos',
                                },
                                {
                                    title: 'Acciones',
                                    key: 'acciones',
                                    render: () => (
                                        <Space size="middle">
                                            <a href='#' className='bg-red-400 text-white p-2 rounded-xl shadow-xl'>Eliminar</a>                                        </Space>
                                    ),
                                }
                            ]}
                            dataSource={[
                                {
                                    key: '1',
                                    name: 'Juan Perez',
                                    departament: 'Sistemas',
                                    articulo: 'Lapiz'
                                },
                                {
                                    key: '2',
                                    name: 'Maria Lopez',
                                    departament: 'Sistemas',
                                    articulo: 'Borrador'
                                },
                                {
                                    key: '3',
                                    name: 'Pedro Ramirez',
                                    departament: 'Sistemas',
                                    articulo: 'Cuaderno'
                                },
                            ]}


                        />
                    </Col>

                </Row>





            </Content >
        </Layout >
    )
}

export default MainNecesidades