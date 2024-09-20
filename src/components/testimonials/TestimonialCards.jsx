
import TestimonialCard from "./TestimonialCard"

const testimonials = [
  {
    name: "Rosa Isela Cordova Ramos",
    role: "QA AUTOMATION & QA ANALYST",
    image: "/placeholder.svg?height=100&width=100",
    text: "¡Me alegra contaros que he obtenido un nuevo certificado: Ingeniería de Datos con AWS de Smart Data! Muchas gracias al docente Tony Stivenson Trujillo Dávila por sus enseñanzas y por el apoyo durante mi formación, me llevo nuevos aprendizajes y una experiencia maravillosa Smart Data.",
    videoUrl: "https://example.com/video1.mp4"
  },
  {
    name: "Christian Anderson Sanchez",
    role: "Data Engineer - Analista De Proyectos BI",
    image: "/placeholder.svg?height=100&width=100",
    text: "Me alegra compartir con todos ustedes, un objetivo mas cumplido, he obtenido un nuevo certificado: Ingeniería de Datos con Microsoft Azure de Smart Data y CertProf, un agradecimiento especial a Roger Rodriguez Samanez. #dataengineer #azure #smartdata",
    videoUrl: "https://example.com/video2.mp4"
  },
  {
    name: "Santiago Quiroga Heighes",
    role: "Cloud Data Engineer En Bluetab IBM",
    image: "/placeholder.svg?height=100&width=100",
    text: "Después de una preparación a profundidad en la ingeniería de datos, obtengo el certificado por el cual me prepare en un inicio obtener, agradezco las enseñanzas de mi profesor con sus multiples ejemplos en el día a día y también un agradecimiento especial a SmartData por el apoyo.",
    videoUrl: "https://example.com/video3.mp4"
  }
]

const TestimonialCards = () => {
  return (
    <div className="bg-navy-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white text-center mb-2">Testimonios</h2>
        <p className="text-xl text-white text-center mb-12">¿Qué opinan nuestros alumnos?</p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestimonialCards