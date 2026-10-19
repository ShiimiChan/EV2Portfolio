
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import GaleriaProyecto from './GaleriaProyectos'

describe('Galeria de proyectos', () => {
    it('muestra el proyecto DecoHogar', () => {
        render(<GaleriaProyecto />)

        expect(
            screen.getByRole('heading', { name: 'DecoHogar' })
        ).toBeInTheDocument()
    })

    it('muestra el proyecto Identity Simulation', () => {
        render(<GaleriaProyecto />)

        expect(
            screen.getByRole('heading', { name: 'Identity Simulation' })
        ).toBeInTheDocument()
    })

    it('muestra las imágenes de los proyectos', () => {
        render(<GaleriaProyecto />)

        const imagenes = screen.getAllByRole('img')

        expect(imagenes).toHaveLength(2)
    })
})
