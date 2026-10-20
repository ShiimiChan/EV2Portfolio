/* Importa las herramientas de Vitest:
   describe: agrupa pruebas relacionadas.
   it: define una prueba individual.
   expect: permite comprobar los resultados esperados.
   vi: permite crear simulaciones y observar llamadas a funciones. */
import { describe, it, expect, vi } from 'vitest'

/* Importa herramientas de React Testing Library:
   render: muestra el componente en el entorno de pruebas.
   screen: permite buscar elementos de la interfaz.
   fireEvent: simula acciones del usuario.
   waitFor: espera hasta que se cumpla una condición. */
import { render, screen, fireEvent, waitFor } from '@testing-library/react'

// Importa el componente del formulario que se va a probar.
import Formulario from './Formulario'

// Agrupa todas las pruebas relacionadas con el formulario de contacto.
describe('Formulario de contacto', () => {

    // Comprueba que se muestren todos los campos y el botón de envío.
    it('muestra los campos del formulario', () => {

        // Renderiza el componente para poder examinar su contenido.
        render(<Formulario />)

        // Comprueba que exista el campo para ingresar el nombre.
        expect(
            screen.getByPlaceholderText('Tu nombre')
        ).toBeInTheDocument()

        // Comprueba que exista el campo para ingresar el correo electrónico.
        expect(
            screen.getByPlaceholderText('nombre@correo.com')
        ).toBeInTheDocument()

        // Comprueba que exista el campo para escribir el mensaje.
        expect(
            screen.getByPlaceholderText('Cuéntame en qué puedo ayudarte...')
        ).toBeInTheDocument()

        // Comprueba que exista el botón para enviar el formulario.
        expect(
            screen.getByRole('button', { name: 'Enviar mensaje' })
        ).toBeInTheDocument()
    })


    // Comprueba que aparezca un mensaje de error cuando falta el nombre.
    it('muestra un error si falta el nombre', async () => {

        // Renderiza el formulario con sus campos inicialmente vacíos.
        render(<Formulario />)

        // Simula un clic del usuario en el botón de envío.
        fireEvent.click(
            screen.getByRole('button', { name: 'Enviar mensaje' })
        )

        // Espera a que aparezca el mensaje de validación del nombre.
        // async y await permiten esperar el resultado de la validación.
        expect(
            await screen.findByText('Escribe tu nombre.')
        ).toBeInTheDocument()
    })


    // Comprueba que el formulario rechace un correo electrónico inválido.
    it('rechaza un correo electrónico incorrecto', async () => {

        // Renderiza el formulario antes de ingresar los datos.
        render(<Formulario />)

        // Simula el ingreso de un nombre válido.
        fireEvent.change(screen.getByPlaceholderText('Tu nombre'), {
            target: { value: 'Silvana' },
        })

        // Simula el ingreso de un correo electrónico incorrecto.
        fireEvent.change(screen.getByPlaceholderText('nombre@correo.com'), {
            target: { value: 'correo-invalido' },
        })

        // Ingresa un mensaje que cumple con la longitud mínima requerida.
        fireEvent.change(
            screen.getByPlaceholderText('Cuéntame en qué puedo ayudarte...'),
            {
                target: { value: 'Este es un mensaje de prueba' },
            }
        )

        // Intenta enviar el formulario para activar las validaciones.
        fireEvent.click(
            screen.getByRole('button', { name: 'Enviar mensaje' })
        )

        // Espera y comprueba que aparezca el error del correo inválido.
        expect(
            await screen.findByText('Escribe un correo válido.')
        ).toBeInTheDocument()
    })


    // Comprueba que los datos válidos se procesen y que los campos
    // del formulario se limpien después del envío.
    it('acepta los datos válidos y limpia los campos', async () => {

        // Espía las llamadas a console.log para verificar qué datos recibe.
        // mockImplementation evita imprimir esos datos durante la prueba.
        const consoleSpy = vi
            .spyOn(console, 'log')
            .mockImplementation(() => {})

        // Renderiza el componente del formulario.
        render(<Formulario />)

        // Ingresa un nombre válido.
        fireEvent.change(screen.getByPlaceholderText('Tu nombre'), {
            target: { value: 'Silvana' },
        })

        // Ingresa un correo electrónico con formato válido.
        fireEvent.change(screen.getByPlaceholderText('nombre@correo.com'), {
            target: { value: 'silvana@example.com' },
        })

        // Ingresa un mensaje que cumple con la longitud mínima.
        fireEvent.change(
            screen.getByPlaceholderText('Cuéntame en qué puedo ayudarte...'),
            {
                target: { value: 'Este es un mensaje de prueba válido' },
            }
        )

        // Simula el clic en el botón para enviar los datos.
        fireEvent.click(
            screen.getByRole('button', { name: 'Enviar mensaje' })
        )

        // Espera hasta comprobar que console.log recibió los datos esperados.
        await waitFor(() => {
            expect(consoleSpy).toHaveBeenCalledWith(
                'Datos del formulario:',
                {
                    nombre: 'Silvana',
                    email: 'silvana@example.com',
                    mensaje: 'Este es un mensaje de prueba válido',
                }
            )
        })

        // Espera y comprueba que el campo del nombre se haya limpiado.
        await waitFor(() => {
            expect(
                screen.getByPlaceholderText('Tu nombre')
            ).toHaveValue('')

            // Comprueba que el campo del correo también esté vacío.
            expect(
                screen.getByPlaceholderText('nombre@correo.com')
            ).toHaveValue('')
        })

        // Restaura console.log a su comportamiento original.
        consoleSpy.mockRestore()
    })
})