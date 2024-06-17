'use client'
import styles from './spotify.module.css'
import {useEffect, useState} from 'react'
import getNowPlayingItem from '../../lib/spotify'
import Spotify from '../../components/icons/spotify'
import Image from 'next/image'

export function SpotifyNowPlaying(props) {
  const [loading, setLoading] = useState(true)
  const [result, setResult] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const nowPlayingItem = await getNowPlayingItem(
          props.client_id,
          props.client_secret,
          props.refresh_token,
        )
        setResult(nowPlayingItem)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching now playing item:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [props.client_id, props.client_secret, props.refresh_token])

  return (
    <div>
      {loading ? (
        <section className={styles.nowPlaying}>Loading..</section>
      ) : (
        <section className={styles.mainContainer}>
          <div className={styles.headerContainer}>
            <Spotify />
            <div className={styles.nowPlaying}>
              {result.isPlaying ? 'Now playing' : 'Currently offline'}
              <div className={styles.hidden}>:</div>
            </div>
          </div>
          {result.isPlaying && (
            <div className={styles.songContainer}>
              <Image
                alt={`${result.title} album art`}
                src={result.albumImageUrl}
                className={styles.songImage}
                width={20}
                height={20}
              />
              <div className={styles.songDetails}>
                <a href={result.songUrl} target='_blank' className={styles.songLink}>
                  {result.title}
                </a>
                <span className={styles.songArtist}>
                  {result.artist} <span className={styles.hidden}>-</span>
                </span>
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  )
}
