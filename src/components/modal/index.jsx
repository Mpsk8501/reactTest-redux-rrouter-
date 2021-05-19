import { Modal } from 'antd'
import 'antd/dist/antd.css'

const ModalComponent = ({
  isModalVisible,
  handleOk = null,
  handleCancel = null,
  data = '',
  title = 'Результат игры',
}) => {
  return (
    <Modal
      title={title}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>{data}</p>
    </Modal>
  )
}

export default ModalComponent
