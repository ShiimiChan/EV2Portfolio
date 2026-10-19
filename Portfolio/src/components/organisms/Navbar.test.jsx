import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'

describe('Navbar', () => {
    it('muestra las opciones del menú', () => {
        render(<Navbar />)

        expect(screen.getByText('Sobre mí')).toBeInTheDocument()
        expect(screen.getByText('Experiencia')).toBeInTheDocument()
        expect(screen.getByText('Estudios')).toBeInTheDocument()
        expect(screen.getByText('Proyectos')).toBeInTheDocument()
        expect(screen.getByText('Contacto')).toBeInTheDocument()
    })

    it('muestra el nombre con un enlace a Sobre mí', () => {
        render(<Navbar />)

        const enlace = screen.getByRole('link', {
            name: 'Silvana Reyes',
        })

        expect(enlace).toHaveAttribute('href', '#sobre-mi')
    })
})
