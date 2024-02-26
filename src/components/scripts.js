import React, { useState } from "react"
import Hotjar from '@hotjar/browser'

// hotjar variables
const siteId = 3881909;
const hotjarVersion = 6;

const HotJarScript = () => {
    Hotjar.init(siteId, hotjarVersion)
}

export default HotJarScript