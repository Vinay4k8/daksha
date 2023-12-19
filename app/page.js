import Banner from '@/components/Banner'
import ComingSoon from '@/components/ComingSoon'
import Events from '@/components/Events'
import Registration from '@/components/Registration'


export const metadata={
  title:"Home | AU",

}

export default function Home() {
  return (
   <main>
   <Banner/>
   <Events/>
   <Registration/>
   <ComingSoon/>
   </main>
  )
}
