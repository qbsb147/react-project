import ProfileCard from './components/ProfileCard'
import './App.css'
const ProfileData = [{
  name: "봉택윤", 
  age: 50,
  isOnline: true
},{
  name: "최예찬", 
  age: 30,
  isOnline: true
},{
  name: "이상준스키", 
  age: 25,
  isOnline: false
},{
  name: "최고의성진", 
  age: 17,
  isOnline: false
}
]


function App() {
  
  return (
    <>
      <ProfileCard profiles={ProfileData}/>
    </>
  )
}

export default App
