import { ReactNode } from "react"

const FeatureStyle = (): JSX.Element => {
  return (
    <>
      <div className="overflow-hidden mb-n-9">
          <div className="relative">
            <div className="justify-center">
              <div className="top-blur-m"></div>
            </div>
          </div>
          <hr className="line-gradient" />
      </div>
    </>
  )
}

type colors = 'primary' |'secondary' | 'bright' | 'blue' | 'pink' | 'red' | 'purple' | 'green'
type icons = 'clock' | 'media' | 'settings' | 'world' | 'team' | 'verified'

interface FeatureInfoProps {
  children?: ReactNode
  heading: string
  mainText: string
  color: colors
  icon: icons
}

const FeatureInfo = ({heading, mainText, children, color, icon}: FeatureInfoProps): JSX.Element => {
  return (
    <>
      <div className="feature">
        <div className="feature-info-container">

          <div className={`feature-info-icon bg-${color}`}>
            <span className={`icon icon-${icon} filter-${color}`}></span>
          </div>

          <div className={`feature-info-text shine-${color}`}>
            <span className={`heading text-${color}`}> {heading} </span>
            <span className="main"> {mainText} </span>
            <span className="text"> {children} </span>
          </div>
        </div>
      </div>
    </>
  )
}

interface FeatureImageProps {
  color: colors
  image: icons
}

const FeatureImage = ({image, color}: FeatureImageProps): JSX.Element => {
  return (
    <>
      <div className="feature-image-container">
        <div className={`icon icon-${image} filter-${color} feature__image`}></div>
      </div>
    </>
  )
}


export { FeatureInfo, FeatureImage, FeatureStyle }