import Photo from '../../Components/HomePageContents/Photo'
import Choose from '../../Components/HomePageContents/WhyChooseUs'
import Camera from '../../Components/HomePageContents/Camera'
import Favorite from '../../Components/HomePageContents/Favorite'
import Navbar from '../../Layouts/Navbar/Navbar'
import Footer from '../../Layouts/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Photo />
        <Favorite />
        <Choose />
        <Camera />
      </main>
      <Footer />
    </>
  )
}
