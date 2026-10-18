
import { useState } from 'react'
import { Form, Input, Button, message } from 'antd'

const { TextArea } = Input

function Formulario() {
    const [form] = Form.useForm()
    const [enviando, setEnviando] = useState(false)

    function handleSubmit(values) {
        setEnviando(true)

        // Por ahora mostramos una confirmación de prueba.
        message.success('¡Gracias por escribirme!')

        console.log('Datos del formulario:', values)

        form.resetFields()
        setEnviando(false)
    }

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            className="contact-form"
        >
            <Form.Item
                label="Nombre"
                name="nombre"
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
