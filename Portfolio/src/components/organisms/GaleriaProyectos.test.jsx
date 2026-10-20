
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import GaleriaProyecto from './GaleriaProyectos'

// Agrupa las pruebas relacionadas con la galería.
describe('Galeria de proyectos', () => {

    // Comprueba que se muestre el proyecto DecoHogar.
    it('muestra el proyecto DecoHogar', () => {

        // Renderiza el componente en el entorno de pruebas.
        render(<GaleriaProyecto />)

        // Busca un encabezado con el texto DecoHogar
        // y verifica que esté presente en el documento.
        expect(
            screen.getByRole('heading', { name: 'DecoHogar' })
        ).toBeInTheDocument()
    })

    // Comprueba que se muestre el proyecto Identity Simulation.
    it('muestra el proyecto Identity Simulation', () => {
        render(<GaleriaProyecto />)

        expect(
            screen.getByRole('heading', { name: 'Identity Simulation' })
        ).toBeInTheDocument()
    })

    // Comprueba que la galería muestre dos imágenes.
    it('muestra las imágenes de los proyectos', () => {
        render(<GaleriaProyecto />)

        // Obtiene todos los elementos que cumplen el rol de imagen.
        const imagenes = screen.getAllByRole('img')

        // Verifica que existan exactamente dos imágenes.
        expect(imagenes).toHaveLength(2)
    })
})