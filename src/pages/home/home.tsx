import SoundList from '../../component/soundList/soundList';
import { SoundSelector } from '../../store/slices/SoundSlices';
import { ISoundList, category } from '../../types/soundlist';
import './home.css'
import { useSelector } from 'react-redux';

function Home() {
  const soundList: ISoundList[] = useSelector(SoundSelector.getSoundList);

  const fNewPlaylist = (sound: ISoundList, category: category) => {
    return sound.category.indexOf(category) !== -1
  }

  return <div className="home">
    <SoundList soundList={soundList.filter((sound) => fNewPlaylist(sound, category.NewPlaylist))} />
    <SoundList soundList={soundList.filter((sound) => fNewPlaylist(sound, category.Trending))} />
  </div>
}

export default Home