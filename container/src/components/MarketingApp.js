import { mount } from "marketing/MarketingApp"
import React, { useRef, useEffect } from "react"

const MarketingApp = () => {
    const ref = useRef(null)
    useEffect(() => mount(ref.current), [])
    return (
        <main>
            <header>Container APP header</header>
            <div ref={ref} />
        </main>
    )
}

export default MarketingApp
