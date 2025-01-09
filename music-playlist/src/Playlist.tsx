import SelectedPlaylist from './SelectedPlaylist'
import ListArea from './ListArea'
import { playlistList } from './playlistList'
import { songList } from './songList'
import { useState } from 'react'
import { Modal, ModalBody, ModalHeader, ModalTitle } from 'react-bootstrap'

export default function Playlist(){
    const [Songs, setSongList] = useState(songList)
    const [isSonglistModalOpen, setIsSonglistModalOpen] = useState(false);
    const [songTitle, setSongTitle] = useState('');
    const [albumTitle, setAlbumTitle] = useState('');
    const [artistName, setArtistName] = useState('');
    const [songLength, setSongLength] = useState('');

    const handleSonglistModalClose = () => setIsSonglistModalOpen(false);

    const openSonglistModal = () => setIsSonglistModalOpen(true);

    const handleSongInput = (newSong:string) => {
        setSongTitle(newSong);
    };
    const handleAlbumInput = (newAlbum:string) => {
        setAlbumTitle(newAlbum);
    };
    const handleArtistInput = (newArtist:string) => {
        setArtistName(newArtist);
    };
    const handleLengthInput = (newLength:string) => {
        setSongLength(newLength);
    };

    function addSong() {
    event?.preventDefault();
    const newSong = {
        id: Songs.length ? Songs[Songs.length - 1].id+ 1 : 0,
        title: songTitle,
        album: albumTitle,
        artist: artistName,
        length: songLength
    };
    setSongList([...Songs, newSong]);
    setSongTitle('');
    setAlbumTitle('');
    setArtistName('');
    setSongLength('');
}   
    function deleteSong( idToDelete: number) {
            setSongList(Songs.filter(song => song.id !== idToDelete))
    }

    return (
        <div className='d-flex flex-column p-5 container-fluid col-xl-8' style={{height: '100vh', overflowY: 'auto'}}>
            <div style={{paddingBottom: 10}}><SelectedPlaylist playlist={playlistList[1]}/></div>
            <button type='button' className='btn' style={{width: '100%'}} onClick={openSonglistModal}>+</button>
            <div><ListArea songs={Songs} addSong={addSong} deleteSong={deleteSong}/></div>
            <Modal show={isSonglistModalOpen} onHide={handleSonglistModalClose}>
                <ModalHeader closeButton>
                    <ModalTitle>Song Information</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <form onSubmit= {addSong}>
                        <div className='form-group'>
                            <label>Song Title</label>
                            <input style={{width:'100%'}} className='form-control' type='text' value={songTitle} onChange={(e) => handleSongInput(e.target.value)} ></input>
                        </div>
                        <div className='form-group'>
                            <label>Album Title</label>
                            <input style={{width:'100%'}} className='form-control' type='text' value={albumTitle} onChange={(e) => handleAlbumInput(e.target.value)} ></input>
                        </div>
                        <div className='form-group'>
                            <label>Artist</label>
                            <input style={{width:'100%'}} className='form-control' type='text' value={artistName} onChange={(e) => handleArtistInput(e.target.value)} ></input>
                        </div>
                        <div className='form-group'>
                            <label>Song Length</label>
                            <input style={{width:'100%'}} className='form-control' type='text' value={songLength} onChange={(e) => handleLengthInput(e.target.value)} ></input>
                        </div>
                        <div style={{paddingTop:5}} className='form-group'>
                            <button style={{float:'right'}} className='btn btn-lg btn-dark'>Add</button>
                        </div>
                    </form>
                </ModalBody>
            </Modal>
        </div>
    )
}
