<template>
  <div id="clinical-notes">
    <div class="page colour-bg-alt-1">
      <div>
        <h1>Clinical Notes Redesign</h1>
        <h5>Supporting Healthcare practitioners by facilitating streamlined clinical notes</h5>
        <img class="ob-hero" src="../../assets/images/notes/notes-hero.png" alt="Clinical Notes Examples" />
      </div>
    </div>

    <div class="page">
      <div class="content spacer-top">
        <h4>Background</h4>
        <p class="space-btm-med">
          Nookal is a Practice Management Software Company for the Allied Health Industry. The software enables the treatment of patients by health care providers in a range of disciplines. Part of a health care providers role when treating a patient is to complete a clinical note after each appointment, which is achieved by text input.
        </p>
        <h4>Problem</h4>
        <p class="space-btm-med">
          Legally a health care provider is required to write a clinical note for each appointment. On average a provider will spend at least 1 hour a day writing clinical notes. Adding functionality to speed up this process would be a massive benefit to all users who need to write clinical notes.
        </p>
        <h4>Goals</h4>
        <p>
          I wanted to take steps to ensure I had a deep understanding of the problems providers were having when writing clinical notes. As the system is being used everyday by thousands of providers it was important to find out what the system is doing well and what could be improved upon. It was also important that any new functionality would integrate seamlessly into the current flow.
        </p>
      </div>
    </div>

    <div class="page flat-bg auto-height">
      <div class="content spacer-top">
        <h2>RESEARCH<span>.</span></h2>
        <h4>Interviews</h4>
        <p>I started this project with several in person interviews which were held on-site. These gave me insight into the day to day operations of a clinic. During this time I was also able to attend several appointments to experience firsthand the process of treating a patient. It was interesting to see how the practitioners utilised the platform to look up client information and write clinical notes.</p>
        <p class="space-top-sml"> I noticed several pain points during this process and was able to follow up with questions to better understand these issues. Some of the problems I was able to identify though this process included:</p>
        <div class="flexed-col top-space">
          <div class="points">Practitioners have to sort through many clinical notes to find the one they need.</div>
          <div class="points">When choosing a clinical note, many of the options shown are for other practitioners.</div>
          <div class="points">Clinical notes can often be very similar between patients with much duplication.</div>
          <div class="points">Each practitioner uses abbreviations in notes and tend to have their own standards.</div>
          <div class="points">Practitioners asked to be able to record the appointment to be able to replay later.</div>
        </div>
      </div>
    </div>

    <div class="page auto-height">
      <div class="content spacer-top">
        <h4>Customer Survey</h4>
        <p>Next I send out a survey to our customer base with open and closed questions to further understand if what was enjoyed about the clinical note section and if there were any additional pain points.</p>

        <div class="flexed-col top-space">
          <div class="points alt">How many patients a week do you see?</div>
          <div class="points alt">Approximately how much time do you spend writing clinical notes each week?</div>
          <div class="points alt">How many different clinical notes templates do you use?</div>
          <div class="points alt">How often do you use abbreviations in a clinical note?</div>
          <div class="points alt">Do you experience any frustration with writing clinical notes? If so what?</div>
          <div class="points alt">Is there anything that would make your life easier when writing a clinical note?</div>
          <div class="points alt">Do you use a mobile or tablet to write clinical notes?</div>
        </div>

        <p class="top-space">The results that came back reviled many insights into possible improvements:</p>
        <img class="wireframe space-top-sml" src="../../assets/images/notes/notes-stats.png" alt="Clinical Notes survey results" />
      </div>
    </div>

    <div class="page vert-space-lge">
      <div class="content">
        <h4>Current State Evaluation</h4>
        <p>Talking to practitioners early in the research phase gave me a fresh outlook when reviewing the current flow. This allowed me to quickly notice several strengths and weaknesses.</p>

        <h6 class="top-space">Strengths</h6>
        <div class="alt-flexed">
          <div class="note">The history and documents tab shows important information whilst writing notes.</div>
          <div class="note">Practitioners can save the clinical note as a draft to return to later.</div>
          <div class="note">Practitioners like to finalise the clinical note to mark it as completed.</div>
        </div>

        <h6 class="top-space">Weaknesses</h6>
        <div class="flexed">
          <div class="note">Practitioners have to choose between a large number of clinical note templates.</div>
          <div class="note">Need to receive a notification when they have uncompleted clinical notes.</div>
          <div class="note">It can be difficult to write clinical notes on a phone.</div>
          <div class="note">There is no easy way to add quickly add often used phases or abbreviations.</div>
        </div>
        <img class="wireframe space-top-med img-bg" src="../../assets/images/notes/cn-flow-chart.png" alt="Clinical notes flow chart" />
      </div>
    </div>

    <div class="page vert-space-lge">
      <div class="content">
        <h4>Personas</h4>
        <p>Two personas were created to capture the range of needs and pain points practitioners are having when creating clinical notes.</p>
        <img class="screenshot space-top-sml" src="../../assets/images/notes/persona-1.png" alt="Persona details" />
        <img class="screenshot space-top-sml" src="../../assets/images/notes/persona-2.png" alt="Persona details" />
      </div>
    </div>

    <div class="page flat-bg vert-space-lge">
      <div class="content">
        <h4>Voice To Text</h4>
        <p>After consultation with stakeholders it was decided to add a voice to text component to facilitate the recording of appointments, whilst speeding up the clinical note taking process. Each text conversion would cost Nookal money so it was necessary that this was covered in the credit charge.</p>
        <img class="screenshot space-top-sml" src="../../assets/images/notes/voice-flow-chart.png" alt="Voice to text flow chart" />
        <img class="screenshot space-top-sml" src="../../assets/images/notes/voice-use-case.png" alt="Voice to text use case diagram" />
      </div>
    </div>

    <div class="page vert-space-lge">
      <div class="content">
        <h2>DEFINE<span>.</span></h2>
        <h4>Use Cases</h4>
        <img class="screenshot img-bg" src="../../assets/images/notes/notes-req.png" alt="Clinical note requirements and solutions" />
      </div>
    </div>

    <div class="page vert-space-lge">
      <div class="content">
        <h2>CREATE<span>.</span></h2>
        <h4>Wireframes</h4>
        <p>The research had given me an idea for a general concept in how to present the information to the user. I played around with a few different layout types, until I settled on one that I felt worked the best in terms of page space and presentation.</p>
      </div>
    </div>
    <div class="page flat-bg flexed-col">
      <div class="content">
        <div class="image-holder">
          <div class="label-heading">Clinical Note View</div>
          <img class="wireframe" src="../../assets/images/notes/notes-wire-1.png" alt="Wireframe dashboard example" />
          <div class="label-heading">Clinical Note Selector</div>
          <img class="wireframe" src="../../assets/images/notes/notes-wire-2.png" alt="Wireframe task details example" />
          <div class="label-heading">Clinical Note Preferences</div>
          <img class="wireframe" src="../../assets/images/notes/notes-wire-3.png" alt="Wireframe customers page example" />
          <div class="label-heading">Voice to Text Controls</div>
          <img class="wireframe" src="../../assets/images/notes/notes-wire-4.png" alt="Wireframe customer details example" />
        </div>
      </div>
    </div>

    <div class="page vert-space-lge-med">
      <div class="content">
        <h4>Low Fidelity Mockups</h4>
        <p>The low fidelity mockups allow me to flesh out the interface with more detail and focus on how concepts for how page elements could interact with the user. The mockups below show the standard user journey when booking an appointment.</p>
      </div>
    </div>

    <div class="page flat-bg flexed-col">
      <div class="content">
        <div class="image-holder">
          <div class="label-heading">Clinical Notes</div>
          <img class="wireframe" src="../../assets/images/sales/sales-low-1.png" alt="Low fidelity of the Dashboard" />
          <div class="label-heading">Clinical Note Selector</div>
          <img class="wireframe" src="../../assets/images/sales/sales-low-1.png" alt="Low fidelity of Task Details" />
          <div class="label-heading">Clinical Note Preferences</div>
          <img class="wireframe" src="../../assets/images/sales/sales-low-1.png" alt="Low fidelity of the Customers Page" />
          <div class="label-heading">Voice to Text Controls</div>
          <img class="wireframe" src="../../assets/images/sales/sales-low-1.png" alt="Low fidelity of Customer Details" />
        </div>
      </div>
    </div>

    <div class="page vert-space-lge-med">
      <div class="content">
        <h2>PROTOTYPE<span>.</span></h2>
        <h4>High Fidelity Mockups</h4>
        <div class="image-holder clear-margin">
          <div class="label-details">
            <h6>Clinical Notes Page</h6>
            <p>The new clinical notes page updates the user interface to fit in with site wide design updates, whilst presenting a clean updated look and feel. Some design elements have been kept from the old interface to give the users some familiarity with the page.</p>
          </div>
          <img class="hi-res" src="../../assets/images/notes/notes-high-1.png" alt="High fidelity of the Clinical notes page" />

          <div class="label-details">
            <h6>Clinical Note Selector</h6>
            <p>The flow for selecting a clinical note has changed to streamline the process. Previously the practitioner would first need be presented with a clinical notes list which they would need to select from. Selecting a clinical note  has now been added to the top of the page, which allows the practitioner to easily view and select clinical notes.</p>
          </div>
          <img class="hi-res" src="../../assets/images/notes/notes-high-2.png" alt="High fidelity of Practitioner Selection" />

          <div class="label-details">
            <h6>Clinical Note Preferences</h6>
            <p>Another problem practitioners were having when selecting a clinical note was the large number of options to select from. Research showed that practitioners only need a faction of what was being presented. To solve this issue I added Clinical Note preferences, so practitioners can easily turn clinical notes on or off for them to use.</p>
          </div>
          <img class="hi-res" src="../../assets/images/notes/notes-high-3.png" alt="High fidelity of Customer Flow" />

          <div class="label-details">
            <h6>Voice to Text</h6>
            <p>When designing the voice to text it was important that it would integrate seamlessly within the current clinical notes system. The following mockups show the steps a user would take to record their voice, check the results and choose to convert it to text within a clinical note. Voice to text solves the problem users were having wanting to record their appointments and helps to speeding up the note taking process.</p>
          </div>
          <img class="hi-res" src="../../assets/images/notes/notes-high-4.png" alt="High fidelity of the voice to text flow" />
          <img class="hi-res" src="../../assets/images/notes/notes-high-5.png" alt="High fidelity of the voice to text flow" />
          <img class="hi-res" src="../../assets/images/notes/notes-high-6.png" alt="High fidelity of the voice to text flow" />
          <img class="hi-res" src="../../assets/images/notes/notes-high-7.png" alt="High fidelity of the voice to text flow" />
          <img class="hi-res" src="../../assets/images/notes/notes-high-8.png" alt="High fidelity of the voice to text flow" />

          <div class="label-details">
            <h6>Snippets</h6>
            <p>Snippets provide a way for a user to save commonly used phrases or abbreviations to then be used later within clinical notes.  This solves the problem practitioners were having often rewriting similar notes for many patients, and helps the process users were having writing clinical notes on tablets and phones.</p>
          </div>
          <img class="hi-res" src="../../assets/images/notes/notes-high-9.png" alt="High fidelity of adding a snippet" />
          <img class="hi-res" src="../../assets/images/notes/notes-high-10.png" alt="High fidelity of adding a snippet" />
        </div>
      </div>
    </div>

    <div class="page no-bg vert-space-lge-med">
      <div class="content">
        <h4>Tablet and Mobile</h4>
        <p>The old tablet and mobile experience was difficult to use and needed a dramatic upgrade. I followed the same process for web when creating the Low, Medium and High Fidelity Mockups. In addition I used a material design, design pattern when deciding on how elements should look and interact.</p>
      </div>
    </div>

    <div class="row-images notes">
      <div class="tablet-holder">
        <img class="tablet" src="../../assets/images/notes/notes-tablet-1.png" alt="Tablet example of the clinical notes page" />
        <img class="tablet" src="../../assets/images/notes/notes-tablet-2.png" alt="Tablet example of the Tasks list" />
        <img class="tablet" src="../../assets/images/notes/notes-tablet-3.png" alt="Tablet example of Task details" />
        <img class="tablet" src="../../assets/images/notes/notes-tablet-4.png" alt="Tablet example of Customers List" />
        <img class="tablet" src="../../assets/images/notes/notes-tablet-5.png" alt="Tablet example of Customers List" />
      </div>

      <div class="mobile-holder">
        <img class="mobile" src="../../assets/images/notes/notes-mobile-1.png" alt="Mobile homepage example" />
        <img class="mobile" src="../../assets/images/notes/notes-mobile-2.png" alt="Mobile example of Location Selection" />
        <img class="mobile" src="../../assets/images/notes/notes-mobile-3.png" alt="Mobile example of Practitioner Selection" />
        <img class="mobile" src="../../assets/images/notes/notes-mobile-4.png" alt="Mobile example of Appointment Selection" />
        <img class="mobile" src="../../assets/images/notes/notes-mobile-5.png" alt="Mobile example of Booking Details" />
      </div>
    </div>


    <div class="page vert-space-lge">
      <div class="content">
        <h2>TEST<span>.</span></h2>
        <h4>Usability Testing</h4>
        <p>Usability testing was completed remotely, giving the user tasks to compete and recording the results over video. Usability testing results were much improved from the old version with time taken to complete tasks being reduced, especially around taking longer notes. </p>
        <p class="space-top-sml"> There were some significant changes to the clinical notes section, so I had some concerns this would frustrate current users. However during usability testing, uses were impressed by the improved look, feel and simplified workflow. </p>
      </div>
    </div>

    <div class="page vert-space-lge-med colour-bg-alt-1 conclusion">
      <div class="content">
        <h4>Conclusion</h4>
        <p>This project has been successful in updating the look and feel and functionality of a critical component in the Nookal platform. Since its release the number of requests from support around clinical note improvements has decreased by 37% over the first 6 months. There has also been an increase of the number of credits being spent with the introduction of voice to text, further increasing to the revenue of the business. </p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "ClinicalNotes",
  created() {
    document.title = "Clinical Notes Redesign";
  },
}
</script>

<style scoped>
  @import "./projects.scss";
  @import "./clincial-notes.scss";
</style>