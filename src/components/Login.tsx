import { useState } from 'react'

type LoginProps = {
    isOpen: boolean
    onClose: () => void
}

export default function Login({ isOpen, onClose }: LoginProps) {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        password: '',
        direccion: '',
        telefono: '',
        fechaRegistro: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Datos del registro:', formData)
        onClose()
    }

    if (!isOpen) return null

    return (
        <div className="modal-overlay animate-fadeIn">
            <div className="login-content animate-slideIn">
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-colors duration-200 shadow-md flex items-center justify-center"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h3 className="text-center mb-4">Registro de Usuario</h3>
                <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="form-group">
                        <label className="form-label">Nombre completo:</label>
                        <input
                            type="text"
                            name="nombre"
                            className="form-input"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                            placeholder="Ingrese su nombre completo"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Email:</label>
                        <input
                            type="email"
                            name="email"
                            className="form-input"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="correo@ejemplo.com"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Contraseña:</label>
                        <input
                            type="password"
                            name="password"
                            className="form-input"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            placeholder="********"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Dirección:</label>
                        <input
                            type="text"
                            name="direccion"
                            className="form-input"
                            value={formData.direccion}
                            onChange={handleChange}
                            required
                            placeholder="Ingrese su dirección completa"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Teléfono:</label>
                        <input
                            type="tel"
                            name="telefono"
                            className="form-input"
                            value={formData.telefono}
                            onChange={handleChange}
                            required
                            placeholder="Ej: +34 612345678"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Fecha de registro:</label>
                        <input
                            type="date"
                            name="fechaRegistro"
                            className="form-input"
                            value={formData.fechaRegistro}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button 
                        type="submit"
                        className="btn btn-dark w-100 mt-4"
                    >
                        Registrar Usuario
                    </button>
                </form>
            </div>
        </div>
    )
} 