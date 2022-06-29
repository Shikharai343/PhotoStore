import React, { FC } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

export interface IIconProps {
  name: string;
  size: number;
  color: string;
}

const IconComponent: FC<IIconProps> = (props) => {
  const {name, size, color} = props;
  return (
      <Icon name={name} size={size} color={color} />
  )
}

export default IconComponent