import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'antd'
import 'antd/dist/antd.css'
import classes from './nativeModal.module.scss'

const NativeModal = ({
  isNativeModalVisible,
  handleOk = null,
  handleNativeCancel = null,
}) => {
  if (!isNativeModalVisible) {
    return null
  }
  return ReactDOM.createPortal(
    <section className={classes.nativeModal}>
      <div className={classes.modalWrapper}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <Button onClick={handleNativeCancel} type="primary">
          Ok
        </Button>
        <Button onClick={handleNativeCancel} type="ghost">
          cancel
        </Button>
      </div>
    </section>,
    document.querySelector('#root')
  )
}

export default NativeModal
