import mockIm from './img-mock-001.png'
import PictureCard from './PictureCard'

function Picture() {
  return (
    <div className="columns">
    <div className="main-column">
    <div className='content-bar'>
      <div className='image-cards-bar'>
         <PictureCard mockIm={ mockIm }/>
         <PictureCard mockIm={ mockIm }/>
         <PictureCard mockIm={ mockIm }/>
         <PictureCard mockIm={ mockIm }/>
         <PictureCard mockIm={ mockIm }/>
         <PictureCard mockIm={ mockIm }/>
         <PictureCard mockIm={ mockIm }/>
         <PictureCard mockIm={ mockIm }/>
         <PictureCard mockIm={ mockIm }/>
      </div>
      <h3> Здесь будет управление пагинацией </h3>
      </div>
    </div>
    <div className="right-column">
      Здесь будет боковое меню
    </div>
    </div>
  )
}

export default Picture
