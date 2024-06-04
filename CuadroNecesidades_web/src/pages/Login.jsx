import { useEffect, useRef, useCallback, useContext } from "react";
import { Row, Col } from "antd";
import { Form, Input, Button, Upload, message } from "antd";
import { useNavigate } from "react-router-dom";
import CustomCarousel from "@components/General/CustomCarousel";
import { v4 as uuid } from 'uuid';
import { AuthContext } from "@context/AuthContext";
import { notification } from "antd";
import cbtisLOGO from "@assets/images/logos/cbtisLOGO.png"
import cbtisplaza from "@assets/images/libreria.jpg"
const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: 'user',
}

export default function Login() {
  const navigate = useNavigate();

  const { setAuth } = useContext(AuthContext);

  const webcamRef = useRef(null)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const capture = useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot()
    sendImage(pictureSrc);
  })


  function sendImage(imageData) {
    console.log("Sending image");
    //e.preventDefault();
    const visitorImageName = uuid();
    fetch(`https://lclua29gn1.execute-api.us-east-1.amazonaws.com/dev/fixm-visitor-image-storage/${visitorImageName}.jpeg`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'image/jpeg',
        'Accept': 'application/json',
      },
      body: dataURItoBlob(imageData)
    }).then(async () => {
      const response = await facial_authenticate(visitorImageName);
      if (response.Message === 'Success') {
        try {
          const user = {
            'firstName': response.firstName,
            'lastName': response.lastName,
          }
          setAuth(user);
          console.log('Authenticated');
          navigate("/Dashboard/Reportes");
        } catch (error) {
          console.error('Error:', error);
          notification.error({
            message: "Error al iniciar sesión",
            description: `Ha ocurrido un error al iniciar sesión: ${error?.response?.data?.error}`,
            placement: "topRight",
          });
        }

      } else {
        console.log('Not Authenticated');
        notification.error({
          message: "Usuario no autorizado",
          description: `Usuario no autorizado. Por favor, intente de nuevo.`,
          placement: "topRight",
        });
      }
    }).catch(error => {
      console.error('Error:', error);
      notification.error({
        message: "Error al iniciar sesión",
        description: `Ha ocurrido un error al iniciar sesión: ${error?.response?.data?.error}`,
        placement: "topRight",
      });
    });
  }

  async function facial_authenticate(visitorImageName) {
    const requestURL = 'https://lclua29gn1.execute-api.us-east-1.amazonaws.com/dev/employee?' + new URLSearchParams({
      objectKey: `${visitorImageName}.jpeg`
    });
    return await fetch(requestURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }).then(response => response.json())
      .then(data => {
        return data;
      }).catch((error) => console.error('Error:', error));

  }

  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ab], { type: mimeString });
    return blob;
  };

  useEffect(() => {
    document.title = "Login";
  }, []);



  return (
    // <AnimationLayout>
    <div className="flex h-screen  ">
      <Row className="w-full h-full ">


        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 12 }}
          className="flex items-center justify-center p-4 md:p-16"
        >
          <Form
            name="login-form"
            layout="vertical"
            initialValues={{ remember: true }}
            style={{ width: "100%", margin: "0 auto" }}
          >

            <Col className="items-center justify-center text-center mb-9">
              <img src={cbtisLOGO} alt="logo" className="w-1/4 h-1/4 mx-auto" />
              <span className="text-xl font-bold text-cbtisCOLOR">Departamento de Planeación y Evaluación</span>
            </Col>
            <Form.Item
              label="Correo Electrónico"
              name="email"
              initialValue={""}
              rules={[
                {
                  required: true,
                  message: "Por favor, ingrese su correo electrónico",
                },
              ]}

            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Contraseña"
              name="password"
              initialValue={""}
              rules={[
                {
                  required: true,
                  message: "Por favor, ingrese su contraseña",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>


            <Form.Item>
              <Button

                type="primary"
                size="large"
                htmlType="submit"
                className="w-full my-4 rounded-lg linear  text-base font-medium text-white transition duration-200  bg-cbtisCOLOR hover:bg-blue:900"
              >
                Iniciar Sesión
              </Button>
            </Form.Item>
          </Form>
        </Col>


        <Col
          xs={{ span: 0 }}
          sm={{ span: 0 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 12 }}
        >

          <img src={cbtisplaza} className="h-screen brightness-75 object-cover w-full"></img>
        </Col>
      </Row>
    </div>
    // </AnimationLayout>
  );
}
