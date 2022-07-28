import { useSelector } from 'react-redux'

const Results = () => {
  // const textArray = useSelector(state => state.textArray)
  const reversedTextArray = useSelector(state => state.reversedTextArray)
  return (
    <div className='d-flex justify-content-center w-100'>
      <div className='w-100 bg-ocean text-light p-3 rounded-bottom d-flex flex-column align-items-center fw-bold'>
        RESULTS
        <ol className='list-group rounded list-group-flush d-flex flex-column w-50 mt-4 fw-normal'>
          {reversedTextArray?.map(el => (
            <li
              className='list-group-item bg text-light d-flex justify-content-between fs-6'
              key={el.text}
            >
              {el.text}
              {el.palindrome ? (
                <span className='badge bg-primary fst-italic fw-lighter'>
                  palindrome
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Results
