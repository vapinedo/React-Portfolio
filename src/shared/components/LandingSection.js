import React from 'react'
import "@assets/css/shared/LandingSection.css"

export default function LandingSection({children, sectionId }) {
  return (
    <section className="landing-page-section" id={sectionId}>
      {children}
    </section>
  )
}
