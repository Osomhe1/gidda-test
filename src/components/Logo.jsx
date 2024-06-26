import { Image } from '@nextui-org/react'
import { Link } from 'react-router-dom'

export default function Logo() {
  const imgLogo = `https://s3.amazonaws.com/appforest_uf/f1675031132769x885606220423525500/GiddaaLogoGreen.svg`

  return (
    <div>
      <Link to='/'>
        <Image className='w-20 md:wfull ml-3' src={imgLogo} />
      </Link>
    </div>
  )
}
