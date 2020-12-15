import { Table } from 'antd'
import { useEffect, useState } from 'react'
import axios from 'axios'

const ShowData: React.FunctionComponent = () => {
  // to-do any change 
  const [data, setData] = useState<any[]>([])
  const columns = [
    {
      title: '排名',
      dataIndex: 'rank',
      key: 'rank'
    },
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: '描述',
      dataIndex: 'desc',
      key: 'desc'
    },
    {
      title: '搜索热度',
      dataIndex: 'search',
      key: 'searchk'
    }
  ]

  useEffect(() => {
    axios.get('/api/showData').then((res) => {
      const { data } = res.data
      let temp: any[] = []
      for (let news in data) {
        for (let val in data[news]) {
          temp.push(data[news][val])
        }
      }
      setData(temp)
    })
  })

  return <Table columns={columns} dataSource={data} />
}

export default ShowData
