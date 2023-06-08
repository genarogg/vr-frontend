import * as React from "react"

interface SectionProps {
  id: string
  css?: string
  children: any
  title: string
}

const Section: React.FunctionComponent<SectionProps> = ({
  id,
  css,
  children,
  title,
}) => {
  return (
    <>
      <section id={id} className={`${css} sections`}>
        <h2>{title}</h2>
        {children}
      </section>
    </>
  )
}

export default Section
