import { Card, CardPersonal } from "../Card/Card"
import { FeatureInfo, FeatureImage, FeatureStyle } from "../Feature/Feature"
import { Header, HeaderSection } from "../Header/Header"
import { Link } from "../Link/Link"
import Button from "../Button/Button"
import Footer from "../Footer/Footer"
import Practice from "../Practice/Practice"


const Home = (): JSX.Element => {

    return (
        <>

        <Header></Header>
        
        <div>
            <div className="intro-section">
                <div className="intro-text">
                    <h2>Become the CSS Officer That Pakistan is Waiting For</h2>
                </div>
            </div>
            
            <div className="flex-row justify-center">
                <video className="intro-video" loop controls src="/videos/ocean.mp4">
                    Your browser doesn't support videos.
                </video>
            </div>
            
            <div className="mt-2">
                <HeaderSection heading="Assalaam-o-Alaikum," mainText="I'm Faraz Ahmad.">
                    Are you feeling stuck or overwhelmed in your coding journey? Don't worry, I've got your back! Together, we'll work to level up your skills, increase your earning potential, and build a brighter future.
                </HeaderSection>
            </div>
            



            <div className="flex-row justify-center mb-7">
                <CardPersonal heading="300+" color="bright" >Students taught</CardPersonal>
                <CardPersonal heading="300+" color="pink" >YouTube fans</CardPersonal>
                <CardPersonal heading="6+"   color="purple" >Years of experience</CardPersonal>
                <CardPersonal heading="10+"  color="blue" >CSS courses</CardPersonal>
            </div>
            



            <FeatureStyle></FeatureStyle>
            <HeaderSection heading="FEATURES" mainText="Why The National Services Academy?"></HeaderSection>

            <div className="feature-container mx-auto my">
                <FeatureInfo heading="Fast-track your learning" mainText="No fluff, just the good stuff!"
                    icon="clock" color="secondary" >I don't want to waste your time with boring stuff you don't need. So I've made sure my courses are clear, concise, to the point, and free of technical jargon. No rambling or repetition, just the essentials you need to succeed, explained in plain English.
                </FeatureInfo>
                
                <FeatureImage image="clock" color="secondary" ></FeatureImage>
            </div>

            <div className="feature-container mx-auto my">
                <FeatureImage image="media" color="pink" ></FeatureImage>
                
                <FeatureInfo heading="Step-by-step lessons" mainText="Easy-to-follow lessons"
                    icon="media" color="pink" >I know learning to code can be tough. So I've carefully organized my courses into simple, bite-sized pieces to help you progress smoothly, one step at a time. I'll guide you through each step of the way so you won't feel overwhelmed.
                </FeatureInfo>
            </div>

            <div className="feature-container mx-auto my">
                <FeatureInfo heading="Perfect mix of theory and practice" mainText="Hands-on learning"
                    icon="settings" color="purple" >I believe the best way to learn is by actually doing. That's why my courses teach you the essential theory and provide practical exercises. You'll be able to practice everything you learn and apply it to real-life situations.
                </FeatureInfo>
                
                <FeatureImage image="settings" color="purple" ></FeatureImage>
            </div>
            
            <div className="feature-container mx-auto my">
                <FeatureImage image="world" color="green" ></FeatureImage>
                
                <FeatureInfo heading="Get ready for the job" mainText="Real-world projects"
                    icon="world" color="green" >My courses are designed to prepare you for real-world jobs and interviews. With in-depth, comprehensive courses packed with real-world examples and exercises, you'll be ready to take on any challenge that comes your way.
                </FeatureInfo>
            </div>
            
            <div className="feature-container mx-auto my">
                <FeatureInfo heading="From beginner to pro" mainText="Courses for everyone"
                    icon="team" color="blue" >Whether you're looking to learn a new language or just brushing up on your skills, I've got you covered. I offer a wide variety of courses so you can pick and choose what's most relevant to you. Plus, I make sure my courses are fun and engaging so you won't get bored.
                </FeatureInfo>
                
                <FeatureImage image="team" color="blue" ></FeatureImage>
            </div>
            
            <div className="feature-container mx-auto my">
                <FeatureImage image="verified" color="bright" ></FeatureImage>
                
                <FeatureInfo heading="Fun and engaging videos" mainText="Trusted by millions"
                    icon="verified" color="bright" >I've taught millions of people how to code and become professional software engineers through my YouTube channel and online courses. I'm humbled and thrilled to be a part of their programming journeys! When you join us, you're joining a group of like-minded people who are all working towards the same goal.
                </FeatureInfo>
            </div>





            <FeatureStyle></FeatureStyle>
            <HeaderSection heading="TOP-SELLING COURSES" mainText="Level Up Your CSS Skills">Whether you're looking to switch to a career in tech or to advance in your current role, my courses give you the knowledge and experience you need to succeed.</HeaderSection>

            <div className="card-container mx-auto">
                <Card heading="Philosophy" linkText="Free" banner="started"
                    href="https://Google.com" >A step-by-step guide to building web apps with React 18+ and TypeScript
                </Card>

                <Card heading="Psycology" linkText="Free" banner="guide"
                    href="https://Google.com" >Everything you need to program in Python in one course (includes 3 real-world projects)
                </Card>

                <Card heading="American History" linkText="Free" banner="documentation"
                    href="https://Google.com" >Master Java - the most popular programming language underpinning most apps and websites
                </Card>
            </div>

            <div className="flex-row justify-center">
                <Button color="primary" size="lg" onClick={() => true }>VIEW ALL COURSES</Button>
            </div>

            <div className="flex-row justify-center mt-2 mb-10">
                <p>Not sure where to start? Check out our</p> &nbsp;
                <Link className="" href="/" >learning paths.</Link>
            </div>





            <FeatureStyle></FeatureStyle>
            <HeaderSection heading="Testimonials" mainText="What my students say"></HeaderSection>

            <div className="align-center flex-row justify-center mt-4 mb-10">
                <div className="icon icon-star icon-sm"></div>
                <div className="icon icon-star icon-sm"></div>
                <div className="icon icon-star icon-sm"></div>
                <div className="icon icon-star icon-sm"></div>
                <div className="icon icon-star-half icon-sm"></div>
                <p className="ml-1" >4.7 out of 5 based on</p> &nbsp;
                <Link className="" href="/" >100+ reviews</Link>
            </div>





            <Practice></Practice>
        </div>


        <FeatureStyle></FeatureStyle>
        <div className="mt-n-14">
            <Footer></Footer>
        </div>

        </>
    )
}

export default Home