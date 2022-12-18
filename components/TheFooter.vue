<template>
  <footer class="footer mt-auto py-3 m-3">
    <hr>
    <div class="row text-center mx-0">
      <div class="col-12 col-md-4 mb-4">
        <h5>
          &#169; {{ currentYear }} Aura Learning - All rights reserved
        </h5>
      </div>
      <div class="col-12 col-md-4 mb-2">
        <div class="text-center">
          <h4>Need help?</h4>
          <h5 class="mb-1">Phone:
            <a href="tel:+34 722 114 677">
              +34 722 114 677
            </a>
          </h5>
          <h5 class="mb-1">Email:
            <a href="mailto:aaronsiebertsio@gmail.com">
              aaronsiebertsio@gmail.com
            </a>
          </h5>
        </div>
      </div>
      <div class="col-12 col-md-4 mb-2">
        <!-- <h5>Social links</h5>
        <div class="d-flex justify-content-around">
          <span>
            <a href="https://www.facebook.com/" target="_blank">
              <img src="@/assets/icons/facebook.svg" alt="Facebook">
            </a>
          </span>
          <span>
            <a href="https://www.instagram.com/" target="_blank">
              <img src="@/assets/icons/instagram.svg" alt="Instagram">
            </a>
          </span>
          <span>
            <a href="https://www.youtube.com/" target="_blank">
              <img src="@/assets/icons/youtube.svg" alt="YouTube">
            </a>
          </span>
        </div> -->
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const currentYear = new Date().getFullYear();
</script>

<style lang="scss" scoped>

</style>