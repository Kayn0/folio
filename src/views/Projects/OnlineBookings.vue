<template>
<div id="online-bookings">
  <div class="page colour-bg">
    <div>
      <h1>Online Bookings Platform</h1>
      <h5>Modernising the online bookings experience for the Allied Health industry</h5>
      <img class="ob-hero" src="../../assets/images/ob-hero.png" alt="Online Booking Platform Examples" />
    </div>
  </div>

  <div class="page">
    <div class="content spacer-top">
      <h4>Background</h4>
      <p class="space-btm-med">
        Included as part of the service Nookal provides is an Online Bookings system. Customers of Nookal can obtain a hyperlink or button that can be included on their website or in emails which allows their patients to book services online.
      </p>
      <h4>Problem</h4>
      <p class="space-btm-med">
        The Online Booking System was already several years old and since its creation the customers expectations, wants and needs had changed significantly. It was clear that the system’s look and feel had become outdated and needed a refresh.
      </p>
      <h4>Goals</h4>
      <p>
        As the current system is being used by over fifty thousand users every day, it was vital that any changes did not remove any functionality. I wanted to gain insights during the research phase to understand what features would be most beneficial to include. Lastly I wanted to create a modern interface and user experience for the Online Bookings Platform, by putting our customers and their patients at the forefront of my design decisions.
      </p>
    </div>
  </div>

  <div class="page flat-bg auto-height">
    <div class="content spacer-top">
      <h2>RESEARCH<span>.</span></h2>
      <h4>Current State Evaluation</h4>
      <p>To understand the current experience and pain points in the online booking process, I decided to evaluate the current user flow and review the data and information presented to the end user. Here are some of the most important things that I discovered:</p>

      <div class="flexed top-space">
        <div class="note">The look and feel of the platform on web, tablet and mobile is very outdated.</div>
        <div class="note">It would be better to separate services and classes, rather than listing them together.</div>
        <div class="note">The service and class details list makes it difficult to find a specific type.</div>
        <div class="note">The user flow is overly complicated with too many steps.</div>
      </div>
    </div>
  </div>

  <div class="page flat-bg space-pad-med">
    <div class="content">
      <div class="label-heading">Old Online Bookings Interface and User Flow</div>
      <img class="old-flow" src="../../assets/images/ob-old-flow.png" alt="Online Bookings old user flow" />
    </div>
  </div>

  <div class="page no-bg space-top-lge space-btm-lge">
    <div class="content">
      <h4>Competitive Analysis</h4>
      <p>Next I started competitive analysis by reviewing several of our main competitors that were offering similar online booking services. This gave me a solid grounding for understanding the current standards of online booking systems in terms of the features and user expectations. These were the platforms I reviewed:</p>
      <div class="image-content">

        <a class="label-heading" href="https://www.mindbodyonline.com/explore">mindbody</a>
        <img class="screenshot" src="../../assets/images/ob-mind-body.png" alt="Mind and Body screenshot" />
        <div class="flexed">
          <div class="boxed">
            <h6>Strengths</h6>
            <ul>
              <li>Easy to use search feature with sub categories for a quick searching.</li>
              <li>Easy to use search based on location.</li>
              <li>Companies can offer deals and discounts on services.</li>
            </ul>
          </div>
          <div class="boxed">
            <h6>Weaknesses</h6>
            <ul>
              <li>Overly complicated company page.</li>
              <li>Service and class date selector is limited in functionality.</li>
              <li>Distance is calculated in miles.</li>
            </ul>
          </div>
        </div>

        <a class="label-heading" href="https://healthengine.com.au/">Health Engine</a>
        <img class="screenshot" src="../../assets/images/ob-health-engine.png" alt="HealthEngine screenshot" />
        <div class="flexed">
          <div class="boxed">
            <h6>Strengths</h6>
            <ul>
              <li>Easy to find a specific category of healthcare.</li>
              <li>The Booking appointment modal is easy to use.</li>
              <li>Search in the navbar is very user friendly for navigating the site.</li>
            </ul>
          </div>
          <div class="boxed">
            <h6>Weaknesses</h6>
            <ul>
              <li>Messy service and class UI listing</li>
              <li>Site contains many ads.</li>
              <li>Practice information page layout and interface is cluttered making it hard to read.</li>
            </ul>
          </div>
        </div>

        <a class="label-heading" href="https://www.hotdoc.com.au/">HotDoc</a>
        <img class="screenshot" src="../../assets/images/ob-hotdoc.png" alt="Hotdoc screenshot" />
        <div class="flexed">
          <div class="boxed">
            <h6>Strengths</h6>
            <ul>
              <li>Popular search categories for quick searching.</li>
              <li>Easy to see available times for a service.</li>
              <li>Great search filters, allowing the user to search by a wide range of types.</li>
            </ul>
          </div>
          <div class="boxed">
            <h6>Weaknesses</h6>
            <ul>
              <li>Appointment time selection is overly complicated.</li>
              <li>Company details page is cluttered.</li>
              <li>Inconsistent button height and style.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="page flat-bg break-page-med">
    <div class="content">
      <h6>Key Takeaways</h6>
      <p>The research highlighted areas where our Online Bookings Platform had fallen behind our competitors. To ensure the new platform was successful my solutions would have to ensure the following:</p>
      <div class="flexed-col">
        <div class="points">Modern user interface</div>
        <div class="points">Improved input interactions and validation</div>
        <div class="points">Improved practitioner, location and appointment searching and interactions</div>
        <div class="points">Ability to filter services and classes by category types</div>
      </div>
    </div>
  </div>

  <div class="page vert-space-lge">
    <div class="content">
      <h4>Reviewing Client Feedback</h4>
      <p>As the online booking platform had existed for several years, during that time I had gathered feedback from our Clients who had expressed the need for additional functionality. Several features that were suggested were considered for the final feature set, these were: </p>
      <div class="flexed-col">
        <div class="points alt">The ability for the user to book multiple classes at once.</div>
        <div class="points alt">Allow the end user to choose a practitioner before a location and vice versa.</div>
        <div class="points alt">Allow passes to be sold and used for for class bookings.</div>
        <div class="points alt">Able to quickly choose the first available practitioner and location.</div>
        <div class="points alt">Improved interface with less steps to complete a booking.</div>
        <div class="points alt">The ability to customise colours settings to match branding.</div>
      </div>

      <h4 class="space-top-lge ">Round Table Discussions</h4>
      <p class="space-btm-sml">I reached out to several clients who had provided feedback on the Online Bookings platform and was able to meet either locally or on zoom for a round table discussion. These meetings gave me the opportunity to go into more detail of their wants, needs and expectations of the platform.</p>
      <p class="space-btm-sml">A common theme in these meetings was the differing needs of each Clinic in terms of the user journey. Questions in the round table highlighted that much of this was caused by the differing sizes of each clinic. I was able to sketch out and brainstorm ideas in these meetings, which helped to get everyone on the same page. All the clients were open to beta testing, which would help me ensure that the features and mockups generated by these meetings would keep the design process on track. Here are some of the key points from these meetings.</p>

      <div class="flexed space-btm-sml">
        <div class="info-card">Some clinics had many locations with many practitioners. So allowing an easy way for the user to choose from all options available was needed.</div>
        <div class="info-card alt1">Other clinics only had one location and did not need this extra complexity and wanted the user to start by choosing from their practitioners.</div>
      </div>

      <div class="flexed">
        <div class="info-card alt2">Other clinics wanted to be able to provide their patients with an easy way to book and rebook with a specific provider.</div>
        <div class="info-card alt3">All users commented that the mobile and tablet interface was frustrating and difficult to use.</div>
      </div>
    </div>
  </div>

  <div class="page no-bg">
    <div class="content">
      <h4>Personas</h4>
      <p>The research helped me to created three personas to identify the types of people that I am designing the platform for. These included two patients and a manager of a clinic.</p>
        <div class="personas">
          <img class="persona" src="../../assets/images/persona-1.png" alt="Persona - Sally Becker" />
          <img class="persona" src="../../assets/images/persona-2.png" alt="Persona - Damien Bosch" />
          <img class="persona" src="../../assets/images/persona-3.png" alt="Persona - Patrick Stanley" />
        </div>
    </div>
  </div>

  <div class="page vert-space-lge-alt">
    <div class="content">
      <h4>User Journey Flow Charts</h4>
      <p>As discovered in the round table meetings, I needed to create several use cases solutions to meet each of these needs. I used Flow Charts to document the different user journeys:</p>
    </div>
  </div>

  <div class="page flat-bg flexed-col">
    <div class="content">
      <div class="image-label">
        <h6>Full User Journey</h6>
        <p>The clinic has several locations with many practitioners at each location. All locations and practitioners need to be available to the patient.</p>
      </div>
      <img class="user-journey" src="../../assets/images/user-journey-full.png" alt="Full User Journey" />

      <div class="image-label">
        <h6>Standard User Journey</h6>
        <p> The bulk of our users operate from one Location but can have many practitioners. This user flow allows the user start at the practitioner step.</p>
      </div>
      <img class="user-journey" src="../../assets/images/user-journey-standard.png" alt="Standard User Journey" />

      <div class="image-label">
        <h6>Quick User Journey</h6>
        <p>Clinic’s would like to list practitioner’s on their website and would like a link to allow the user to book with the selected practitioner. Also users wanted to be able to provide a quick link for patients to rebook with the same practitioner. This user flow shows how this is achieved.</p>
      </div>
      <img class="user-journey" src="../../assets/images/user-journey-quick.png" alt="Quick User Journey" />
    </div>
  </div>

  <div class="page no-bg vert-space-lge">
    <div class="content">
      <h2>DEFINE<span>.</span></h2>
      <h4>Product Statement</h4>
      <p class="highlight-text">Understanding customer needs to enable them to effectively sell their services, whilst providing their patients a user friendly, streamlined online booking experience.</p>

      <h6>Use Cases</h6>
      <p>The research had given me an in-depth understanding of the problems our customers and their patients were facing. Here is an example of some of the  design requirements and solutions that were included.</p>
      <img class="use-cases space-top-sml" src="../../assets/images/use-cases.png" alt="Project use cases and solutions" />
    </div>
  </div>

  <div class="page vert-space-lge-med">
      <div class="content">
        <h2>CREATE<span>.</span></h2>
        <h4>Wireframe Mockups</h4>
        <p>Using what I had learnt during the research phase, I had a general concept for how to best present the information to the user. I played around with a few different layout types, until I settled on one that I felt worked the best in terms of page space and presentation.</p>
      </div>
  </div>

  <div class="page flat-bg flexed-col">
    <div class="content">
      <div class="image-holder">
        <div class="label-heading">Locations</div>
        <img class="wireframe" src="../../assets/images/ob-wireframe-1.png" alt="Wireframe of Location Selection" />
        <div class="label-heading">Practitioners</div>
        <img class="wireframe" src="../../assets/images/ob-wireframe-2.png" alt="Wireframe of Practitioner Selection" />
        <div class="label-heading">Appointments</div>
        <img class="wireframe" src="../../assets/images/ob-wireframe-3.png" alt="Wireframe of Appointment Selection" />
        <div class="label-heading">Book Appointment</div>
        <img class="wireframe" src="../../assets/images/ob-wireframe-4.png" alt="Wireframe of Appointment Details" />
        <div class="label-heading">Client Details</div>
        <img class="wireframe" src="../../assets/images/ob-wireframe-5.png" alt="Wireframe of Client Details" />
      </div>
    </div>
  </div>

  <div class="page vert-space-lge-med">
    <div class="content">
        <h4>Low Fidelity Mockups</h4>
        <p>Next I moved onto low fidelity mockups to flesh out the interface and the elements. During this phase I was guided by my prior research especially the client feedback. This was done to ensure all relevant features and improvements were included in the system.</p>
    </div>
  </div>
  <div class="page flat-bg flexed-col">
    <div class="content">
      <div class="image-holder">
        <div class="label-heading">Locations</div>
        <img class="wireframe" src="../../assets/images/ob-low-1.png" alt="Low fidelity of Location Selection" />
        <div class="label-heading">Practitioners</div>
        <img class="wireframe" src="../../assets/images/ob-low-2.png" alt="Low fidelity of Practitioner Selection" />
        <div class="label-heading">Appointments</div>
        <img class="wireframe" src="../../assets/images/ob-low-3.png" alt="Low fidelity of Appointment Selection" />
        <div class="label-heading">Book Appointment</div>
        <img class="wireframe" src="../../assets/images/ob-low-4.png" alt="Low fidelity of Appointment Details" />
        <div class="label-heading">Client Details</div>
        <img class="wireframe" src="../../assets/images/ob-low-5.png" alt="Low fidelity of Client Details" />
      </div>
    </div>
  </div>

  <div class="page no-bg vert-space-lge">
    <div class="content">
      <h2>PROTOTYPE<span>.</span></h2>
      <h4>UI Toolkit</h4>
      <img class="toolkit space-top-sml" src="../../assets/images/ob-toolkit.png" alt="UI Toolkit for Online Bookings" />
    </div>
  </div>

  <div class="page vert-space-lge">
    <div class="content">
      <h4>High Fidelity Mockups</h4>
      <div class="image-holder clear-margin">
        <div class="label-details">
          <h6>Make a Booking</h6>
          <p>This shows the user flow when the patient is given the choice to select a location or practitioner in the first step. This solves this problem our customers were having when they have several locations and their patients want to either choose a specific location or practitioner.</p>
        </div>
        <img class="hi-res" src="../../assets/images/ob-high-1.png" alt="High fidelity of Location Selection" />

        <div class="label-details">
          <h6>Select Location</h6>
          <p>All available locations are displayed to the user, allowing the patient to search, filter and order by closest. An extra option “Any Location” has been added to provide a quick solution to patients not wanting to specify a location. This is especially useful when wanting to rebook an appointment with the same practitioner.</p>
        </div>
        <img class="hi-res" src="../../assets/images/ob-high-2.png" alt="High fidelity of Practitioner Selection" />

        <div class="label-details">
          <h6>Select Practitioner</h6>
          <p>Allows the patient to choose from available practitioners. The patient is given the option to search or filter the results. Clicking on ‘More Info’ expands to show a biography of the practitioner. ‘Any Available’ has been added to solve the problem patients were having when not minding who is providing care, but just want to booking a particular service.</p>
        </div>
        <img class="hi-res" src="../../assets/images/ob-high-3.png" alt="High fidelity of Appointment Selection" />

        <div class="label-details">
          <h6>Select Appointment</h6>
          <p>On the appointment screen the patient is shown all possible appointments at the location and with the practitioner they have selected. The patient can search appointments or look for a particular service or class. Appointment are also grouped by appointment type. This solves the problem patients were having trouble finding what they were looking for when there are more than fifty possible services and classes.</p>
        </div>
        <img class="hi-res" src="../../assets/images/ob-high-4.png" alt="High fidelity of Appointment Type Selection" />

        <div class="label-details">
          <h6>Appointment Date and Time</h6>
          <p>Once the patient selects a service or class the element expands showing the available days. A toggle was added to the day selector allowing the patient to choose between month and week views. Once selected the patient is shown available times. Lastly the patient clicks on the book button to confirm their selection. When booking a class the patient is given to option to book another class. This solves the problem patients were having when needing to book several classes at once.</p>
        </div>
        <img class="hi-res" src="../../assets/images/ob-high-5.png" alt="High fidelity of Appointment Date Selection" />
        <img class="hi-res" src="../../assets/images/ob-high-6.png" alt="High fidelity of Appointment Time Selection" />
        <img class="hi-res" src="../../assets/images/ob-high-7.png" alt="High fidelity of Appointment Time Selection" />


        <div class="label-details">
          <h6>Booking Details</h6>
          <p>This screen allows the user to enter their personal information. Checks are done to match the user, if a new user is detected then a new user account is automatically created. Once a payment is made then the appointment is added to the clinics diary and the practitioner is notified. This helps to solve the problem customers were having with duplicate accounts.</p>
        </div>
        <img class="hi-res" src="../../assets/images/ob-high-8.png" alt="High fidelity of Appointment Client Details" />
      </div>
    </div>
  </div>

  <div class="page vert-space-lge-med">
    <div class="content">
      <h4>Platform Customisation</h4>
      <p>A heavily requested feature was the customisation of the Online Bookings platform. It was very important to particular customers who wanted to maintain their branding. For most users this was not so critical, many  customers had asked for different colour options.</p>

      <div class="label-details space-top-med">
        <h6>Customising Colours</h6>
        <p>Within Nookal I have designed a UI to allow our customers to change the colours used within the online bookings platform. Colour setting can be saved to be used for other customer facing communications.  Clicking on the colour settings dropdown provides the user with several preset colour options.</p>
      </div>
      <img class="hi-res" src="../../assets/images/ob-high-9.png" alt="High fidelity of Appointment Client Details" />

      <div class="label-details">
        <h6>Background Image</h6>
        <p>To give out customers further customisation they can also add a background image. I have added several preset background images or the customer has the option to upload their own.</p>
      </div>
      <img class="hi-res" src="../../assets/images/ob-high-10.png" alt="High fidelity of Appointment Client Details" />
      <div class="label-heading space-top-med">Customisation Examples</div>
      <img class="hi-res custom-margin" src="../../assets/images/ob-high-11.png" alt="High fidelity of layout customisation" />
      <img class="hi-res custom-margin" src="../../assets/images/ob-high-12.png" alt="High fidelity of layout customisation" />
      <img class="hi-res custom-margin" src="../../assets/images/ob-high-13.png" alt="High fidelity of layout customisation" />
      <img class="hi-res custom-margin" src="../../assets/images/ob-high-14.png" alt="High fidelity of layout customisation" />
      <img class="hi-res custom-margin" src="../../assets/images/ob-high-15.png" alt="High fidelity of layout customisation" />
      <img class="hi-res custom-margin" src="../../assets/images/ob-high-16.png" alt="High fidelity of layout customisation" />
    </div>
  </div>

  <div class="page no-bg vert-space-lge-med">
    <div class="content">
      <h4>Tablet and Mobile</h4>
      <p>The old tablet and mobile experience was difficult to use and needed a dramatic upgrade. I followed the same process for web when creating the Low, Medium and High Fidelity Mockups. In addition I used a material design, design pattern when deciding on how elements should look and interact.</p>
    </div>
  </div>

  <div class="row-images">
      <div class="tablet-holder">
        <img class="tablet" src="../../assets/images/ipad-1.png" alt="Tablet example of Location Selection" />
        <img class="tablet" src="../../assets/images/ipad-2.png" alt="Tablet example of Practitioner Selection" />
        <img class="tablet" src="../../assets/images/ipad-3.png" alt="Tablet example of Practitioner Selection" />
        <img class="tablet" src="../../assets/images/ipad-4.png" alt="Tablet example of Practitioner Selection" />
        <img class="tablet" src="../../assets/images/ipad-5.png" alt="Tablet example of Practitioner Selection" />
      </div>

      <div class="mobile-holder">
        <img class="mobile" src="../../assets/images/mobile-1.png" alt="Mobile homepage example" />
        <img class="mobile" src="../../assets/images/mobile-2.png" alt="Mobile example of Location Selection" />
        <img class="mobile" src="../../assets/images/mobile-3.png" alt="Mobile example of Practitioner Selection" />
        <img class="mobile" src="../../assets/images/mobile-4.png" alt="Mobile example of Appointment Selection" />
        <img class="mobile" src="../../assets/images/mobile-5.png" alt="Mobile example of Booking Details" />
        <img class="mobile" src="../../assets/images/mobile-6.png" alt="Mobile example of Date Selection" />
        <img class="mobile" src="../../assets/images/mobile-7.png" alt="Mobile example of Time Selection" />
        <img class="mobile" src="../../assets/images/mobile-8.png" alt="Mobile example of Practitioner Selection" />
      </div>
  </div>

  <div class="page vert-space-lge-med">
    <div class="content">
      <h2>TEST<span>.</span></h2>
      <h4>Usability Testing</h4>
      <p>Overall the new platform was received with many positive comments and feedback during the Usability Testing phase. The streamlined flow, vastly improved tablet and mobile experience satisfied the needs of many different sized clinics. During this phase I was able to gather useful feedback from client testers that allowed me to make several improvements to the UI, these included:</p>
      <div class="flexed-col">
        <div class="points alt">Allow services and classes to be grouped by categories.</div>
        <div class="points alt">Further customisation at the end of the sales flow to allow the user to return to the clients website, receive a goodbye message or a combination of both.</div>
        <div class="points alt">Added functionality for services and classes to be reordered.</div>
        <div class="points alt">The option to show or hide qualification information for practitioners.</div>
        <div class="points alt">In the web view the default setting when selecting a date is the month view over the week view.</div>
      </div>
    </div>
  </div>
  <div class="page vert-space-lge-med colour-bg conclusion">
    <div class="content">
      <h4>Conclusion</h4>
      <p>While working on this project I learnt to lean on the information discovered during the Understand phase. This allowed me to not rely on preconceived ideas I had break away from the layout issues plaguing the initial version, especially for tablet and mobile. I thoroughly enjoyed the Usability phase, as it allowed me to take on valuable feedback which only helped to improve the end-users experience.</p>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: "OnlineBookings",
  created() {
    document.title = "Online Bookings";
  },
  computed: {
    isDisabled: true
  }

}

</script>

<style scoped>
  @import "./projects.scss";
</style>