import React, { useState } from "react"
import styled from 'styled-components'


const LeadCaptureDataAnalystJobs = ({cta}) => {

    return (
        <div>
            <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>

            <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
        <form action="https://app.convertkit.com/forms/6254296/subscriptions" 
            class="seva-form formkit-form" 
            method="post" 
            data-sv-form="6254296" 
            data-uid="bcf53e093f" 
            data-format="inline" 
            data-version="5" 
            data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;redirect&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;https://interviewchallenge.assume-wisely.com&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;fathom&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}" 
            min-width="400 500 600 700 800">
        
        <div className='flex space-x-8 justify-around my-1'>
              <div className='text-blue-700 font-semibold py-2 px-4 border border-yellow-500 shadow-md rounded'>
                <input 
                  name="email_address" 
                  aria-label="Email Address" 
                  placeholder="Your Email Address" 
                  required="" 
                  type="email"
                  className='bg-slate-100'
                />
              </div>

              <div>
                <button data-element="submit" className='bg-yellow-300 shadow-md hover:bg-yellow-500 text-blue-700 font-semibold hover:text-blue py-2 px-4 border border-yellow-500 hover:border-transparent rounded'>
                  <div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <span>{cta}</span>
                </button>
              </div>

            </div>
        </form>


        </div>

    )

}

export default LeadCaptureDataAnalystJobs