function PictureCard(props) {
    return (
      <div className="image-card">
        <img src={ props.mockIm } alt='MOCK IMAGE'/>
            <div className='image-card-buttons'>
                <button className='image-card-button'>Like</button>
                <button className='image-card-button'>Add</button>
            </div>
      </div>
    )
  }
  
  export default PictureCard