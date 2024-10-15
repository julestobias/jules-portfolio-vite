<template lang="">
  <div class="badges-container">
    <h1>SKILL BADGES</h1>
    <div class="badge-card-wrapper">
      <div class="badge-card" v-for="badge in badges" :key="badge.label">
        <img :src="badge.img" alt="icons" />
        <p>{{ badge.label }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      badges: [
        {
          label: "HTML",
          img: "https://res.cloudinary.com/dz1lbexlg/image/upload/v1729007505/html-5_etu5uo.svg",
        },
        {
          label: "CSS",
          img: "https://res.cloudinary.com/dz1lbexlg/image/upload/v1729009971/css-3_bmacfy.svg",
        },
        {
          label: "JAVASCRIPT",
          img: "https://res.cloudinary.com/dz1lbexlg/image/upload/v1729009980/javascript_bk2aif.svg",
        },
        {
          label: "REACTJS",
          img: "https://res.cloudinary.com/dz1lbexlg/image/upload/v1729009978/reactjs_m6tdlp.svg",
        },
        {
          label: "NEXTJS",
          img: "https://res.cloudinary.com/dz1lbexlg/image/upload/v1729009980/nextjs_xsod5f.svg",
        },
        {
          label: "VUEJS",
          img: "https://res.cloudinary.com/dz1lbexlg/image/upload/v1729009980/vuejs_uyamjl.svg",
        },
        {
          label: "NODEJS",
          img: "https://res.cloudinary.com/dz1lbexlg/image/upload/v1729009981/node-js_vvsy8s.svg",
        },
        {
          label: "MONGO DB",
          img: "https://res.cloudinary.com/dz1lbexlg/image/upload/v1729009980/mongo-db_jtedoa.svg",
        },
        {
          label: "SCSS",
          img: "https://res.cloudinary.com/dz1lbexlg/image/upload/v1729009978/scss_gjsaah.svg",
        },
        {
          label: "BOOTSTRAP",
          img: "https://res.cloudinary.com/dz1lbexlg/image/upload/v1729009972/bootstrap_rzp0fm.svg",
        },
        {
          label: "TAILWIND",
          img: "https://res.cloudinary.com/dz1lbexlg/image/upload/v1729009979/tailwind_nkxmxd.svg",
        },
        {
          label: "PRIMEVUE",
          img: "https://res.cloudinary.com/dz1lbexlg/image/upload/v1729009986/primevue_lqtnxz.svg",
        },
        {
          label: "GITHUB",
          img: "https://res.cloudinary.com/dz1lbexlg/image/upload/v1729009971/github_ti9lup.svg",
        },
        {
          label: "GITLAB",
          img: "https://res.cloudinary.com/dz1lbexlg/image/upload/v1729009971/gitlab_zkg5ta.svg",
        },
        {
          label: "JIRA",
          img: "https://res.cloudinary.com/dz1lbexlg/image/upload/v1729009980/jira_dh2tdc.svg",
        },
        {
          label: "CLICKUP",
          img: "https://res.cloudinary.com/dz1lbexlg/image/upload/v1729009973/clickup_k9yohq.svg",
        },
        {
          label: "SUBLIME TEXT",
          img: "https://res.cloudinary.com/dz1lbexlg/image/upload/v1729009978/sublime-text_jgu4d7.svg",
        },
        {
          label: "VS CODE",
          img: "https://res.cloudinary.com/dz1lbexlg/image/upload/v1729009979/vs-code_or2svf.svg",
        },
        {
          label: "WEBSTORM",
          img: "https://res.cloudinary.com/dz1lbexlg/image/upload/v1729009980/webstorm_rkbp1j.svg",
        },
        {
          label: "AWS AMPLIFY",
          img: "https://res.cloudinary.com/dz1lbexlg/image/upload/v1729009971/amplify_ftflsc.svg",
        },
        {
          label: "CLOUDINARY",
          img: "https://res.cloudinary.com/dz1lbexlg/image/upload/v1729009971/cloudinary_mxwtjz.svg",
        },
        {
          label: "POSTMAN",
          img: "https://res.cloudinary.com/dz1lbexlg/image/upload/v1729009986/postman_xqjb6i.svg",
        },
        {
          label: "FIGMA",
          img: "https://res.cloudinary.com/dz1lbexlg/image/upload/v1729009971/figma_iodm35.svg",
        },
        {
          label: "PHOTOSHOP",
          img: "https://res.cloudinary.com/dz1lbexlg/image/upload/v1729009986/photoshop_t5y9ax.svg",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
