import { Table } from 'antd'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface newsData {
  title: string
  desc: string
  rank: number
  search: number
}

interface DataProps {
  [key: number]: newsData[]
}

const ShowData: React.FunctionComponent = () => {
  const [data, setData] = useState<newsData[]>([])
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
      key: 'search'
    }
  ]

  useEffect(() => {
    axios.get('/api/showData').then((res) => {
      const data: DataProps = res.data.data 
      let temp: newsData[] = []
      for (let news in data) {
        for (let item in data[news] as newsData[]) {
          temp.push(data[news][item])
        }
      }
      setData(temp)
    })
  })

  return <Table columns={columns} dataSource={data} />
}

export default ShowData
