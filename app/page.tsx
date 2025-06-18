import {
  Shield,
  Smartphone,
  Cloud,
  Users,
  Camera,
  Thermometer,
  Droplets,
  Flame,
  Heart,
  Wind,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AlarMaxLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">AlarMax</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
              Características
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">
              Cómo Funciona
            </a>
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">
              Servicios
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contacto
            </a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">Solicitar Demo</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Seguridad Integral para tu <span className="text-blue-600">Condominio</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Sistema innovador de alarmas y monitoreo que va más allá de la seguridad tradicional. Protege contra
              incendios, fugas, intrusos y emergencias médicas desde una sola plataforma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                Comenzar Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                Ver Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Protección Completa en una Sola Plataforma</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AlarMax integra múltiples sistemas de seguridad y monitoreo para brindar tranquilidad integral a
              administradores y residentes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <Flame className="h-12 w-12 text-red-500 mb-4" />
                <CardTitle>Detección de Incendios</CardTitle>
                <CardDescription>
                  Alarmas de incendio y detectores de humo inteligentes con notificaciones instantáneas
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <Droplets className="h-12 w-12 text-blue-500 mb-4" />
                <CardTitle>Sensores de Fugas</CardTitle>
                <CardDescription>Detección temprana de fugas de agua y gas para prevenir daños mayores</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-green-500 mb-4" />
                <CardTitle>Control Biométrico</CardTitle>
                <CardDescription>Sistema de acceso biométrico avanzado para máxima seguridad</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <Camera className="h-12 w-12 text-purple-500 mb-4" />
                <CardTitle>Videovigilancia</CardTitle>
                <CardDescription>Monitoreo 24/7 con cámaras de alta definición y acceso remoto</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <Heart className="h-12 w-12 text-pink-500 mb-4" />
                <CardTitle>Emergencias Médicas</CardTitle>
                <CardDescription>Alarmas médicas especializadas para residentes vulnerables</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <Wind className="h-12 w-12 text-teal-500 mb-4" />
                <CardTitle>Calidad del Aire</CardTitle>
                <CardDescription>Sensores que monitorean la calidad del aire en áreas comunes</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">¿Cómo Funciona AlarMax?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Una red inteligente de sensores conectados que trabajan en conjunto para mantener tu condominio seguro las
              24 horas del día.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Thermometer className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Monitoreo Constante</h3>
              <p className="text-gray-600">
                Red de sensores inteligentes monitoreando intrusiones, incendios, fugas, accesos y emergencias médicas
                en tiempo real.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Cloud className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Centralización en la Nube</h3>
              <p className="text-gray-600">
                Toda la información se centraliza en una plataforma segura en la nube, accesible desde cualquier lugar y
                momento.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Smartphone className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Notificaciones Instantáneas</h3>
              <p className="text-gray-600">
                Aplicación móvil intuitiva que envía alertas inmediatas y permite gestionar todos los sistemas desde tu
                smartphone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Servicios Completos de Monitoreo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desde seguridad básica hasta mantenimiento predictivo, AlarMax cubre todas las necesidades de tu
              condominio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Monitoreo de Estacionamiento</h3>
                  <p className="text-gray-600">
                    Control de acceso vehicular y vigilancia de espacios de estacionamiento
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Alertas de Mantenimiento</h3>
                  <p className="text-gray-600">Monitoreo predictivo de ascensores, bombas y equipos comunes</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Protocolos de Emergencia</h3>
                  <p className="text-gray-600">
                    Activación automática de protocolos específicos según el tipo de emergencia
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Acceso Remoto</h3>
                  <p className="text-gray-600">
                    Control total del sistema desde cualquier ubicación a través de la app
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Reducción de Costos</h3>
                  <p className="text-gray-600">
                    Optimización de recursos y reducción de costos operativos del condominio
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Respuesta Rápida</h3>
                  <p className="text-gray-600">Tiempo de respuesta optimizado ante cualquier tipo de incidente</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Soporte 24/7</h3>
                  <p className="text-gray-600">Atención técnica especializada disponible las 24 horas del día</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Escalabilidad</h3>
                  <p className="text-gray-600">Sistema adaptable que crece con las necesidades de tu condominio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              ¿Listo para Transformar la Seguridad de tu Condominio?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Únete a los condominios que ya confían en AlarMax para su tranquilidad y seguridad integral.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                Solicitar Cotización
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3"
              >
                Agendar Demostración
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contáctanos</h2>
            <p className="text-xl text-gray-600">Estamos aquí para responder todas tus preguntas sobre AlarMax</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Teléfono</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@alarmax.com</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Oficina</h3>
              <p className="text-gray-600">Ciudad de México, México</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">AlarMax</span>
              </div>
              <p className="text-gray-400">
                Seguridad integral para condominios. Protección avanzada, tranquilidad garantizada.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Detección de Incendios</li>
                <li>Control de Acceso</li>
                <li>Videovigilancia</li>
                <li>Emergencias Médicas</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Acerca de Nosotros</li>
                <li>Casos de Éxito</li>
                <li>Soporte Técnico</li>
                <li>Contacto</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Términos de Servicio</li>
                <li>Política de Privacidad</li>
                <li>Cookies</li>
                <li>Garantías</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AlarMax. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
