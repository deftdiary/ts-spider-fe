import './index.css'
import { Button } from 'antd'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Component } from 'react'

interface State {
  isLogin: boolean
  loaded: boolean
}

class Home extends Component<{}, State> {
  constructor(props = {}) {
    super(props)
    this.state = {
      isLogin: true,
      loaded: false
    }
  }

  componentDidMount() {
    axios.get('/api/isLogin').then((res) => {
      if (!res.data?.data) {
        this.setState({
          isLogin: false
        })
      }
      this.setState({
        loaded: true
      })
    })
  }

  render() {
    const { isLogin, loaded } = this.state
    if (isLogin) {
      if (loaded) {
        return (
          <div className="text">
            <Button type="primary">启动小蜘蛛</Button>
            <Button>展示获取数据</Button>
            <Button type="primary" danger>
              退出
            </Button>
          </div>
        )
      }
      return null
    }
    return <Redirect to="/login" />
  }
}

export default Home
