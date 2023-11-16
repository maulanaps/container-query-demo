import './style.css'

function WritingMode({ title }) {
  document.title = title;

  return (
    <div className='page writing-mode center'>
      <div className="layout">
        <div className="box box1">Ini box 1</div>
        <div className="box box2">Ini box 2</div>
      </div>
    </div>
  )
}

export default WritingMode;
