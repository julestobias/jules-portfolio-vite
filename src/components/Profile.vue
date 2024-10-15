<template lang="">
  <div class="profile-container">
    <div class="bg-img-container">
      <img
        src="https://res.cloudinary.com/dz1lbexlg/image/upload/v1728782985/green-light-bg2_movpee.png"
        alt=""
        class="bg-img"
      />
    </div>

    <div class="img-container">
      <img
        src="https://res.cloudinary.com/dz1lbexlg/image/upload/v1728773393/Panda_yisfhx.png"
        alt="image of a panda as a profile picture"
      />
    </div>

    <h1 class="name">Tobias</h1>
    <h1 class="title">Web Developer</h1>

    <div class="btn-container">
      <Button
        label="GitHub"
        severity="success"
        outlined
        icon="pi pi-github"
        @click="goToGithub"
      />
      <Button
        label="LinkedIn"
        severity="success"
        outlined
        icon="pi pi-linkedin"
        @click="goToLinkedin"
      />
    </div>

    <Badge />
  </div>
</template>
<script>
export default {
  methods: {
    goToGithub() {
      window.open("https://github.com/julestobias", "_blank");
    },
    goToLinkedin() {
      window.open("https://www.linkedin.com/in/julestobias/", "_blank");
    },
  },
};
</script>
<style lang=""></style>
