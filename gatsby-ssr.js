import React from "react"

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="marketingsecrets-widget"
      async
      src="https://www.marketingsecrets.ai/embed/ac/widget.js"
      data-ac="ac_6c4a3df28a3e0df1b3f285114d77512bca0cf120dffad324"
      data-position="bottom-right"
      data-display="icon"
      data-icon="message-circle"
    />,
  ])
}
