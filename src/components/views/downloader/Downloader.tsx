import React, { FunctionComponent, useContext } from "react"
import AuthLayout from "../../AuthLayout/AuthLayout"
import Img from "../../nano/Img"

interface DownloaderProps {}

const Downloader: FunctionComponent<DownloaderProps> = () => {

  return (
    <>
      <AuthLayout>
        <div className="downloader">
          {/* <Img css={} type="bg">


          </Img> */}
        </div>
      </AuthLayout>
    </>
  )
}

export default Downloader
