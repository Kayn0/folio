<template>
  <div id="about">

      <div class="flex-row">

      <div class="content">

        <div class="left">
          <div class="circle"></div>
        </div>
        <div class="right">
          <h2>ABOUT ME<span>.</span></h2>
          <p>I have a passion for creating exceptional, considered design solutions. Having several years experience as a Product Designer, I have honed my skills producing low and high-resolution mockups with Figma and Adobe Creative Suite. I excel in understanding the users goals through client meetings, user research, analytics and product demonstrations. This allows me to design and deliver products that exceed expectations.</p>
          <p class="space-top-about">When required I enjoy using my frontend development experience to create rapid prototypes to demonstrate complex interactions and transitions. I have experience leading small and large scale products, solving complex design problems, conforming to AAA accessibility standards, and ensuring my designs are responsive, scalable and provide a delightful experience.</p>
          <h6 class="space-top-about">Skills</h6>
          <p>UI/UX Design • Creative Direction • Web Design • Brand Strategy • User Flows • High fidelity Prototyping • Developer Hand-off • User Testing • Cross-platform Design (Mobile, Tablet, Desktop)</p>
          <h6 class="space-top-sml">Tools</h6>
          <p>Figma • Sketch • Adobe Creative Suite • Photoshop • Illustrator • InDesign</p>
        </div>
      </div>

      </div>
    </div>

</template>

<script>
export default {
  name: "about",
  created() {
    document.title = "About";
  },
};
</script>

<style scoped>
@import "../Projects/projects.scss";
@import "./about.scss";
</style>
