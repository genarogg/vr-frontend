import React from "react"

//@ts-ignore
import Downloader from "../components/views/downloader/Downloader"

interface downloaderProps {}

const downloader: React.FunctionComponent<downloaderProps> = () => {
  return (
    <>
      <Downloader></Downloader>
    </>
  )
}

export default downloader
