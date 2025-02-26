import './App.css'
import Cafe from './components/Cafe'

const cafes = [
  {
    name: 'Community Goods',
    location: 'Melrose',
    picture: 'https://s3-media0.fl.yelpcdn.com/bphoto/AJWbt3tIaDjaFAzFTu7gzw/348s.jpg'
  },
  {
    name: 'Memory Look',
    location: 'Korea Town',
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRC2VbKiQoG4rthahQTRJ2SB4esnGpPtX3dA&s'
  },
  {
    name: 'Ministy of Coffee',
    location: "Westwood",
    picture: 'https://static-content.owner.com/funnel/images/6866dcec-5f05-4360-98a4-7e5392add3ce?v=4287836430&w=3840&q=80&auto=format'
  }
]

function App() {
  return (
    <div className='App'>
      <h1>Cafe List</h1>
      <div className='cafes'>
        {cafes.map((cafe) => {
          return (
            <Cafe 
              name={cafe.name}
              location={cafe.location}
              picture={cafe.picture}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
