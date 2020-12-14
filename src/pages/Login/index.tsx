import { Form, Input, Button, message } from 'antd'
import './index.css'
import axios from 'axios'
import qs from 'qs'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'

const layout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 16
  }
}
const tailLayout = {
  wrapperCol: {
    offset: 9,
    span: 16
  }
}
const FormLogin = () => {

  const [login, setLogin] = useState(false)

  const onFinish = (values: any) => {
    console.log(values) // df-log
    axios
      .post(
        '/api/login',
        qs.stringify({
          password: values.password
        }),
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }
      )
      .then((res) => {
        if (res.data?.data) {
          setLogin(true)
        } else {
          message.error(res.data.errMsg)
        }
      })
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return !login ? (
    <div className="formtext">
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码!'
            }
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            确定
          </Button>
        </Form.Item>
      </Form>
    </div>
  ) : <Redirect to="/" />
}

export default FormLogin
