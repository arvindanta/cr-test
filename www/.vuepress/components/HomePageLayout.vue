<template>
  <div class="home-page-container">
    <ClientOnly>
    <LandingPage />
    <AppFooter />
    <ClientOnly />
  </div>
</template>

<style>
.home-page-container {
  width: 100%;
  background: url('../public/assets/crayons-bg.svg') no-repeat;
  background-size: 100%;
}

@media only screen and (max-width: 48rem) {
  .home-page-container {
    background-size: 500%;
  }
}
</style>
