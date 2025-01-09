import playlistImage from './assets/seoul.png'

export default function SelectedPlaylist({playlist} : {playlist: {title:string}}) {
    return (
        <div>
            <div className="d-flex flex-row">
                <div>
                    <img className='ratio ratio-1x1' style={{height: 300, width: 300, borderRadius: 15}} src={playlistImage}></img>
                </div>
                <div className='align-self-center' style={{paddingLeft: '5vw', overflow: 'hidden'}}>
                    <div>
                        <div>
                            <h1>{playlist.title}</h1>
                        </div>
                    </div>
                    <div className='d-flex flex-wrap'>
                        <div style={{paddingBottom:5, paddingRight:5}}>
                            <button style={{width:100}} className='btn btn-lg btn-dark' type='button'>Play</button>
                        </div>
                        <div style={{paddingBottom:5, paddingRight:5}}>
                            <button style={{width:100}} className='btn btn-lg btn-dark' type='button'>Shuffle</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}