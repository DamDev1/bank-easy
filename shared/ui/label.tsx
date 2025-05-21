import React from 'react'
import { Text, View } from 'react-native'

export default function Label({className, text}:{className?:string, text:string}) {
  return (
    <View>
      <Text className={`text-sm font-poppinsmedium ${className}`}>{text}</Text>
    </View>
  )
}