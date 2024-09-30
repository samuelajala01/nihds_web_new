import Link from 'next/link';

const Footer = () => {
    return ( <><footer className="text-black">
      <div>
        <div>
            <div>LOGO</div>
            <div>
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
        <div></div>
      </div>
    </footer></> );
}
 
export default Footer;