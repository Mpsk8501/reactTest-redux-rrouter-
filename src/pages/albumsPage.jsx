import { useEffect } from 'react'
import 'antd/dist/antd.css'

import { useDispatch, useSelector } from 'react-redux'
import { loadAlbums } from '../redux/actions'
import { Carousel } from 'antd'

const contentStyle = {
  height: '300px',
  textAlign: 'center',
  background: '#364d79',
  color: '#fff',
  lineHeight: '300px',
  padding: '20px',
  margin: '0',
}

const AlbumsPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadAlbums())
  }, [dispatch])

  const albums = useSelector((state) => state.albums)

  return (
    <section>
      <div className="container">
        <h1 className={'h1'}>AlbumsPage</h1>
        <Carousel rows={3} slidesToShow={3} slidesToScroll={3}>
          {albums.map((album) => {
            return (
              <div key={album.id} style={contentStyle}>
                <p style={contentStyle}>{album.title}</p>
                {/* <p>{JSON.stringify(album)}</p> */}
              </div>
            )
          })}
        </Carousel>
      </div>
    </section>
  )
}

export default AlbumsPage
