<template>
  <div id="sales-dashboard">
    <div class="page colour-bg-alt">
      <div>
        <h1>Sales Dashboard</h1>
        <h5>Effectively managing the signup journey for Nookal customers</h5>
        <img class="ob-hero" src="../../assets/images/sales/sales-hero.png" alt="Sales dashboard hero images" />
      </div>
    </div>


    <div class="page">
      <div class="content spacer-top">
        <h4>Background</h4>
        <p class="space-btm-med">
          Nookal is a Practice Management Software Company for the Allied Health Industry. The Nookal Sales Dashboard enables sales staff to effectively manage client information and the signup journey of clients.
        </p>
        <h4>Problem</h4>
        <p class="space-btm-med">
          Before the existence of the Sales Platform the signup journey was managed with Excel and a basic website showing a client list. Due to the recent growth of the business, effectively managing an increasing number of customers throughout the signup journey was quickly becoming unmanageable.
        </p>
        <h4>Goals</h4>
        <p>
          It was critical to understand the top pain points that sales staff were having when managing the customer journey to ensure this experience was easily manageable. I planned on drilling down in interviews to find out if any additional information would help with their day to day duties. I also wanted to explore how the system could reduce the number of drop offs in the signup journey with the goal of increasing subscriptions.
        </p>
      </div>
    </div>

    <div class="page flat-bg auto-height">
      <div class="content spacer-top">
        <h2>RESEARCH<span>.</span></h2>
        <h4>Current State Evaluation</h4>
        <p>I started the process by reviewing and documenting the customer journey to gain a full overview of the current situation. I reviewed the data that sales staff were required to track, which gave me insights in the day to day duties of sales staff which I could dig into during interviews.</p>

        <h6 class="top-space">Strengths</h6>
        <div class="alt-flexed">
          <div class="note">Staff can look up customer database names.</div>
          <div class="note">Staff can look up customer contact details.</div>
        </div>

        <h6 class="top-space">Weaknesses</h6>
        <div class="flexed">
          <div class="note">Unable to see a  customer’s previous interactions with Nookal.</div>
          <div class="note">Unable to see where a customer is during the signup journey.</div>
          <div class="note">Does not allow a staff to view or manage a customer’s data conversion.</div>
          <div class="note">Unable to see who is managing each customer.</div>
        </div>
      </div>
    </div>

    <div class="page vert-space-lge">
      <div class="content">
        <h4>Interviews</h4>
        <p>I started the interview process with a round table interview with the Head of Sales and several sales staff. This revealed that they were managing the clients through the signup process with  spreadsheets.</p>
        <p class="space-top-sml">I discovered further problems were arising and were starting to impact customers. It was taking an increasing amount of time to track and manage customers and the processes being used were inconsistent between staff. In addition the process for handling conversions had caused some customers frustrations due to lack of communication.</p>
        <p class="space-top-sml">Below are some insights and highlights obtained from the interviews:</p>
        <div class="flexed-col">
          <div class="points alt">Staff need a way to view and manage customers at each step of the journey.</div>
          <div class="points alt">Staff need to be automatically notified when a customer becomes inactive.</div>
          <div class="points alt">Staff want to be able to view and track their tasks.</div>
          <div class="points alt">Ability to be able to assign tasks to other staff.</div>
          <div class="points alt">Staff need access via tablet and mobile devices whilst out of the office.</div>
        </div>

        <h4 class="space-top-med">Questionnaire</h4>
        <p>I emailed questionnaires to both recently signed up customers and lost leads to see if I could highlight any common good or bad experiences that customers were having. The results were varied but two common themes became obvious:</p>
        <div class="flexed space-top-sml">
          <div class="boxed">Customers who signed up did report positive communications with sales staff and the demo’s did a great job of outlining the features and usefulness of Nookal.</div>
          <div class="boxed">After the initial demo some customers did not receive any follow up communications. Other customers also reported a several day delay in response to communications.</div>
        </div>
      </div>
    </div>

    <div class="page vert-space-lge">
      <div class="content">
        <h4>Personas</h4>
        <p>The information I had gathered allowed me to create two personas to reflect the research. These personas helped to bridge the research results with the requirements.</p>
        <img class="screenshot space-top-sml" src="../../assets/images/sales/sales-persona-1.png" alt="Persona details" />
        <img class="screenshot space-top-sml" src="../../assets/images/sales/sales-persona-2.png" alt="Persona details" />
      </div>
    </div>

    <div class="page flat-bg vert-space-lge">
      <div class="content">
        <h4>Customer Signup Journey</h4>
        <p>Due to the research it was apparent that changes needed to be made to the user signup journey. Customers requiring a conversion needed specialised service and generally would need more attention from sales staff. Another common problem was that demos were being booked, but not attended.</p>
        <p class="space-top-sml">I needed to ensure that sales staff were notified if a demo was not attended, to allow for rebooking. Sales staff also needed to be notified during the follow up period once a customer has attended a demo, to ensure any follow up questions and concerns could be handled.</p>
        <div class="label-heading space-top-med">User Signup Journey Flow Chart</div>
        <img class="screenshot space-top-sml img-bg" src="../../assets/images/sales/sales-signup.png" alt="User signup journey" />
      </div>
    </div>

    <div class="page vert-space-lge">
      <div class="content">
        <h2>DEFINE<span>.</span></h2>
        <div class="image-label space-btm-med">
          <h6>Product Statement</h6>
          <p>Enabling sales staff to effectively manage customers through the signup journey, whilst providing the relevant information and tools to do so.</p>
        </div>
        <h4>Use Cases</h4>
        <img class="screenshot img-bg" src="../../assets/images/sales/sales-req.png" alt="Sales Dashboard Requirements and Solutions" />
      </div>
    </div>

    <div class="page flat-bg vert-space-lge">
      <div class="content">
        <h4 class="space-top-sml">Sitemap</h4>
          <p>I created a site map to help group and list the elements that were needed on each page.</p>
          <img class="screenshot site-nav" src="../../assets/images/sales/sales-sitemap.png" alt="Sitemap of the Dashboard" />
      </div>
    </div>

    <div class="page vert-space-lge">
      <div class="content">
        <h2>CREATE<span>.</span></h2>
        <h4>Wireframes</h4>
        <p>I started off with simple wireframes to allow me to quickly try out different layout ideas. I don’t want to focus on specific elements at this point, instead laying out each page by grouping elements on priority of importance.</p>
      </div>
    </div>
    <div class="page flat-bg flexed-col">
      <div class="content">
        <div class="image-holder">
          <div class="label-heading">Dashboard</div>
          <img class="wireframe" src="../../assets/images/sales/sales-wire-1.png" alt="Wireframe dashboard example" />
          <div class="label-heading">Task Details</div>
          <img class="wireframe" src="../../assets/images/sales/sales-wire-2.png" alt="Wireframe task details example" />
          <div class="label-heading">Customers Page</div>
          <img class="wireframe" src="../../assets/images/sales/sales-wire-3.png" alt="Wireframe customers page example" />
          <div class="label-heading">Customer Details</div>
          <img class="wireframe" src="../../assets/images/sales/sales-wire-4.png" alt="Wireframe customer details example" />
          <div class="label-heading">Conversions Page</div>
          <img class="wireframe" src="../../assets/images/sales/sales-wire-5.png" alt="Wireframe conversions page example" />
          <div class="label-heading">Notifications Page</div>
          <img class="wireframe" src="../../assets/images/sales/sales-wire-6.png" alt="Wireframe notifications page example" />
        </div>
      </div>
    </div>

    <div class="page vert-space-lge-med">
      <div class="content">
        <h4>Low Fidelity Mockups</h4>
        <p>During this phase I started to flesh out the details of the elements on each page, I went through several iterations on the the key information card to best logically represent the customer moving through the different stages. I also decided to make these cards clickable, allowing staff to quickly view the customers in each step. </p>
      </div>
    </div>
    <div class="page flat-bg flexed-col">
      <div class="content">
        <div class="image-holder">
          <div class="label-heading">Dashboard</div>
          <img class="wireframe" src="../../assets/images/sales/sales-low-1.png" alt="Low fidelity of the Dashboard" />
          <div class="label-heading">Task Details</div>
          <img class="wireframe" src="../../assets/images/sales/sales-low-2.png" alt="Low fidelity of Task Details" />
          <div class="label-heading">Customers Page</div>
          <img class="wireframe" src="../../assets/images/sales/sales-low-3.png" alt="Low fidelity of the Customers Page" />
          <div class="label-heading">Customer Details</div>
          <img class="wireframe" src="../../assets/images/sales/sales-low-4.png" alt="Low fidelity of Customer Details" />
          <div class="label-heading">Conversions Page</div>
          <img class="wireframe" src="../../assets/images/sales/sales-low-5.png" alt="Low fidelity of Conversions" />
          <div class="label-heading">Notifications Page</div>
          <img class="wireframe" src="../../assets/images/sales/sales-low-6.png" alt="Low fidelity of Notifications" />
        </div>
      </div>
    </div>

    <div class="page no-bg vert-space-lge">
      <div class="content">
        <h2>PROTOTYPE<span>.</span></h2>
        <h4>UI Toolkit</h4>
        <img class="toolkit space-top-sml" src="../../assets/images/sales/sales-toolkit.png" alt="UI Toolkit for Online Bookings" />
      </div>
    </div>


    <div class="page">
      <div class="content">
        <h4>High Fidelity Mockups</h4>
        <div class="image-holder clear-margin">
          <div class="label-details">
            <h6>Dashboard</h6>
            <p>The full customer sign up journey is shown from Leads to Post Signup. Charts were added to provide the staff with addition information around trials and signups. This solves the problem staff were having by giving them an in-depth overview of the current situation at a glance.</p>
          </div>
          <img class="hi-res" src="../../assets/images/sales/sales-high-1.png" alt="High fidelity of the dashboard" />

          <div class="label-details">
            <h6>Clickable Cards</h6>
            <p>After clicking on a step, the charts are automatically hidden and a table is presented. The table lists all the corresponding tasks for that step in the journey. This helps to solve the problem staff were having managing their tasks and understanding the specific details of each customer.</p>
          </div>
          <img class="hi-res" src="../../assets/images/sales/sales-high-2.png" alt="High fidelity of Practitioner Selection" />

          <div class="label-details">
            <h6>Customer Flow</h6>
            <p>
              After clicking on a task a side panel sides in, allowing the staff member to record required information and move the customer to the next step when ready. This helps to solve the problem staff were having tracking each customer and ensuring customers are communicated with in a timely manner.</p>
          </div>
          <img class="hi-res" src="../../assets/images/sales/sales-high-3.png" alt="High fidelity of Customer Flow" />

          <div class="label-details">
            <h6>Customers</h6>
            <p>Clicking the Customers link in the navigation shows a list of all Customers. The search added allows more search parameters and the dropdown filter allows the user to search for a specific customer type. This helps solve the problem staff were having finding specific customers or groups of customer types.</p>
          </div>
          <img class="hi-res" src="../../assets/images/sales/sales-high-4.png" alt="High fidelity of the Customers list" />

          <div class="label-details">
            <h6>Customer Details</h6>
            <p>After clicking on a Customer from the customer list, Staff are given detailed information about that customer. A timeline is shown in the panel on the right, giving a full history of the customers interactions with Nookal. This helps to solve the problem staff were having finding out information about a customer once they had signed up.</p>
          </div>
          <img class="hi-res" src="../../assets/images/sales/sales-high-5.png" alt="High fidelity of the Customer Details" />

          <div class="label-details">
            <h6>Customer Timeline</h6>
            <p>Clicking on a timeline element, expands to show more details about that interaction. This helps to solve the problems staff were having knowing about past customer interactions. Clicking on the plus icon at the bottom of the timeline gives the staff member access to adding a note, phone call or sending an email. This helps to solve the problems staff were having recording interactions with subscribed customers.</p>
          </div>
          <img class="hi-res" src="../../assets/images/sales/sales-high-6.png" alt="High fidelity of the Customer Timeline" />

          <div class="label-details">
            <h6>Conversions Page</h6>
            <p>The conversion page gives a staff member the ability to organise, record and communication to relevant parties during a data conversion. The conversion checklist panel helps to ensure the staff member follows the same process each time. The conversion page has greatly helped the team manage the conversion process and resulted in a reduction of the average conversion time by 18%.</p>
          </div>
          <img class="hi-res" src="../../assets/images/sales/sales-high-7.png" alt="High fidelity of the Conversions page" />

          <div class="label-details">
            <h6>Notifications Page</h6>
            <p>The notification page shows a tab for each step in the sign up journey. A notification will be send to the staff member when a customer is moved into their area of responsibility. Each step is separated out by region allowing staff to be assigned to their respective area. This helps to solve the problem staff were having not knowing when a customer needs to be attended to and has had a significantly reduced the number of days customers are left waiting for service.</p>
          </div>
          <img class="hi-res" src="../../assets/images/sales/sales-high-8.png" alt="High fidelity of the Notifications page" />
        </div>
      </div>
    </div>

    <div class="page no-bg vert-space-lge-med">
      <div class="content">
        <h4>Tablet and Mobile</h4>
        <p>The majority of staff planned to use the platform on a desktop, however some staff had reported the need for portable solutions. Some staff wanted to check their task list before coming to work each day and other were on the road and needed to look up customer information. To accommodate these requests a the was also designed and developed for tablet and mobile devices.</p>
      </div>
    </div>

    <div class="row-images sales">
      <div class="tablet-holder">
        <img class="tablet" src="../../assets/images/sales/sales-tablet-1.png" alt="Tablet example of the Dashboard" />
        <img class="tablet" src="../../assets/images/sales/sales-tablet-2.png" alt="Tablet example of the Tasks list" />
        <img class="tablet" src="../../assets/images/sales/sales-tablet-3.png" alt="Tablet example of Task details" />
        <img class="tablet" src="../../assets/images/sales/sales-tablet-4.png" alt="Tablet example of Customers List" />
      </div>

      <div class="mobile-holder">
        <img class="mobile" src="../../assets/images/sales/sales-mobile-1.png" alt="Mobile homepage example" />
        <img class="mobile" src="../../assets/images/sales/sales-mobile-2.png" alt="Mobile example of Location Selection" />
        <img class="mobile" src="../../assets/images/sales/sales-mobile-3.png" alt="Mobile example of Practitioner Selection" />
        <img class="mobile" src="../../assets/images/sales/sales-mobile-4.png" alt="Mobile example of Appointment Selection" />
        <img class="mobile" src="../../assets/images/sales/sales-mobile-5.png" alt="Mobile example of Booking Details" />
      </div>
    </div>

    <div class="page vert-space-lge-med">
      <div class="content">
        <h2>TEST<span>.</span></h2>
        <h4>Usability Testing</h4>
        <p>I conducted usability testing on this project by creating a series of use cases for staff to complete. The usability tests were done remotely, this allowed be record the results. This provided me with valuable insights to how staff used the platform, which I was able to follow up with questions to validate my findings.</p>
        <p>The key takeaways from this process led to some design changes to reorganise the customer journey, minimise the navigation area, add notes and reorganise  elements on the conversions page.</p>

        <div class="label-details space-top-med">
          <h6>Minimise Navigation</h6>
          <p>During testing I discovered staff would prefer more room for the main content area, rather than the navigation. I redesigned the navigation to allow for this.</p>
        </div>
        <img class="hi-res" src="../../assets/images/sales/sales-dash-nav.png" alt="High fidelity improved navigation" />
      </div>
    </div>

    <div class="page vert-space-lge-med colour-bg-alt conclusion">
      <div class="content">
        <h4>Conclusion</h4>
        <p>The dashboard has been a huge success within the sales team and has been incorporated into everyday use. Sales processes have been put in place around the dashboard and we have seen an increase in converting trials to subscriptions by 14%. In addition the average response time to enquiries has improved by 26%, demonstrating that the platform provides the tools for sales staff to effectively manage clients in the signup journey.</p>
        <p class="space-top-sml">Working closely with the sales team through all phases of the project, showed me the benefits of consistent communication. This was instrumental to ensuing that the functionality, interactions and work flow matched the needs of the end user.</p>
      </div>
    </div>
  </div>






</template>

<script>
export default {
  name: "SalesDashboard",
  created() {
    document.title = "Sales Dashboard";
  },
}
</script>

<style scoped>
  @import "./sales.scss";
  @import "./projects.scss";
</style>