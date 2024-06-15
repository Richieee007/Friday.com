import React from 'react'
import { Avatar as AntdAvatar, AvatarProps } from 'antd'
import { getNameInitials } from '../utilities'

type Props = AvatarProps & {

    name?: string
}

const CustomAvatar = ({ name, style, ...rest }:Props) => {
  return (
    <AntdAvatar 
    alt={name} 
    size='small'
    style={{
        backgroundColor:'#f72f04',
        display: 'flex',
        alignItems: 'center',
        border: 'none',
        ...style
    }}
    {...rest}
    >
      {getNameInitials(name || '')}
    </AntdAvatar>
  )
}

export default CustomAvatar
