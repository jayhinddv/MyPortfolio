import { cn } from '../lib/utils'
import { Download } from 'lucide-react'
import { buttonVariants } from './ui/button'

function DownLoadResumeBtn() {
  return (
    <div className="h-fit w-full mt-2 py-2 px-4">
      <a href="/Resumes.pdf" className={cn(buttonVariants({ variant: "default", size: "lg" }))}>
        <Download className="mx-1" />
        Download Resume
      </a>
    </div>
  )
}

export default DownLoadResumeBtn;
