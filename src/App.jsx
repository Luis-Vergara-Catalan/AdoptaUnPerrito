import './App.css'
import Header from './componentes/Header'
import MyCard from './componentes/MyCard'
import Footer from './componentes/Footer'


function App() {
  return (
  <>
    <Header titulo ='Adopta un perrito'/>
    <div className='tarjeta'>
      <MyCard imagen=  'https://cdn.pixabay.com/photo/2016/02/26/16/32/bulldog-1224267_1280.jpg' nombre='Max' descripcion='Le gusta dormir y es muy tranquilo' raza='Buldog' BgColor='primary'/>
      <MyCard imagen=  'https://cdn.pixabay.com/photo/2017/12/29/10/47/animal-company-3047244_1280.jpg' nombre='Bolt' descripcion='Uno de los perros más rapidos que verás el día de hoy' raza='Galgo Persa' BgColor='danger'/>
      <MyCard imagen=  'https://cdn.pixabay.com/photo/2016/07/15/15/55/dachshund-1519374_1280.jpg' nombre='Cachupin' descripcion='Cachorro de Salchicha que le gusta estar en los brazos' raza='Dachshund' BgColor='success'/>
      <MyCard imagen=  'https://media.istockphoto.com/id/1455277100/es/foto/cachorro-de-perro-corgi-sentado-en-la-mesa-en-verano-d%C3%ADa-soleado-al-aire-libre.jpg?s=612x612&w=0&k=20&c=oJySEW9b2z6pneT9SKmotAmsfGqnNlieKL3KHdiFl3c=' nombre='Pepe' descripcion='Es tierno y le gusta jugar con los niños' raza='Corgi' BgColor='info'/>
    </div>
    <Footer  texto= 'Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferetnes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su esencia única. Adopta un perro y bríndale una segunda opotunidad. Enuentra a tu compañero peludo para siempre.'/>
  </>
  )
}

export default App
