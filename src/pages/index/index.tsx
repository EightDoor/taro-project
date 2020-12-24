import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { View, Button, Text } from '@tarojs/components'
import {AtButton} from 'taro-ui';

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.less'

const Index = ()=>{
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <>
      <View className='index'>
        <Button className='add_btn' onClick={()=> dispatch(add())}>+</Button>
        <Button className='dec_btn' onClick={()=>dispatch(minus())}>-</Button>
        <Button className='dec_btn' onClick={()=>dispatch(asyncAdd())}>async</Button>
        <View><Text>{counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>
        <View>
          <AtButton type='primary'>测试</AtButton>
        </View>
      </View>
    </>
  )
}
export default Index

