import Song from './Song'
import { SongType } from './types'

type ListAreaProps = {
    songs: Array<SongType>
    addSong: () => void
    deleteSong: (id:number) => void
}

export default function ListArea({songs, deleteSong}: ListAreaProps) {
    return (
        <div className='pt-3'>
            { songs.map( song => <Song key={song.id} song={song} deleteSong= {deleteSong}/>)}
        </div>
    )
}