import { useEffect } from 'react'
import 'antd/dist/antd.css'
import { Card, Col, Row } from 'antd'

import { useDispatch, useSelector } from 'react-redux'
import { loadUsers } from '../redux/actions'

const UserPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadUsers())
  }, [dispatch])

  const users = useSelector((state) => state.users)

  return (
    <section>
      <div className="container">
        <h1 className={'h1'}>UserPage</h1>
        <Row gutter={16}>
          {users.map((user) => {
            return (
              <Col key={user.id} span={8}>
                <Card style={{ marginBottom: 20 }} title={user.name}>
                  <p>{user.website}</p>
                  {/* <p>{JSON.stringify(user)}</p> */}
                  <p>{user.phone}</p>
                </Card>
              </Col>
            )
          })}
        </Row>
      </div>
    </section>
  )
}

export default UserPage
