import { useDispatch } from 'react-redux'
import { getReverseString } from '../redux/actions/reverseStrings'

const Navbar = () => {
  const dispatch = useDispatch()

  const handleOnSubmit = e => {
    e.preventDefault()
    console.log(e)
    dispatch(getReverseString(e.target[0].value))
    e.target[0].value = ''
  }

  return (
    <nav className='navbar navbar-light glass-effect mx-5 w-100 rounded-top'>
      <form
        className='container-fluid justify-content-center'
        onSubmit={e => handleOnSubmit(e)}
      >
        <div className='input-group'>
          <span className='input-group-text' id='basic-addon1'>
            <span className='material-symbols-outlined me-2'>cached</span>
            Reverse Text Engine
          </span>
          <input
            type='text'
            className='form-control'
            placeholder='Insert text here'
            aria-label='Insert text here'
            aria-describedby='basic-addon1'
          />
          <button type='submit' className='btn btn-dark'>
            Reverse
          </button>
        </div>
      </form>
    </nav>
  )
}

export default Navbar
