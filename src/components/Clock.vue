<template>
  <div class="Clock">
    <p>{{ time }}</p>
  </div>
</template>

<script>
export default {
  name: "Clock",

  data() {
    return {
      time: null,
      interval: null,
    };
  },

  created() {
    // update the time every second
    this.interval = setInterval(() => {
      // Concise way to format time according to system locale.
      // In my case this returns "3:48:00 am"
      this.time = Intl.DateTimeFormat(navigator.language, {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }).format();
    }, 1000);
  },
};
</script>