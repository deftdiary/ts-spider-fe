import './index.css'
import { Button, message } from 'antd'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Component } from 'react'
import { Link } from 'react-router-dom'
interface State {
  isLogin: boolean
  loaded: boolean
  data: any
}

class Home extends Component<{}, State> {
  constructor(props = {}) {
    super(props)
    this.state = {
      isLogin: true,
      loaded: false,
      data: {}
    }
    this.handleLoginoutClick = this.handleLoginoutClick.bind(this)
    this.handleSpiderClick = this.handleSpiderClick.bind(this)
  }

  componentDidMount() {
    axios.get('/api/isLogin').then((res) => {
      if (!res.data?.data) {
        this.setState({
          isLogin: false,
          loaded: true
        })
      } else {
        this.setState({
          loaded: true
        })
      }
    })
  }

  handleLoginoutClick() {
    axios.get('/api/logout').then((res) => {
      if (res.data?.data) {
        this.setState({
          isLogin: false
        })
      } else {
        message.error('退出失败')
      }
    })
  }

  handleSpiderClick() {
    axios.get('/api/getData').then((res) => {
      if (res.data?.data) {
        message.success('获取数据成功')
      } else {
        message.error('获取数据失败')
      }
    })
  }

  render() {
    const { isLogin, loaded } = this.state
    if (isLogin) {
      if (loaded) {
        return (
          <>
            <div className="text">
              <Button type="primary" onClick={this.handleSpiderClick}>
                启动小蜘蛛
              </Button>
              <Button><Link to="/showData">展示获取数据</Link></Button>
              <Button type="primary" danger onClick={this.handleLoginoutClick}>
                退出
              </Button>
            </div>
          </>
        )
      }
      return null
    }
    return <Redirect to="/login" />
  }
}

export default Home
