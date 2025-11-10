import {cn} from '@/lib/utils'

const Container = ({children, className}) => {
  return (
    <div className={cn('max-w-5xl mx-auto py-10', className)}>{children}</div>
  )
}

export default Container