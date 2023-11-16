import './style.css'

function NestedContainer({ title }) {
  document.title = title;

  return (
    <div className='page nested-container'>
      <div className="container1 center">
        <div className="box1"></div>
        <div className="container2 center">
          <div className="box2"></div>
        </div>
      </div>
    </div>
  )
}

export default NestedContainer
