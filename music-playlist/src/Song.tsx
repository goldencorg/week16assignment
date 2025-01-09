import { SongType } from "./types"

type SongProps = {
    song: SongType
    deleteSong: (id: number) => void
}
export default function Song({deleteSong, song}: SongProps) {
    return (
        <div className="border-bottom d-flex justify-content-between">
            <div style={{maxWidth:'50%'}}>
                <div className="fs-4">{song.title}</div>
                <div className="fs-6">{song.album} - {song.artist}</div>
            </div>
            <div className="align-self-center">
                <span style={{paddingRight:10}}>{song.length}</span><button className="btn btn-dark" type="button" onClick={() => deleteSong(song.id)}>Remove</button>
            </div>
        </div>
    )
}