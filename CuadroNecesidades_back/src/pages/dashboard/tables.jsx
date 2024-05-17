import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";
import { Button, Col, Row } from "antd";
import { IoMdPersonAdd } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

export function Tables() {
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">

      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Row style={{ justifyContent: 'space-between' }}>

            <Col>
              <Typography variant="h6" color="white">
                Tabla de Usuarios
              </Typography>
            </Col>
            <Col >
              <Button size='small'
                type='success'
                htmlType='submit'
                onClick={() => { alert('Agregar Usuario') }}
                className="bg-green-500 hover:bg-green-200 p-4 flex items-center rounded-lg">
                <IoMdPersonAdd style={{ color: 'white' }} />
                <Typography className="ml-2" variant="h6" color='white'>
                  Agregar Usuario
                </Typography>
              </Button>

            </Col>

          </Row>

        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["author", "Departamento", "status", "Ingreso", "Acciones"].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {authorsTableData.map(
                ({ img, name, email, job, online, date }, key) => {
                  const className = `py-3 px-5 ${key === authorsTableData.length - 1
                    ? ""
                    : "border-b border-blue-gray-50"
                    }`;

                  return (
                    <tr key={name}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Avatar src={img} alt={name} size="sm" variant="rounded" />
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {name}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {job[0]}
                        </Typography>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {job[1]}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Chip
                          variant="gradient"
                          color={online ? "green" : "blue-gray"}
                          value={online ? "online" : "offline"}
                          className="py-0.5 px-2 text-[11px] font-medium w-fit"
                        />
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {date}
                        </Typography>
                      </td>
                      <td className={className}>
                        <div className="flex space-x-2 ">
                          <Button size='small'
                            type='success'
                            htmlType='submit'
                            onClick={() => { alert('Editar Usuario') }}
                            className="bg-yellow-700  hover:bg-green-200 p-4 flex items-center rounded-lg">
                            <FaUserEdit style={{ color: 'white' }} />
                          </Button>
                          <Button size='small'
                            type='success'
                            htmlType='submit'
                            onClick={() => { alert('Eliminar Usuario') }}
                            className="bg-red-700 hover:bg-green-200 p-4 flex items-center rounded-lg">
                            <FaDeleteLeft style={{ color: 'white' }} />
                          </Button>
                        </div>

                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>

    </div>
  );
}

export default Tables;
