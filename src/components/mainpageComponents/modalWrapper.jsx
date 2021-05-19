import { useState } from 'react'
import ModalComponent from '../modal'
import NativeModal from '../modal/nativeModal'
import 'antd/dist/antd.css'
import { Button } from 'antd'
const ModalWrapper = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isNativeModalVisible, setIsNativeModalVisible] = useState(false)
  const handleCancel = () => {
    setIsModalVisible(false)
  }
  const handleNativeCancel = () => {
    setIsNativeModalVisible(false)
  }
  const showModal = () => {
    setIsModalVisible(true)
  }
  const showNativeModal = () => {
    setIsNativeModalVisible(true)
  }

  return (
    <section style={{ overflow: 'hidden' }}>
      <div className="container">
        <h2 className={'h2'}>ModalWrapper</h2>
        <ModalComponent
          handleCancel={handleCancel}
          isModalVisible={isModalVisible}
        />
        <NativeModal
          handleNativeCancel={handleNativeCancel}
          isNativeModalVisible={isNativeModalVisible}
        />
        <Button onClick={showModal} type="primary">
          open ant modal
        </Button>
        <br />

        <Button style={{ marginTop: 10 }} onClick={showNativeModal}>
          open native modal
        </Button>
      </div>
    </section>
  )
}

export default ModalWrapper
