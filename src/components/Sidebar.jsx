import React from 'react'
import { Players } from './Players'
import './Sidebar.css'
import { MdHomeFilled, MdSearch } from "react-icons/md"
import { IoLibrary } from 'react-icons/io5'
import PlaylistCard from './PlaylistCard'

export default function Sidebar(props) {
    return (
        <div className='sidebar'>
            <div className='upper'>
                <ul>
                    <li>
                        <MdHomeFilled />
                        <span>Home</span>
                    </li>
                    <li>
                        <MdSearch />
                        <span>Search</span>
                    </li>
                </ul>
            </div>
            <div className='lower'>
                <div className="lowerstatic">
                    <ul>
                        <li>
                            <IoLibrary />
                            <span>Your Library</span>
                        </li>

                        <li className='buttons'>
                            <button >Playlists</button>
                            <button >Artists</button>
                        </li>
                    </ul>
                </div>
                <div className="lowerdynamic">
                    <Players />
                    <PlaylistCard
                        imageurl='https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebbb3354fb8cffdea84c0d4c2b4'
                        heading1='Best of B Praak'
                        heading2='Playlist.Hitesh Rajpurohit'
                        playlistId='6n4HgPyvMWqaNTnAv7WL1T'
                        onClickPlaylistCard={props.onClickPlaylistCard}
                    />
                    <PlaylistCard
                        imageurl='https://mosaic.scdn.co/300/ab67616d00001e021376b4b16f4bfcba02dc571bab67616d00001e02495ce6da9aeb159e94eaa453ab67616d00001e029e2f95ae77cf436017ada9cbab67616d00001e02ba5db46f4b838ef6027e6f96'
                        heading1='English Playlist'
                        heading2='Tan Ming Yan'
                        playlistId='5HqyPLi4yJ6jh6JGB14BX0'
                        onClickPlaylistCard={props.onClickPlaylistCard}
                    />
                    <PlaylistCard
                        imageurl='https://i.scdn.co/image/ab67706c0000da8405f0d1718c542cb0b34cf6c2'
                        heading1='Shreya Ghoshal Hits'
                        heading2='sophiegalla'
                        playlistId='6HuBqQDtm9p9mlK04i36wK'
                        onClickPlaylistCard={props.onClickPlaylistCard}
                    />
                    <PlaylistCard
                        imageurl='https://i.scdn.co/image/ab67706c0000da84320c60195cb02cf0cc51aa28'
                        heading1='ARIJIT SINGH - ALL SONGS'
                        heading2='tofan_naik'
                        playlistId='7qxn6GsFH77ghVtKzOnAYA'
                        onClickPlaylistCard={props.onClickPlaylistCard}
                    />
                    <PlaylistCard
                        imageurl='https://i.scdn.co/image/ab67706f00000002bc10ef09f6d3ca27092204b8'
                        heading1='This is Armaan Malik'
                        heading2='Spotify'
                        playlistId='37i9dQZF1DWWa2DNhcausF'
                        onClickPlaylistCard={props.onClickPlaylistCard}
                    />
                    <PlaylistCard
                        imageurl='https://mosaic.scdn.co/640/ab67616d0000b2735274e319f579f7825372b835ab67616d0000b27357d9933679b3bfcd9d2402cbab67616d0000b2735d52d61da86404720996775bab67616d0000b2739173e7ae21836473f3eaf13c'
                        heading1='Artist Playlist'
                        heading2='Spotify'
                        playlistId='5sOToorWhIElP0Kim19Yvi'
                        onClickPlaylistCard={props.onClickPlaylistCard}
                    />
                    <PlaylistCard
                        imageurl='https://mosaic.scdn.co/300/ab67616d00001e02bc36ec5c1339cd48ee7a7992ab67616d00001e02de1a3a5eaa0c75bb18e7b597ab67616d00001e02e6095c382c2853667c1623ebab67616d00001e02ef0d4234e1a645740f77d59c'
                        heading1='Trending Hollywood playlist'
                        heading2='Suruchi'
                        playlistId='3gllZ5gS4ooy7BgtuF7Swi'
                        onClickPlaylistCard={props.onClickPlaylistCard}
                    />
                    <PlaylistCard
                        imageurl='https://mosaic.scdn.co/300/ab67616d00001e02095191f6b96fd9eff585befcab67616d00001e02576521b1bf3ec2fd7fdfcbd5ab67616d00001e02be42c9c9b63ed5ace22af441ab67616d00001e02eaa6b4bfb5954ee5a5a8ce9e'
                        heading1='Romantic Playlist'
                        heading2='Rehan sayed'
                        playlistId='4z5whwZPQuMotubMwwlsLB'
                        onClickPlaylistCard={props.onClickPlaylistCard}
                    />
                    <PlaylistCard
                        imageurl='https://i.scdn.co/image/ab67706f000000034e0f270b8e968aae393328e2'
                        heading1="Trending Valentine's Hits"
                        heading2='Spotify'
                        playlistId='37i9dQZF1DX14CbVHtvHRB'
                        onClickPlaylistCard={props.onClickPlaylistCard}
                    />
                </div>
            </div>
        </div>
    )
}
