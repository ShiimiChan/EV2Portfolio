import { useState } from 'react'
import { Form, Input, Button, message } from 'antd'

// Extrae TextArea de Input para crear un campo de texto.
const { TextArea } = Input

// Define el componente del formulario de contacto.
function Formulario() {
    // Crea una instancia del formulario para controlar sus campos.
    const [form] = Form.useForm()

    // Guarda si el formulario está en proceso de envío.
    // El valor inicial es false.
    const [enviando, setEnviando] = useState(false)

    // Se ejecuta cuando el formulario supera sus validaciones.
    // values contiene los datos ingresados por el usuario.
    function handleSubmit(values) {

        // Activa el estado de envío.
        setEnviando(true)

        // Por ahora mostramos una confirmación de prueba.
        message.success('¡Gracias por escribirme!')

        // Muestra los datos en la consola del navegador.
        console.log('Datos del formulario:', values)

        // Limpia los campos del formulario.
        form.resetFields()

        // Desactiva el estado de envío.
        setEnviando(false)
    }

    return (
        <Form
            form={form}
            layout="vertical"

            // Ejecuta handleSubmit cuando la validación es correcta.
            onFinish={handleSubmit}

            className="contact-form"
        >
            <Form.Item
                label="Nombre"
                name="nombre"
                //Obliga al usuario a escribir su nombre
                rules={[
                    { required: true, message: 'Escribe tu nombre.' },
                ]}
            >
                <Input placeholder="Tu nombre" />
            </Form.Item>

            <Form.Item
                label="Correo electrónico"
                name="email"
                rules={[
                    { required: true, message: 'Escribe tu correo.' },
                    { type: 'email', message: 'Escribe un correo válido.' },
                ]}
            >
                <Input placeholder="nombre@correo.com" />
            </Form.Item>

            <Form.Item
                label="Mensaje"
                name="mensaje"
                rules={[
                    { required: true, message: 'Escribe tu mensaje.' },
                    { min: 10, message: 'El mensaje debe tener al menos 10 caracteres.' },
                ]}
            >
                <TextArea rows={4} placeholder="Cuéntame en qué puedo ayudarte..." />
            </Form.Item>

            <Button type="primary" htmlType="submit" loading={enviando} block>
                Enviar mensaje
            </Button>
        </Form>
    )
}

export default Formulario
