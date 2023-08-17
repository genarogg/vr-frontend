import React, { useState } from "react"

//@ts-ignore
import GamePlay from "../../components/views/demo/Gameplay"

interface GameplayProps {}

const gameplay: React.FunctionComponent<GameplayProps> = () => {
  return (
    <>
      <GamePlay />
    </>
  )
}

export default gameplay
