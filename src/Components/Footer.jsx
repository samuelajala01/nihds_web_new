import Link from 'next/link';
import Image from "next/image";
import newbg from "../../public/assets/hero.png"

const Footer = () => {
    return ( <><footer className="text-black">
      <div className=' p-[5vw]'>
        <div className="block md:flex justify-around mb-24">
            <div className='md:flex-1 mb-4'><Image src={newbg} className='w-80 mx-auto'/></div>
            <div className='block md:flex md:flex-1 md:w-80 md:justify-around bg-blue-600 text-center md:text-balance'>
                <ul>
                    <li><Link href="/">About</Link></li>
                    <li><Link href="/">Technology</Link></li>
                    <li><Link href="/">Resource</Link></li>
                    <li><Link href="/">Innovation</Link></li>
                    <li><Link href="/">Research</Link></li>
                </ul>
                <ul>
                    <li><Link href="/">Community</Link></li>
                    <li><Link href="/">Discussions</Link></li>
                    <li><Link href="/">Forums</Link></li>
                    <li><Link href="/">Webinars</Link></li>
                    <li><Link href="/">Inspiration</Link></li>
                    <li><Link href="/">Channels</Link></li>
                    <li><Link href="/">Brainstorms</Link></li>
                </ul>
                <ul>
                    <li><Link href="/">Membership</Link></li>
                    <li><Link href="/">Events</Link></li>
                    <li><Link href="/">Careers</Link></li>
                    <li><Link href="/">Benefits</Link></li>
                   
                </ul>
                
            </div>
        </div>
      </div>
        <div className='border-t-2 mt-30'>Ade is a boy</div>
    </footer></> );
}
 
export default Footer;