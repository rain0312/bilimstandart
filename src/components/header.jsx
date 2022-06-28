export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a href="p4.pdf" download="myfile" className='btn btn-custom btn-lg page-scroll'>Программная аккредитация</a>{' '}
                <a href="nov.pdf" download="myfile" className='btn btn-custom btn-lg page-scroll'>Институциональная аккредитация</a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
